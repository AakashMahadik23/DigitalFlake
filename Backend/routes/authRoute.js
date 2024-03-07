// routes/authRoutes.js
const express = require('express');
const { register, login } = require("../controllers/userController.js");
const authenticateToken = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
