import React from "react";
import Header from "../components/Layout/Header/Header";
import Cart from "../components/Cart/Cart";
import Policy from "../components/Layout/Policy/Policy";
import Footer from "../components/Layout/Footer/Footer";

const CartPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default CartPage;
