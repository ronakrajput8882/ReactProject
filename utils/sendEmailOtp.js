const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail", // ✅ valid: 'gmail', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmailOtp = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your QuickShop OTP Verification Code",
    html: `
      <div style="font-family: sans-serif;">
        <h2>🔐 Email Verification</h2>
        <p>Your OTP code is:</p>
        <h1 style="letter-spacing: 4px; color: #4F46E5;">${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
        <p>– QuickShop Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 OTP sent to:", email);
  } catch (error) {
    console.error("❌ Failed to send OTP email:", error);
    throw error;
  }
};

module.exports = sendEmailOtp;
