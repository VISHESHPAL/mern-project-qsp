import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
    },
    city: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    pincode: {
      type: String,
      required: true,
      match: /^[0-9]{5,6}$/,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
