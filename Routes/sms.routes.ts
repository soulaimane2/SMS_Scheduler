import { Router } from "express";
import { httpGetSMS } from "../controllers/SMS.controller";

const SMSRouter = Router()

/** 
 * @openapi
 * paths:
 *  /sms/{schedule_id}:
 *    get:
 *      summary: get list of schedules with the message attached to each schedule
 *      description:  this schedule take url queries and they are all optional (page, from, to, sent)
 *      parameters:
 *        - in: path
 *          name: schedule_id
 *          schema:
 *            type: string
 *          required: true
 *          description: Add a schedule ID
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *          required: false
 *          description: this param is for page number
 *        - in: query
 *          name: from
 *          schema:
 *            type: string
 *          required: false
 *          description: this is starting date you want to filter with
 *        - in: query
 *          name: to
 *          schema:
 *            type: string
 *          required: false
 *          description: this is ending date you want to filter with
 *        - in: query
 *          name: status
 *          schema:
 *            type: string
 *            enum:
 *              - ACCEPTD
 *              - DELIVRD
 *              - UNDELIV
 *              - UNKNOWN
 *          required: false
 *          description: this is for filtring by sent or not sent schedules
 *         
*/



SMSRouter.get("/sms/:schedule_id", httpGetSMS)



export default SMSRouter