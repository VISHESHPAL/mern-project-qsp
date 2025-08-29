import mongoose from "mongoose";

const productScheam = new mongoose.Schema(
  {
    // image: { type: String, required: true },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      lowercase: true,
    },
    category: {
      type: String,
      lowercase: true,
    },
    brand: {
      type: String,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    salePrice: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalStock: {
      type: Number,
      required: true,
      min: 0,
    },
    averageReview: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productScheam);

export default Product;
