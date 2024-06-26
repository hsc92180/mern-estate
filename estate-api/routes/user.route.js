import express from "express";
import { test, updateUser, deleteUser, getUserListings, getUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const userRouter = express.Router();

userRouter.get("/test", test);

userRouter.post("/update/:id", verifyUser, updateUser);

userRouter.delete("/delete/:id", verifyUser, deleteUser);

userRouter.get("/listing/:id", verifyUser, getUserListings);

userRouter.get("/:id", verifyUser, getUser)

export default userRouter;
