import dotenv from "dotenv";
import mongoose from "mongoose";
import { logger } from "../log/log";

dotenv.config();

const db_string: string = String(process.env.DB_STRING);

export const connectDb = async () => {
  await mongoose.connect(db_string);
};

mongoose.connection.once("open", () => {
  logger.log({ level: "info", message: `"Connected successfuly"` });
});

mongoose.connection.once("error", (err: any) => {
  logger.log({ level: "error", message: err });
  throw new Error(err);
});
