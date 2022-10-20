import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 500
    },
    status: {
        type: String,
        enum: ["ACCEPTD","DELIVRD","UNDELIV","UNKNOWN"],
        default: "UNKNOWN"
    },
    DeliveryTime: {
        type: Date,
    }
})

const messageModel = model("Message", messageSchema)

export default messageModel