import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:  {
        type: String,
        required: true,
        unique: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://i.pinimg.com/originals/87/14/55/8714556a52021ba3a55c8e7a3547d28c.png"
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User