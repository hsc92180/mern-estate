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
  // console.log("req.user._id:", req.user._id);
  // console.log("req.params.id:", req.params.id);
  if (req.user._id !== req.params.id) {
    console.log("You can update only your account");
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

export const deleteUser = async (req, res, next) => {
  console.log("User delete request received");
  if (req.user._id !== req.params.id) {
    console.log("You can delete only your account");
    return next(errorHandler(403, "You can delete only your account"));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token").status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("User delete failed", error.message);
    next(error);
  }
};
