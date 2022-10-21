import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    dnis: {
        type: String,
        match: /^([0|\+[0-9]{1,5})?([0-9]{10})$/
    },
    messageId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["ACCEPTD","DELIVRD","UNDELIV","UNKNOWN"],
        default: "UNKNOWN"
    },
    DeliveryTime: {
        type: Date,
        default: null
    }
})

const messageModel = model("Message", messageSchema)

export default messageModel