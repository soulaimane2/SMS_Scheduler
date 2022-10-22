import { Router } from "express";
import { httpGetSMS } from "../controllers/SMS.controller";

const SMSRouter = Router()

SMSRouter.get("/sms/:schedule_id", httpGetSMS)



export default SMSRouter