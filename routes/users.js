const express = require("express");
const router = express.Router();
const { getUserByEmail, createUser } = require("../controllers/userController");

router.post("/", createUser);
router.get("/:email", getUserByEmail);

module.exports = router;







