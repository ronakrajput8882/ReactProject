const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
  sendOtp,
  verifyOtp
} = require("../controllers/authController");

// Register user
router.post("/register", registerUser);

// Login user with email/phone and password
router.post("/login", loginUser);

// Logout user
router.post("/logout", logoutUser);

// Send OTP for email/phone verification
router.post("/send-otp", sendOtp);

// Verify OTP
router.post("/verify-otp", verifyOtp);

// Protected route to get user profile
router.get("/profile", protect, getUserProfile);

module.exports = router;
