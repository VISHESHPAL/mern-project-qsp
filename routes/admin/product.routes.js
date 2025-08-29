import express from 'express';
import {createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct, updateSingleItemProduct}  from '../../controllers/admin/product.controller.js'

const productRoutes = express.Router();



productRoutes.post("/create", createProduct);
productRoutes.get("/all", getAllProduct)
productRoutes.get("/:id", getSingleProduct)
productRoutes.put("/:id", updateProduct)
productRoutes.patch("/:id", updateSingleItemProduct)
productRoutes.delete("/:id", deleteProduct)


export default productRoutes;