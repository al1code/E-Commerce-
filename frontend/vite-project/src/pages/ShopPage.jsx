import React from "react";
import Header from "../components/Layout/Header/Header";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Policy from "../components/Layout/Policy/Policy";
import Footer from "../components/Layout/Footer/Footer";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Categories />
      <Products />
      {/*SingleCampaigns kısmı gereksiz.*/}
      <Products />
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default ShopPage;
