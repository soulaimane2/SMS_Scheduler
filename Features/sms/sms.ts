import { updateScheduleStatus } from "../../Models/Schedule/Schedule.Model";
import smsApi from "../../utils/api/sms.api";

export async function smsSender({message, dnis, scheduleId}:any){
    const dnisJoined:string = dnis.join()

    const response = await smsApi.post("/api",{
        dnis: dnisJoined,
        message: message
    })

    if(response.status !== 200) return {error: true, message: response.data?.message}

    const updateStatus = await updateScheduleStatus(scheduleId)

    if(updateStatus.error) return {error: true, message: updateStatus.message}

    return {error: false, messages: {...response.data}, message: "Message is send successfuly!"}
    
}