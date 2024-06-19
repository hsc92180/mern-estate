import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  console.log("Signup request received");
  const { username, email, password } = req.body;
  // bcrypt hashing password used for security
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
    console.log("User created successfully");
  } catch (error) {
    console.log("Error creating user: ", error.message);
    // next(errorHandler(550, "error from the function signup in auth.controller.js"));
    next(error);
  }
};
