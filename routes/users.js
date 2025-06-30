const express = require("express");
const router = express.Router();

// ✅ Correct import of handler functions
const { getUserByEmail, createUser } = require("../controllers/userController");

// ✅ Define routes using functions
router.post("/", createUser);
router.get("/:email", getUserByEmail);

module.exports = router;







