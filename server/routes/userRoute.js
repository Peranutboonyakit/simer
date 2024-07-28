import express from "express";
import {
  registerUser,
  signInUser,
  signOutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signInUser);
router.post("/signout", signOutUser);

export default router;
