import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import listingRoutes from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log(error);
});

const __dirname = path.resolve();

const app = express();

// allow json data to be sent
app.use(express.json());

app.use(cookieParser());

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

// app.get("/test", (req, res) => {
//     // res.send("Hello World");
//     res.json({ message: "Hello World" });
// })

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/listing", listingRoutes);

app.use(express.static(path.join(__dirname, "/estate-ui/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "estate-ui", "dist", "index.html"));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({ 
        success: false,
        status: statusCode,
        message
     });
})