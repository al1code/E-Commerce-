import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("verificationEmail"); 

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      message.error("E-mail bilgisi bulunamadı. Lütfen tekrar kayıt olun.");
      navigate("/register");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (res.ok) {
        message.success(data.message);
        localStorage.removeItem("verificationEmail"); 
        navigate("/login");
      } else {
        message.error(data.error || "Doğrulama başarısız.");
      }
    } catch (error) {
      console.error("Doğrulama hatası:", error);
      message.error("Sunucu hatası oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Doğrulama Kodu</h2>
        <p style={styles.text}>
          E-mail adresinize gönderilen <strong>6 haneli</strong> kodu girin:
        </p>

        <form onSubmit={handleVerify} style={styles.form}>
          <input
            type="text"
            placeholder="Örn: 123456"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            maxLength={6}
            style={styles.input}
          />

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Doğrulanıyor..." : "Kodu Doğrula"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  text: {
    marginBottom: "1.5rem",
    fontSize: "14px",
    color: "#555",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default VerifyCode;
