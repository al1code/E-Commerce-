import PropTypes from "prop-types";
import { useRef,useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import "./Info.css";

const Info = ({ singleProduct }) => {
  const quantityRef = useRef();
  const { addToCard, cartItems } = useContext(CartContext);

  const originalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;

  // Calculating discounted price
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  const filteredCard = cartItems.find(
    (cartItem) => cartItem._id === singleProduct._id
  );

  return (
    <div className="product-info">
      <h1 className="product-title">{singleProduct.name}</h1>
      <div className="product-review">
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>2 Yorum</span>
      </div>
      <div className="product-price">
        <s className="old-price">{originalPrice.toFixed(2)}₺</s>
        <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
      </div>
      <p className="product-description">{singleProduct.description}</p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Renk</span>
            </div>
            <div className="colors-wrapper">
              {singleProduct.colors.map((color, index) => (
                <div className="color-wrapper " key={index}>
                  <label
                    style={{
                      backgroundColor: `#${color}`,
                    }}
                  >
                    <input type="radio" name="product-color" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Beden</span>
            </div>
            <div className="values-list">
              {singleProduct.sizes.map((size, index) => (
                <span key={index}>{size.toUpperCase()}</span>
              ))}
            </div>
          </div>
          <div className="cart-button">
            <input
              type="number"
              defaultValue="1"
              min="1"
              id="quantity"
              ref={quantityRef}
            />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
              disabled={filteredCard}
              onClick={() =>
                addToCard({
                  ...singleProduct,
                  price: discountedPrice,
                  quantity: parseInt(quantityRef.current.value),
                })
              }
            >
              Sepete Ekle
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span> Beden Rehberi</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span> Favorilere Ekle</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span> Paylaş</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-categories">
          <span>Kategoriler:</span>
          <strong> Pantolonlar, Erkek</strong>
        </div>
      </div>
    </div>
  );
};

export default Info;

Info.propTypes = {
  singleProduct: PropTypes.object,
};
