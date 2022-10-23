import http from "http";
import app from "./app";
import { connectDb } from "./utils/db.util";
import dotenv from "dotenv";
import schedule from "./Features/Schedule/schedule";
import checkingSMS from "./Features/sms/checkingSMS";
import { logger } from "./log/log";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 8080;

const server = http.createServer(app);

server.listen(PORT, async () => {
  await connectDb();
  logger.log({ level: "info", message: `listening on ${PORT}` });
  schedule.start();
  checkingSMS.start();
});
