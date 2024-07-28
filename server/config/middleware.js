import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["token"];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No Token Provided" });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Unauthorized: Invalid Token" });
    }

    const user = await UserModel.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    next();
  } catch (err) {
    console.log("Error in middleware", err.message);
    res.status(500).json({ message: "Server Internal Error" });
  }
};
