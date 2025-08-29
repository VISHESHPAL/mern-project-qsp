import expressAsyncHandler from "express-async-handler";
import CustomError from "../utils/customError.util.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authenticate = expressAsyncHandler(async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies?.token;

  if (!token) {
    return next(new CustomError("Please Login", 401));
  }

  let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decodedToken);

  let user = await User.findById(decodedToken.id);

  if (!user)
    return next(new CustomError("Invalid Session or Expired Token", 401));

  req.user = user;
  next();
});

export default authenticate;
