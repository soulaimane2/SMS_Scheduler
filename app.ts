import express from "express";
import morgan from "morgan";
import ScheduleRoutes from "./Routes/Schedule.routes";
import SMSRouter from "./Routes/sms.routes";
import swaggerUI from "swagger-ui-express";
import info from "./docs/info";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

const specs = swaggerJSDoc(info);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());
app.use(morgan("dev"));
app.use(ScheduleRoutes);
app.use(SMSRouter);

export default app;
