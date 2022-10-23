import { Router } from "express";
import {
  httpAddSchedule,
  httpGetSchedules,
} from "../controllers/Schedule.controller";

const ScheduleRoutes = Router();

/**
 * @openapi
 * paths:
 *  /schedules/add:
 *    post:
 *      summary: schedule message or schedule and run at the same time
 *      description:  runNow field is optional the default is false
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  required: true
 *                time:
 *                  type: string
 *                  example: "example: 2022-10-21T02:49:07.701+00:00"
 *                reciepients:
 *                  type: array
 *                  items:
 *                    type: string
 *                    example: +xxxxxxxxxxxx
 *                  required: true
 *                runNow:
 *                  type: boolean
 *                  required: false
 *                  default: false
 *
 */
ScheduleRoutes.post("/schedules/add", httpAddSchedule);

/**
 * @openapi
 * paths:
 *  /schedules:
 *    get:
 *      summary: get list of schedules with the message attached to each schedule
 *      description:  this schedule take url queries and they are all optional (page, from, to, sent)
 *      parameters:
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
 *            example: YYYYMMDDHHmm
 *          required: false
 *          description: this is starting date you want to filter with
 *        - in: query
 *          name: to
 *          schema:
 *            type: string
 *            example: YYYYMMDDHHmm
 *          required: false
 *          description: this is ending date you want to filter with
 *        - in: query
 *          name: sent
 *          schema:
 *            type: boolean
 *          required: false
 *          description: this is for filtring by sent or not sent schedules
 *
 */

ScheduleRoutes.get("/schedules", httpGetSchedules);

export default ScheduleRoutes;
