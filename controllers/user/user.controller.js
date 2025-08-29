import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.model.js";
import CustomError from "../../utils/customError.util.js";
import ApiResponse from "../../utils/ApiResponse.util.js";
import { generateToken } from "../../utils/jwt.util.js";
import bcrypt from "bcrypt";

export const register = expressAsyncHandler(async (req, res, next) => {
  const { userName, email, password } = req.body;

  const existUser = await User.findOne({ email });
  if (existUser) {
    return next(new CustomError("User Already Exist ", 400));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

new ApiResponse(201, "User Registered Successfully", true, newUser).send(res)
});

export const login = expressAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new CustomError("Invalid User Credentials "));

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next(new CustomError("Invalid Password Creadentials"));

  let token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  new ApiResponse(201, "User LoggedIn Successfully ! ", true, token).send(res)
});

export const logout = expressAsyncHandler(async (req, res, next) => {
  res.clearCookie("token", {
     httpOnly : false,
  });

new ApiResponse(200, "User Logout Successfully ! ", true).send(res)
});

export const isLoggedIn = expressAsyncHandler(async (req, res, next) => {
  return new ApiResponse(200, "User Is Logged In", true).send(res)
});
