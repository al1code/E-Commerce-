import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";

const CartTotals = () => {
  const { cartItems } = useContext(CartContext);

  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price.newPrice * item.quantity;

    return itemTotal;
  });

  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const [fastCargoChecked, setFastCargoChecked] = useState(false);

  const cargoFee = 100;

  const cartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

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
                <li>
                  <a href="#">Adresi Değiştir</a>
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
        <button className="btn btn-lg">Devam</button>
      </div>
    </div>
  );
};

export default CartTotals;
