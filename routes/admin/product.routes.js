import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  updateSingleItemProduct,
} from "../../controllers/admin/product.controller.js";
import validateRequest from "../../middleware/validation.middleware.js";
import { productValidation } from "../../validations/product.validation.js";
import authenticate from "../../middleware/auth.middleware.js";

const productRoutes = express.Router();

productRoutes.post("/create", authenticate,  validateRequest(productValidation), createProduct);
productRoutes.get("/all", authenticate,  getAllProduct);
productRoutes.get("/:id", authenticate, getSingleProduct);
productRoutes.put("/:id", authenticate, validateRequest(productValidation), updateProduct);
productRoutes.patch("/:id", authenticate,  updateSingleItemProduct);
productRoutes.delete("/:id", authenticate,  deleteProduct);

export default productRoutes;
