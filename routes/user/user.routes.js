import express from 'express';
import { isLoggedIn, login, logout, register } from '../../controllers/user/user.controller.js';

const userRouter = express.Router();


userRouter.post("/register", register)
userRouter.get("/login", login)
userRouter.get("/logout", logout)
userRouter.post("/islogged", isLoggedIn)


export default  userRouter
