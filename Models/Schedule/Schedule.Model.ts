import scheduleModel from "./Schedule.Schema";

export async function addSchedule({ contact, message, time }: any) {
  try {
    const schedule = await new scheduleModel({
      contact,
      message,
      time,
    }).save();

    if (schedule) return { error: false, schedule };

    return { error: true, message: "unvalid data!" };
  } catch (err: any) {
    return { error: true, message: err };
  }
}

export async function getSchedule({ from, to }: any) {
  try {
    const schedules = await scheduleModel
      .find({
        time: {
          $gte: from,
          $lte: to,
        },
        sent: false,
      })
      .populate({ path: "message", select: "message" })
      .exec();

    if (schedules) return { error: false, schedules };
  } catch (err: any) {
    return { error: true, message: err };
  }
}

export async function updateScheduleStatus(scheduleId: string) {
  try {
    const schedule = await scheduleModel
      .findByIdAndUpdate(scheduleId, { sent: true })
      .exec();

    return { error: false };
  } catch (err: any) {
    return { error: true, message: err };
  }
}

export async function getSchedules({ skip, limit, from, to, sent }: any) {
  try {
    const status: any = sent !== undefined && "sent";

    const opts = from &&
      to && {
        time: {
          $gte: from,
          $lte: to,
        },
      };

    const schedule = await scheduleModel
      .find({ ...opts, [status]: sent }, {}, { skip: skip, limit: limit })
      .exec();

    if (schedule) return { error: false, schedule };

    return { error: false, message: "No schedules found!" };
  } catch (err: any) {
    return { error: true, message: err };
  }
}

export async function getScheduleById(schedule_id: string) {
  try {
    const schedule = await scheduleModel.findById(schedule_id).exec();

    if (schedule) return { error: false, schedule };

    return { error: true, message: "No Schedule with this ID is found!" };
  } catch (err: any) {
    return { error: true, message: "something went wrong!" };
  }
}
