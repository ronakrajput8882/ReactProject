import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const OtpVerify = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Setup ReCAPTCHA (create only once)
  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved");
          },
        },
        auth
      );
    }
  };

  const handleSendOtp = async () => {
    setMessage("");
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      return alert("Please enter a valid 10-digit number");
    }

    try {
      setSending(true);
      setUpRecaptcha();

      const fullPhone = "+91" + phoneNumber;
      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      window.confirmationResult = confirmation;

      setMessage("✅ OTP sent to " + fullPhone);
    } catch (error) {
      console.error("OTP Send Error:", error);
      setMessage("❌ Failed to send OTP");
    } finally {
      setSending(false);
    }
  };

  const handleVerifyOtp = async () => {
    setMessage("");
    if (otp.length < 4) return alert("Enter valid OTP");

    try {
      setVerifying(true);
      const result = await window.confirmationResult.confirm(otp);
      const user = result.user;

      setMessage("🎉 Login successful!");
      console.log("Firebase user:", user);
    } catch (err) {
      console.error("OTP Verify Error:", err);
      setMessage("❌ Invalid OTP");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Phone Login (OTP)</h2>

      {message && (
        <div className="mb-4 text-center text-sm font-medium text-blue-700">{message}</div>
      )}

      <input
        type="tel"
        placeholder="Phone number"
        maxLength="10"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/, ""))}
        className="border px-4 py-2 rounded w-64 mb-2"
      />

      <button
        onClick={handleSendOtp}
        disabled={sending}
        className="w-64 bg-pink-600 text-white py-2 rounded hover:bg-pink-700 disabled:opacity-50 mb-4"
      >
        {sending ? "Sending OTP..." : "Send OTP"}
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
        className="border px-4 py-2 rounded w-64 mb-2"
      />

      <button
        onClick={handleVerifyOtp}
        disabled={verifying}
        className="w-64 bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {verifying ? "Verifying..." : "Verify OTP"}
      </button>

      {/* 🔐 Firebase ReCAPTCHA container (must remain visible or in DOM) */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OtpVerify;
