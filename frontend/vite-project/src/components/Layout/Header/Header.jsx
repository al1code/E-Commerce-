import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            BAHARA ÖZEL TÜM ÜRÜNLERDE İNDİRİM!
            <a href="shop.html"> ŞİMDİ ALIŞVERİŞE BAŞLA</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                {"GRA</B>"}
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      ANA SAYFA
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">6</a>
                        </li>
                        <li>
                          <a href="#">7</a>
                        </li>
                        <li>
                          <a href="#">8</a>
                        </li>
                        <li>
                          <a href="#">9</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      ALIŞVERİŞ
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">1</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">1.1</a>
                              </li>
                              <li>
                                <a href="#">1.2</a>
                              </li>
                              <li>
                                <a href="#">1.3</a>
                              </li>
                              <li>
                                <a href="#">1.4</a>
                              </li>
                              <li>
                                <a href="#">1.5</a>
                              </li>
                              <li>
                                <a href="#">1.6</a>
                              </li>
                              <li>
                                <a href="#">1.7</a>
                              </li>
                              <li>
                                <a href="#">1.8</a>
                              </li>
                              <li>
                                <a href="#">1.9</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">2</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">2.1</a>
                              </li>
                              <li>
                                <a href="#">2.2</a>
                              </li>
                              <li>
                                <a href="#">2.3</a>
                              </li>
                              <li>
                                <a href="#">2.4</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">3</h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">3.1</a>
                              </li>
                              <li>
                                <a href="#">3.2</a>
                              </li>
                              <li>
                                <a href="#">3.3</a>
                              </li>
                              <li>
                                <a href="#">3.4</a>
                              </li>
                              <li>
                                <a href="#">3.5</a>
                              </li>
                              <li>
                                <a href="#">3.6</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      İLETİŞİM
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>

                {/* <a href="#">
                  <i className="bi bi-heart"></i>
                </a>*/}
                <div className="header-cart">
                  <Link to={"/cart"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
