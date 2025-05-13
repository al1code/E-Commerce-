const CartTotals = () => {
  return (
    <div className="cart-totals">
      <h2>Toplam Fiyat</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Ürünler</th>
            <td>
              <span id="subtotal">999₺</span>
            </td>
          </tr>
          <tr>
            <th>Kargo</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo: 100₺
                    <input type="checkbox" id="fast-cargo" />
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
              <strong id="cart-total">999₺</strong>
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
