import { generateToken } from "../config/generateToken.js";
import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All field are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 4) {
      return res
        .status(400)
        .json({ message: "Password must be at least 4 characters" });
    }

    const existsEmail = await UserModel.findOne({ email: email });
    if (existsEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const existsUsername = await UserModel.findOne({ username: username });
    if (existsUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await UserModel.create({ username, email, password: hashPassword });
    res.status(200).json({ message: "successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Internal Error" });
  }
};

export const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All field are required" });
    }

    // const user = await UserModel.findOne({ email: email });
    // const isPasswordCorrect = await bcrypt.compare(password, user.password);
    // if (!user || !isPasswordCorrect) {
    //   return res.status(400).json({ message: "Invalid credentials" });
    // }

    // generateToken(user._id, res);
    res.status(200).json({ message: "successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Internal Error" });
  }
};

export const signOutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Internal Error" });
  }
};
