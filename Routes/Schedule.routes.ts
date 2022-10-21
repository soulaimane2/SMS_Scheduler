import { Router } from "express";
import { httpAddSchedule, httpGetSchedules } from "../controllers/Schedule.controller";

const ScheduleRoutes = Router()

ScheduleRoutes.post("/schedules/add", httpAddSchedule)
ScheduleRoutes.get("/schedules", httpGetSchedules)



export default ScheduleRoutes