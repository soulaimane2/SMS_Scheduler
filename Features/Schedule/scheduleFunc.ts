import moment from "moment";
import { addMessage } from "../../Models/Message/Message.Model";
import { getSchedule } from "../../Models/Schedule/Schedule.Model";
import { smsSender } from "../sms/sms";

export async function getSchedules(){
    const from = moment().add(1,"hour").subtract(1,"minutes").toISOString()
    const to = moment().add(1,"hour").add(1,"minutes").toISOString()

    const schedules = await getSchedule({from, to})
    
    if(schedules?.error) return {error: true, message: schedules.message}
    
    if(schedules !== undefined ) await sendMessages(schedules.schedules)

    return true


}

export async function sendMessages(schedule:any){
    schedule.forEach(async (sched:any) => {
        const add = await smsSender({
            dnis: sched.contact,
            message: sched.message.message,
            scheduleId: sched._id
        })
        
    const addMessages = await addMessage(Object.values(add.messages))
    console.log(addMessages)
    
    })
}