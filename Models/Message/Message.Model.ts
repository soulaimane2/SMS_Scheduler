import messageModel from "./Message.Schema";

export async function addMessage({msg}:any) {
    try{

        const message = await new messageModel({
            message: msg
        }).save()
    
        if(message) return {error: false, messageId: message._id}
    
        return {error: true, message: "Something went Wrong!"}

    }catch(err:any){
        return {error: true, message: err}
    }
}