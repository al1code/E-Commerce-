import { useState } from "react";
import Reviews from "../../Reviews/Reviews";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Ürün Açıklaması
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Diğer Bilgiler
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
          id="desc"
        >
          <p>
            Modern kesimi ve klasik mavi tonuyla gardırobunuzun vazgeçilmezi
            olacak bu kot pantolon, her kombine kolayca uyum sağlar. Esnek
            yapısıyla gün boyu konfor sunarken, şık duruşuyla tarzınızı ön plana
            çıkarır. %98 pamuk, %2 elastan içeriği sayesinde hem nefes
            alabilirlik sağlar hem de hareket özgürlüğü sunar. Orta bel yapısı
            ve dar paça kesimiyle vücuda tam oturur, günlük kullanım için
            idealdir. 5 cepli klasik jean tasarımıyla fonksiyonel, fermuar ve
            düğme kapamalı yapısıyla pratiktir. Hafif taşlanmış yüzeyi sayesinde
            doğal ve modern bir görünüm elde edilmiştir.
          </p>
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Diğer Bilgiler</h3>
          <table>
            <tbody>
              <tr>
                <th>Renk</th>
                <td>
                  <p>Mavi, Kırmızı, Yeşil, Mor</p>
                </td>
              </tr>
              <tr>
                <th>Beden</th>
                <td>
                  <p>XS, S, M, L, XL</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;
