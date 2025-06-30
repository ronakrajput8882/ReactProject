const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { email, name, role } = req.body;

  try {
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({ email, name, role });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
