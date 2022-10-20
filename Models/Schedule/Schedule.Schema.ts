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
        type:mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    time: {
        type: Date,
        default: Date.now()
    }
})

const scheduleModel = model("Schedule", scheduleSchema)

export default scheduleModel