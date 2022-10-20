import { Router } from "express";
import { httpAddSchedule } from "../controllers/Schedule.controller";

const ScheduleRoutes = Router()

ScheduleRoutes.post("/schedule/add", httpAddSchedule)



export default ScheduleRoutes