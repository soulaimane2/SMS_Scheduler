import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db_string: string = String(process.env.DB_STRING);

export const connectDb = async () => {
  await mongoose.connect(db_string);
};

mongoose.connection.once("open", () => {
  console.log("Connected successfuly");
});

mongoose.connection.once("error", (err: any) => {
  throw new Error(err);
});
