const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const sendEmail = require("../utils/sendEmail.js");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

//  Register 
router.post("/register", async (req, res) => {
  try {
    const defaultAvatar = generateRandomAvatar();
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail zaten kayıtlı." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate Code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
      verificationCode,
      isVerified: false,
    });

    await newUser.save();

    // Send code to Email
    await sendEmail(
      email,
      "Giriş için Doğrulama Kodunuz",
      `<p>Merhaba ${username},</p>
       <p>Giriş yapabilmeniz için bu doğrulama kodunu kullanın:</p>
       <h2>${verificationCode}</h2>`
    );

    res.status(201).json({
      message: "Kayıt başarılı! E-posta adresinize gönderilen kod ile hesabınızı doğrulayın.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sunucu Hatası" });
  }
});




//  Login 
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

    if (!user.isVerified) {
      return res.status(403).json({ error: "Email adresiniz doğrulanmamış." });
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

// Verification with code
router.post("/verify-code", async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    if (user.isVerified) {
      return res.status(400).json({ error: "Bu hesap zaten doğrulanmış." });
    }

    if (user.verificationCode !== code) {
      return res.status(400).json({ error: "Doğrulama kodu hatalı." });
    }

    //  Verifiying completed, activate user
    user.isVerified = true;
    user.verificationCode = null;
    await user.save();

    res.status(200).json({ message: "Hesabınız başarıyla doğrulandı. Artık giriş yapabilirsiniz." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sunucu Hatası" });
  }
});




module.exports = router;
