import messageModel from "./Message.Schema";

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
