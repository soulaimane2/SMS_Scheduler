import messageModel from "./Message.Schema";

export async function addMessage({dnis, messageId}:any) {
    try{

        const message = await new messageModel({
            dnis,
            messageId
        }).save()
    
        if(message) return {error: false}
    
        return {error: true, message: "Something went Wrong!"}

    }catch(err:any){
        return {error: true, message: err}
    }
}