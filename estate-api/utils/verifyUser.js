import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    console.log("User is not verified");
    return next(errorHandler(401, "Unauthorized User"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Invalid Token");
      return next(errorHandler(403, "Forbidden Token"));
    }
    req.user = user;
    console.log("User is verified", user);
    next();
  });
};
