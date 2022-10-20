import express from "express"
import morgan from "morgan"
import ScheduleRoutes from "./Routes/Schedule.routes"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(ScheduleRoutes)

export default app