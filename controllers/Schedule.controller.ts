import { Request, Response } from "express";
import moment from "moment";
import { smsSender } from "../Features/sms/sms";
import { logger } from "../log/log";
import { addMessage } from "../Models/Message/Message.Model";
import { addSchedule, getSchedules } from "../Models/Schedule/Schedule.Model";
import { validateSchema } from "../utils/validators/schemas.validate";

export async function httpAddSchedule(req: Request, res: Response) {
  try {
    const { reciepients, message, time, runNow }: any = req.body;

    const { error } = validateSchema.validate({ reciepients, message, time });

    if (error) {
      logger.log({ level: "info", message: "unvalid request" });

      return res.status(400).json({ error: true, message: error.message });
    }
    const addNewSchedule = await addSchedule({
      contact: reciepients,
      message: message,
      time: time,
    });

    if (addNewSchedule.error) {
      logger.log({ level: "info", message: addNewSchedule.message });

      return res.status(400).json(addNewSchedule);
    }

    if (!runNow)
      return res
        .status(201)
        .json({ ...addNewSchedule, message: "Your message is scheduled" });

    const sendMSG = await smsSender({
      message: message,
      dnis: addNewSchedule.schedule?.contact,
    });

    if (sendMSG.error) {
      logger.log({ level: "info", message: sendMSG.message });

      return res.status(400).json(sendMSG);
    }

    const addMessages = await addMessage(Object.values(sendMSG.messages));

    if (addMessages.error) {
      logger.log({ level: "info", message: addMessages.message });

      return res.status(400).json(addMessage);
    }
    logger.log({ level: "info", message: "Schedule sent successfuly" });

    return res.status(200).json(sendMSG);
  } catch (err: any) {
    logger.log({ level: "error", message: err });

    return res
      .status(500)
      .json({ error: true, message: "Something went wrong!" });
  }
}

export async function httpGetSchedules(req: Request, res: Response) {
  try {
    const { page, from, to, sent }: any = req.query;

    const PER_PAGE = 5;

    const skip = Number(page) * PER_PAGE || 0;

    const isoFrom = moment(from, "YYYYMMDDHHmm").add(1, "hour").toISOString();
    const isoTo = moment(to, "YYYYMMDDHHmm").add(1, "hour").toISOString();

    const schedules = await getSchedules({
      skip,
      limit: PER_PAGE,
      from: isoFrom,
      to: isoTo,
      sent,
    });

    if (schedules.error) {
      logger.log({ level: "info", message: schedules.message });

      return res.status(400).json(schedules);
    }

    logger.log({ level: "info", message: "Schedules found" });

    return res.status(200).json(schedules);
  } catch (err: any) {
    logger.log({ level: "error", message: err });
    return res.status(500).json({ error: true, message: err });
  }
}
