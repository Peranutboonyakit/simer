import express from "express";
import "dotenv/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoute.js";
import connectDB from "./config/db.js";
import { protectRoute } from "./config/middleware.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", userRoutes);

app.listen(PORT, () => {
  try {
    console.log(`Server started on port: ${PORT}`);
    connectDB();
  } catch (err) {
    console.log("Error listening");
  }
});
