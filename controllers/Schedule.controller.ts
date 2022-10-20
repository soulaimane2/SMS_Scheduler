import { Request, Response } from "express"
import { smsSender } from "../Features/sms/sms"
import { addMessage } from "../Models/Message/Message.Model"
import { addSchedule } from "../Models/Schedule/Schedule.Model"
import { validateSchema } from "../utils/validators/schemas.validate"

export async function httpAddSchedule (req: Request, res: Response) {
    try{

        const {reciepients, message, time, runNow}:any = req.body

        const {error} = validateSchema.validate({reciepients, message, time})

        if(error) return res.status(400).json({error: true, message: error.message})

        const newMessage = await addMessage({msg: message})

        if(newMessage.error) return res.status(400).json(newMessage.message)
        
        const addNewSchedule = await addSchedule({contact: reciepients, messageId: newMessage.messageId, time:time})

        if(addNewSchedule.error) return res.status(400).json(addNewSchedule)

        if(!runNow) return res.status(201).json({...addNewSchedule, message: "Your message is scheduled"})

        const sendMSG = await smsSender({message: newMessage.message, dnis: addNewSchedule.schedule?.contact})

        if(sendMSG.error) return res.status(400).json(sendMSG)

        return res.status(200).json(sendMSG)
        
    }catch(err: any){
        return res.status(500).json({error: true, message:"Something went wrong!"})
    }
}