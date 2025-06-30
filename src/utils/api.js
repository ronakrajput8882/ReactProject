import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://your-production-backend.com/api",
  withCredentials: true, // Include cookies (optional)
});

// 🔐 Attach Firebase token to all requests if available
API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token"); // Or from Firebase Auth
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// ⚠️ Global error handler (optional)
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("❌ API Error:", err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default API;
