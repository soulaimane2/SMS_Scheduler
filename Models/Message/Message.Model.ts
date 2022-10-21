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