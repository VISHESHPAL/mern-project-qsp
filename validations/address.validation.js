import Joi from "joi";

export const addressValidation = Joi.object({
  address: Joi.string().min(5).required(),
  city: Joi.string().trim().lowercase().required(),
  pincode: Joi.string().pattern(/^[0-9]{5,6}$/).required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  notes: Joi.string().allow("").optional()
});
