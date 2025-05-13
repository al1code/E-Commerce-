const Register = () => {
  return (
    <div className="account-column">
      <h2>Kaydol</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı Adı <span className="required">*</span>
            </span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              E-Mail Adresi <span className="required">*</span>
            </span>
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input type="password" />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <button className="btn btn-sm">Kaydol</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
