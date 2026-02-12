import express from "express";
import userAuth from "../middlewares/userAuth.js";
import { getUserDate } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserDate);

export default userRouter;
