import express from "express";
import {
  updateSingleItemAddress,
  addAddress,
  deleteAddress,
  getAllAddress,
  getSingleAddress,
  updateAddress,
} from "../../controllers/shop/address.controller.js";
import authenticate from "../../middleware/auth.middleware.js";
import validateRequest from "../../middleware/validation.middleware.js";
import { addressValidation } from "../../validations/address.validation.js";

const addressRoutes = express.Router();

addressRoutes.post("/add", authenticate, validateRequest(addressValidation), addAddress);
addressRoutes.get("/all", authenticate, getAllAddress);
addressRoutes.get("/:id", authenticate, getSingleAddress);
addressRoutes.put("/:id", authenticate, validateRequest(addressValidation),  updateAddress);
addressRoutes.patch("/:id", authenticate, updateSingleItemAddress);
addressRoutes.delete("/:id", authenticate, deleteAddress);

export default addressRoutes;
