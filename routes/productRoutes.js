const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect, adminOnly } = require("../middlewares/authMiddleware");

router.get("/", getAllProducts);
router.post("/", protect, adminOnly, addProduct);      // better than /add-product
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);


module.exports = router;
