import messageModel from "./Message.Schema";
import {getScheduleById} from "../Schedule/Schedule.Model"

export async function addMessage(data:any) {
    try{

        const message = await messageModel.insertMany(data)
    
        if(message) return {error: false, message}
    
        return {error: true, message: "Something went Wrong!"}

    }catch(err:any){
        return {error: true, message: err}
    }
}

export async function getAcceptdSms() {
    try{

        const sms = await messageModel.find({status: "ACCEPTD"}).exec()

        if(sms.length > 0) return {error: false, sms: [...sms]}

        return {error: true, message: "no sms is found!"}

    }catch(err: any){
        return {error: true, message: err}
    }
}

export async function updateSMSStatus(id:string, status: string, deliveryTime:string){
    try{

        const sms = await messageModel.findByIdAndUpdate(id, {status: status, DeliveryTime: deliveryTime}).exec()

        if(sms) return {error: false, sms}

        return {error: true, message: "no sms is found!"}

    }catch(err: any){
        return {error: true, message: err}
    }
}


export async function getSMSByScheduleId({schedule_id,skip,PER_PAGE,status,from, to}:any) {
    try{
        const {error,message,schedule} = await getScheduleById(schedule_id)
        const stat: any = status !== undefined && "status" 
        const opts = from && to && {
            time: {
                $gte: from,
                $lte: to
          }
        }

        if(schedule !== undefined) {

            const sms = await messageModel.find({dnis: schedule?.contact, ...opts, [stat]:status},{_id:0,message_id:0,__v:0},{skip
            ,limit: PER_PAGE}).exec()

            if(sms) return {error: false, sms}
            
            return { error: true, message:"No SMSs are in this schedule!" }

        }

        if(error) return {error: true, message}
    
    }catch(err: any){
        return {error: true, message: err}
    }
    
}