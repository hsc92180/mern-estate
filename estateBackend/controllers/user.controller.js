import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

export const updateUser = async (req, res, next) => {
  console.log("Update user request received");
  console.log("req.user.id:", req.user.id);
  console.log("req.params.id:", req.params.id);
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can update only your account"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    console.log("User updated successfully", rest);
    res.status(200).json(rest);
  } catch (error) {
    console.log("User update failed", error.message);
    next(error);
  }
};
