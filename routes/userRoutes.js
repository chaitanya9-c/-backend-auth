const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/userController");

const authMiddleware =
  require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Protected Route",
      user: req.user,
    });
  }
);

module.exports = router;