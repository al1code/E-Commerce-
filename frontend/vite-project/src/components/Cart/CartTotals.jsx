import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { message } from "antd";
import { loadStripe } from "@stripe/stripe-js";

const CartTotals = () => {
  const { cartItems } = useContext(CartContext);
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const stripePublicKey = import.meta.env.VITE_API_STRIPE_PUBLIC_KEY;
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const cargoFee = 100;

  const cartItemTotals = cartItems.map((item) => {
    const unitPrice =
      typeof item.price === "number" ? item.price : item.price.current;
    return unitPrice * item.quantity;
  });

  const subTotals = cartItemTotals.reduce((acc, val) => acc + val, 0);

  const cartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  const handlePayment = async () => {
    if (!user) {
      return message.info("Ödeme yapabilmek için giriş yapmalısız!");
    }
    const body = {
      products: cartItems,
      user: user,
      cargoFee: fastCargoChecked ? cargoFee : 0,
    };

    try {
      const stripe = await loadStripe(stripePublicKey);

      const res = await fetch(`http://localhost:5000/api/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        return message.error("Ödeme işlemi gerçekleştirilemedi!");
      }

      const session = await res.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-totals">
      <h2>Toplam Fiyat</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Ürünler</th>
            <td>
              <span id="subtotal">{subTotals.toFixed(2)}₺</span>
            </td>
          </tr>
          <tr>
            <th>Kargo</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo: 100₺
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Toplam</th>
            <td>
              <strong id="cart-total">{cartTotals}₺</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg" onClick={handlePayment}>
          Devam
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
