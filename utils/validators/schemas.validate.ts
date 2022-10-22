import Joi from "joi";

export const validateSchema =  Joi?.object({
    reciepients: Joi.array().min(1).items(Joi.string().pattern(/^([0|\+[0-9]{1,5})?([0-9]{10})$/)).required(),
    message: Joi.string().min(3).required(),
    time: Joi.date().greater('now')
})