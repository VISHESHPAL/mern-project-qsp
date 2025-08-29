import Joi from "joi";

// User Registration
export const registerValidation = Joi.object({
  userName: Joi.string().trim().lowercase().min(3).max(30).required(),
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().min(8).max(50).required()
});
 