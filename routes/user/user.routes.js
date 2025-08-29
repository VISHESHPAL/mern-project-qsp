import express from "express";
import {
  isLoggedIn,
  login,
  logout,
  register,
} from "../../controllers/user/user.controller.js";
import validateRequest from "../../middleware/validation.middleware.js";
import { registerValidation } from "../../validations/user.validation.js";
import authenticate from "../../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", validateRequest(registerValidation), register);
userRouter.post("/login", login);
userRouter.post("/logout", authenticate, logout);
userRouter.get("/islogged", authenticate, isLoggedIn);

export default userRouter;
