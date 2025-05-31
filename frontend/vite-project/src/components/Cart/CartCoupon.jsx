import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { message } from "antd";

const CartCoupon = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");

  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Boş değer girilemez!");
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/coupons/code/${couponCode}`
      );

      if (!res.ok) {
        return message.warning("Girdiğiniz kupon kodu yanlış!");
      }

      const data = await res.json();
      const discountPercent = data.discountPercent;
      const updatedCartItems = cartItems.map((item) => {
        const updatePrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatePrice };
      });
      setCartItems(updatedCartItems);
      message.success(`${couponCode} kupon kodu uygulandı!`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Kupon Kodu"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyCoupon}>
          Kuponu Uygula
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Fiyatı Güncelle</button>
      </div>
    </div>
  );
};

export default CartCoupon;
