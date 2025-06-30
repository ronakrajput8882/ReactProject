const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const sendEmailOtp = require("../utils/sendEmailOtp");
const generateOtp = require("../utils/generateOtp");

let otpStore = {}; // Temporary in-memory OTP store

// 📩 Register with OTP Email Verification
exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { phone }]
      }
    });

    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOtp();
    otpStore[email] = otp;

    await sendEmailOtp(email, otp);

    res.status(200).json({
      message: "OTP sent to email. Proceed to verify.",
      user: { name, email, phone, password: hashedPassword }
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ OTP Verification
exports.verifyOtp = async (req, res) => {
  const { email, otp, user } = req.body;

  try {
    if (otpStore[email] !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const newUser = await User.create(user); // Sequelize
    delete otpStore[email];

    res.status(201).json({ message: "User verified and registered", user: newUser });
  } catch (err) {
    console.error("OTP verification error:", err);
    res.status(500).json({ error: err.message });
  }
};

// 🔐 Login with Phone + Password
exports.login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ where: { phone } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
};
