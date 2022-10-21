import { boolean } from "joi";
import mongoose, { model, Schema } from "mongoose";

const scheduleSchema  = new Schema({
    contact: {
        type: [{
            type: String,
            match: [/^([0|\+[0-9]{1,5})?([0-9]{10})$/, "The number Provided isn't valid"]
        }],
        required: [true, 'User phone number required']
      },
      message: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 500
    },
    time: {
        type: Date,
        default: Date.now()
    },
    sent:{
        type: Boolean,
        default: false
    }
})

const scheduleModel = model("Schedule", scheduleSchema)

export default scheduleModel