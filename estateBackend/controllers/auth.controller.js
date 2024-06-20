import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

export const signin = async (req, res, next) => {
  console.log("Signin request received");
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(401, "Invalid credentials"));
    }
    const vaidPassword = bcryptjs.compareSync(
      password,
      validUser.password
    );
    if (!vaidPassword) {
      return next(errorHandler(401, "Invalid credentials"));
    }
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
