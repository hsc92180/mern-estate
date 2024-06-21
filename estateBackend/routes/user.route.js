import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const userRouter = express.Router();

userRouter.get("/test", test);

userRouter.post("/update/:id", verifyUser, updateUser);

export default userRouter;
