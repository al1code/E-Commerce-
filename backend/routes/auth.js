const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

//Register
router.post("/register", async (req, res) => {
  try {
    const defaultAvatar = generateRandomAvatar();

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail zaten kayıtlı." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });

    await newUser.save();

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sunucu Hatası" });
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Geçersiz e-mail veya şifre." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Geçersiz e-mail veya şifre." });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sunucu Hatası" });
  }
});

module.exports = router;
