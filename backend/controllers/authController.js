const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Bu email zaten kayıtlı." });
    }

    const emailToken = crypto.randomBytes(32).toString("hex");

    const newUser = new User({
      username,
      email,
      password,
      emailToken,
      isVerified: false,
    });

    await newUser.save();

    const verifyUrl = `http://localhost:3000/verify-email?token=${emailToken}&id=${newUser._id}`;

    await sendEmail(
      email,
      "Hesabını Doğrula",
      `<p>Merhaba ${username},</p>
       <p>Hesabınızı doğrulamak için aşağıdaki bağlantıya tıklayın:</p>
       <a href="${verifyUrl}">${verifyUrl}</a>
       <p>Bu bağlantı sadece 1 kere kullanılabilir.</p>`
    );

    res.status(201).json({
      message: "Kayıt başarılı! Lütfen email adresinize gönderilen bağlantıdan hesabınızı doğrulayın.",
    });

  } catch (error) {
    console.error("Kayıt sırasında hata:", error);
    res.status(500).json({ message: "Sunucu hatası. Lütfen tekrar deneyin." });
  }
};
