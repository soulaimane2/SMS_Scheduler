import smsApi from "../../utils/api/sms.api";

export async function smsSender({message, dnis}:any){
    const dnisJoined:string = dnis.join()

    const response = await smsApi.post("/api",{
        dnis: dnisJoined,
        message: message
    })

    if(response.status !== 200) return {error: true, message: response.data?.message}

    return {error: false, ...response.data, message: "Message is send successfuly!"}
    
}