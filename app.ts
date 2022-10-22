import express from "express"
import morgan from "morgan"
import ScheduleRoutes from "./Routes/Schedule.routes"
import SMSRouter from "./Routes/sms.routes"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(ScheduleRoutes)
app.use(SMSRouter)

export default app