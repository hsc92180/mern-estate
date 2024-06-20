import express from "express";
import { signup, signin, googleSignin } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);

authRouter.post("/signin", signin);

authRouter.post("/google", googleSignin);

export default authRouter;