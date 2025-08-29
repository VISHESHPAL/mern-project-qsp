import Joi from "joi";

export const productValidation = Joi.object({
//   image: Joi.string().uri().required(), // Dummy image URL required
  title: Joi.string().trim().lowercase().min(3).max(100).required(),
  description: Joi.string().trim().lowercase().min(10).required(),
  category: Joi.string().trim().lowercase().optional(),
  brand: Joi.string().trim().lowercase().optional(),
  price: Joi.number().min(0).required(),
  salePrice: Joi.number().min(0).default(0),
  totalStock: Joi.number().min(0).required(),
  averageReview: Joi.number().min(0).max(5).default(0)
});
