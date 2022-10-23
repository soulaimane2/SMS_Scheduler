import {
  getAcceptdSms,
  updateSMSStatus,
} from "../../Models/Message/Message.Model";
import { updateScheduleStatus } from "../../Models/Schedule/Schedule.Model";
import smsApi from "../../utils/api/sms.api";

export async function smsSender({ message, dnis, scheduleId }: any) {
  const dnisJoined: string = dnis.join();

  const response = await smsApi.post("/api", {
    dnis: dnisJoined,
    message: message,
  });

  if (response.status !== 200)
    return { error: true, message: response.data?.message };

  const updateStatus = await updateScheduleStatus(scheduleId);

  if (updateStatus.error) return { error: true, message: updateStatus.message };

  return {
    error: false,
    messages: { ...response.data },
    message: "Message is send successfuly!",
  };
}

export async function checkAndUpdateSmsStatus() {
  const sms = await getAcceptdSms();

  if (sms.error) return sms;

  await checkStatus(sms.sms);
}

async function checkStatus(sms: any) {
  sms.forEach(async (message: any) => {
    const { data } = await smsApi.get("/api", {
      params: {
        messageId: message.message_id,
      },
    });
    const updatedSMS = await updateSMSStatus(
      message._id,
      data.status,
      data.delivery_time
    );

    console.log(updatedSMS);
  });
  return;
}
