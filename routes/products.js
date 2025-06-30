const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateSoldCount,
  getStats,
} = require("../controllers/productController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

// Public
router.get("/", getAllProducts);
router.get("/stats", getStats);

// Admin only
router.post("/", protect, adminOnly, createProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);
router.put("/:id/sold", protect, adminOnly, updateSoldCount);

module.exports = router;
