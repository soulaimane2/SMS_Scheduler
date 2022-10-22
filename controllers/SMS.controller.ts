import { Request, Response } from "express";
import moment from "moment";
import { getSMSByScheduleId } from "../Models/Message/Message.Model";

export async function httpGetSMS(req: Request, res: Response){
    try{
        
        const {schedule_id} = req.params
        const {page,status,from, to}:any = req.query

        const isoFrom = moment(from,"YYYYMMDDHHmm").add(1, "hour").toISOString()
        const isoTo = moment(to,"YYYYMMDDHHmm").add(1, "hour").toISOString()

        const PER_PAGE = 3

        const skip = Number(page) * PER_PAGE || 0

        const {error,message,sms}:any = await getSMSByScheduleId({schedule_id,skip,PER_PAGE, status, from:isoFrom, to:isoTo})

        if(error) return res.status(400).json({error, message})

        if(sms !== undefined) return res.status(200).json({error, sms})

    }catch(err: any){
        return res.status(500).json({error: true, message: "Something went unexpectedly wrong!"})
    }
}