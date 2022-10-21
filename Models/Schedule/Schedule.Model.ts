import scheduleModel from "./Schedule.Schema";

export async function addSchedule({contact, message, time}:any) {

   try{
        const schedule = await new scheduleModel({
            contact,
            message,
            time
        }).save()

        if(schedule) return {error: false, schedule}

        return {error: true, message: "unvalid data!"}
   }catch(err:any){
       return {error: true, message: err}
   }
}

export async function getSchedule({from, to}: any){
    try{
        const schedules = await scheduleModel.find({
            time: {
              $gte: from,
              $lte: to
            },
            sent: false
          }).populate({path: "message",select: "message"}).exec();

        if(schedules) return {error: false, schedules}

    }catch(err: any){
        return {error: true, message: err}
    }
}

export async function updateScheduleStatus(scheduleId: string){
    try{
        const schedule = await scheduleModel.findByIdAndUpdate(scheduleId, {sent: true}).exec()

        return {error: false}

    
    }catch(err:any){
        return {error: true, message: err}
    }
}