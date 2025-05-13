import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="contact-top">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.644089644419!2d28.724421072074552!3d40.98927365751805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1a9851dd8b1%3A0x1221fb6d2da743aa!2s%C4%B0stanbul%20%C3%9Cniversitesi-Cerrahpa%C5%9Fa!5e0!3m2!1str!2str!4v1747136725476!5m2!1str!2str"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="container">
            <div className="contact-titles">
              <h2>Bizimle İletişime Geçin</h2>
            </div>
            <div className="contact-elements">
              <form className="contact-form">
                <div className="">
                  <label>
                    İsim
                    <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="">
                  <label>
                    E-mail
                    <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="">
                  <label>
                    Konu
                    <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="">
                  <label>
                    Mesaj
                    <span>*</span>
                  </label>
                  <textarea
                    id="author"
                    name="author"
                    type="text"
                    defaultValue=""
                    size="30"
                    required=""
                  ></textarea>
                </div>
                <button className="btn btn-sm form-button">Gönder</button>
              </form>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong>GRAB MAĞAZALARI</strong>
                    <p className="contact-street">
                      Avcılar - İstanbul - Türkiye
                    </p>
                    <a href="tel:Phone: +1 1234 567 88">
                      Telefon: +(90) 123 456 789
                    </a>
                    <a href="mailto:Email: contact@example.com">
                      E-mail: grab@example.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong>Açık Olduğumuz Günler</strong>
                    <p className="contact-date">
                      Pazartesi - Cuma: 8:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
