import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.model.js";
import ApiResponse from "../../utils/ApiResponse.util.js";

export const createProduct = expressAsyncHandler(async (req, res, next) => {
  const {
    image,
    title,
    description,
    category,
    brand,
    price,
    salePrice,
    totalStock,
    averageReview,
  } = req.body;

  const newProduct = await Product.create({
    userId: req.user._id,
    image,
    title,
    description,
    category,
    brand,
    price,
    salePrice,
    totalStock,
    averageReview,
  });

  return new ApiResponse(
    201,
    "Product Added Successfully !",
    true,
    newProduct
  ).send(res);
});

export const getAllProduct = expressAsyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const products = await Product.find({ userId });

  return new ApiResponse(
    200,
    "Products Fetched Successfully ! ",
    true,
    products
  ).send(res);
});

export const getSingleProduct = expressAsyncHandler(async (req, res, next) => {
   const userId = req.user._id;

  const product = await Product.findOne({ _id: req.params.id, userId });
  if (!product) return next(new CustomError("Product Not Found", 404));

  return new ApiResponse(200, "Product Fetched !", true, product).send(res);
}
);

export const updateProduct = expressAsyncHandler(async (req, res, next) => {
    
   const userId = req.user._id;

  const updated = await Product.findByIdAndUpdate(
    { _id: req.params.id, userId },
    req.body,
    {
      new: true,
    }
  );
  if (!updated) return next(new CustomError("Product Not Found ", 404));
  return new ApiResponse(
    202,
    "Product Updated Successfully ! ",
    true,
    updated
  ).send(res);
});

export const updateSingleItemProduct = expressAsyncHandler(async (req, res, next) => {
    const userId = req.user._id;

    const updatedItem = await Product.findByIdAndUpdate(
      { _id: req.params.id, userId },
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedItem) return next(new CustomError("Product Not Found ! ", 200));

    return new ApiResponse(
      201,
      "Product Field Updated ",
      true,
      updatedItem
    ).send(res);
}
);
export const deleteProduct = expressAsyncHandler(async (req, res, next) => {
    const userId = req.user._id;

  const deleted = await Product.findOneAndDelete(
    { _id: req.params.id },
    userId
  );

  if (!deleted) return next(new CustomError("Product Not Found ! ", 404));
  return new ApiResponse(200, "Product Deleted Successfully ! ", true).send(
    res
  );
});
