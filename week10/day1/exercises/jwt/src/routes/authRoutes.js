import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import jwt from "jsonwebtoken";
import User from "../models/users.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify", async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    console.log("ana hna ✅✅✅✅✅");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
