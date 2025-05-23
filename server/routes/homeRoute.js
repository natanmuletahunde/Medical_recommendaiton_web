const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/home", authMiddleware, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

module.exports = router;
