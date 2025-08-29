import express from 'express';
import {updateSingleItemAddress, addAddress, deleteAddress, getAllAddress, getSingleAddress, updateAddress } from '../../controllers/shop/address.controller.js';

const productRoutes = express.Router();



productRoutes.post("/add", addAddress);
productRoutes.get("/all", getAllAddress)
productRoutes.get("/:id", getSingleAddress)
productRoutes.put("/:id", updateAddress)
productRoutes.patch("/:id", updateSingleItemAddress)
productRoutes.delete("/:id", deleteAddress)


export default productRoutes;