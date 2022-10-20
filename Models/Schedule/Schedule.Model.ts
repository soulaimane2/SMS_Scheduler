import scheduleModel from "./Schedule.Schema";

export async function addSchedule({contact, messageId, time}:any) {

   try{
        const schedule = await new scheduleModel({
            contact,
            message: messageId,
            time
        }).save()

        if(schedule) return {error: false, schedule}

        return {error: true, message: "unvalid data!"}
   }catch(err:any){
       return {error: true, message: err}
   }
}