import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">
                    Yeni ürünler, indirimler ve daha fazlası için bizden haber
                    alın.
                  </h3>
                  <p className="subscribe-desc">
                    İlk 500₺ ve üzeri alışverişinizde 100₺'lik indirim kuponunu
                    e-mail olarak göndereceğiz.
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="E-mail adresinizi giriniz."
                    />
                    <button className="btn">Üye Ol</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-top">
                <h3 className="contact-title">
                  Yardıma mı ihtiyacınız var? <br />
                  (+90) 123 456 789
                </h3>
                <p className="contact-desc">
                  8:00 – 17:00 arasında ulaşabilirsiniz.
                </p>
              </div>
              <div className="footer-contact-bottom">
                <div className="download-app">
                  <a href="#">
                    <img src="img/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/footer/google-play.png" alt="" />
                  </a>
                </div>
                <p className="privacy-text">
                  <strong>
                    Daha iyi bir alışveriş deneyimi için mobil uygulamamızı
                    deneyin!
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  {"GRA</B>"}
                </a>
              </div>
              <div className="footer-desc">
                <p>Fikir ve görüşleriniz için bize ulaşın:</p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+90) 123 456 789</a> –{" "}
                  <a href="mailto:info@example.com">grab@example.com</a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>Biz Kimiz</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Alışveriş Politikamız</a>
                </li>
                <li>
                  <a href="#">Güvenlik Politikamız</a>
                </li>
                <li>
                  <a href="#">Geri Ödeme Politikamız</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesap</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kontrol Paneli</a>
                </li>
                <li>
                  <a href="#">Siparişlerim</a>
                </li>
                <li>
                  <a href="#">Sipariş Detayları</a>
                </li>
                <li>
                  <a href="#">İstek Listem</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Mağaza</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">En Çok Satanlar</a>
                </li>
                <li>
                  <a href="#">İndirimli Ürünler</a>
                </li>
                <li>
                  <a href="#">En Yeni Ürünler</a>
                </li>
                <li>
                  <a href="#">Satış Ortakları</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Kategoriler</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kadın</a>
                </li>
                <li>
                  <a href="#">Erkek</a>
                </li>
                <li>
                  <a href="#">Çocuk</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>©2025 CodeStuff Tarafından Tüm Hakları Saklıdır.</p>
            </div>
            <a href="#">
              <img src="img/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Çerez Tercihleri</a>
                </li>
                <li className="list-item">
                  <a href="#">KVKK ve Gizlilik Politikası</a>
                </li>
                <li className="list-item">
                  <a href="#">Kullanım Koşulları</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
