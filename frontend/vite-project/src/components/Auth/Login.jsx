import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("user", JSON.stringify(data));
        message.success("Giriş başarılı.");

        if (data.role === "admin") {
          window.location.href = "/admin";
        } else {
          navigate("/");
        }
      } else {
        message.error("Giriş başarısız.");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="account-column">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
              Kullanıcı Adı veya E-Mail Adresi{" "}
              <span className="required">*</span>
            </span>
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Beni Hatırla</span>
          </label>
          <button className="btn btn-sm">Giriş Yap</button>
        </p>
        <a href="#" className="form-link">
          Şifrenizi mi Unuttunuz?
        </a>
      </form>
    </div>
  );
};

export default Login;
