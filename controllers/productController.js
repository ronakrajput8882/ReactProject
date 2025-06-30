const Product = require("../models/Product");

// 🟢 Public
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🛠️ Admin: Add Product
exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, image, stock, category } = req.body;

    const product = await Product.create({
      title,
      description,
      price,
      image,
      stock,
      category,
      soldCount: 0,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Admin: Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    await product.destroy();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔄 Admin: Update Sold Count
exports.updateSoldCount = async (req, res) => {
  try {
    const { count } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    product.soldCount += count;
    product.stock -= count;

    await product.save();
    res.json({ message: "Sold count updated", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📊 Public/Admin: Stats
exports.getStats = async (req, res) => {
  try {
    const products = await Product.findAll();

    const totalRevenue = products.reduce(
      (sum, p) => sum + p.price * (p.soldCount || 0),
      0
    );
    const totalSold = products.reduce(
      (sum, p) => sum + (p.soldCount || 0),
      0
    );

    res.json({ totalRevenue, totalSold });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
