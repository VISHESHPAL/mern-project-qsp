import expressAsyncHandler from "express-async-handler";
import Address from "../../models/address.model.js";
import ApiResponse from "../../utils/ApiResponse.util.js";
import CustomError from "../../utils/customError.util.js";

export const addAddress = expressAsyncHandler(async (req, res, next) => {
  const { address, city, pincode, phone, notes } = req.body;

  const newAddress = await Address.create({
    userId: req.user._id,
    address,
    city,
    pincode,
    phone,
    notes,
  });

  return new ApiResponse(
    201,
    "Address Added Successfully !",
    true,
    newAddress
  ).send(res);
});

export const getAllAddress = expressAsyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const addresses = await Address.find({ userId });

  return new ApiResponse(
    200,
    "Address Fetched Successfully ! ",
    true,
    addresses
  ).send(res);
});

export const getSingleAddress = expressAsyncHandler(async (req, res, next) => {
  const userId = req.user._id;

  const address = await Address.findOne({ _id: req.params.id, userId });
  if (!address) return next(new CustomError("Address Not Found", 404));

  return new ApiResponse(200, "Address Fetched !", true, address).send(res);
});

export const updateSingleItemAddress = expressAsyncHandler(
  async (req, res, next) => {
    const userId = req.user._id;

    const updatedItem = await Address.findByIdAndUpdate(
      { _id: req.params.id, userId },
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedItem) return next(new CustomError("Address Not Found ! ", 200));

    return new ApiResponse(
      201,
      "Address Field Updated ",
      true,
      updatedItem
    ).send(res);
  }
);

export const updateAddress = expressAsyncHandler(async (req, res, next) => {
  const userId = req.user._id;

  const updated = await Address.findByIdAndUpdate(
    { _id: req.params.id, userId },
    req.body,
    {
      new: true,
    }
  );
  if (!updated) return next(new CustomError("Address Not Found ", 404));
  return new ApiResponse(
    202,
    "Address Updated Successfully ! ",
    true,
    updated
  ).send(res);
});

export const deleteAddress = expressAsyncHandler(async (req, res, next) => {
  const userId = req.user._id;

  const deleted = await Address.findOneAndDelete(
    { _id: req.params.id },
    userId
  );

  if (!deleted) return next(new CustomError("Address Not Found ! ", 404));
  return new ApiResponse(200, "Address Deleted Successfully ! ", true).send(
    res
  );
});
