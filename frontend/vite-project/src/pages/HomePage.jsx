import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Policy from "../components/Layout/Policy/Policy";
import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      {/*Campaigns kısmı gereksiz.*/}
      <Products />
      <Blogs />
      <Brands />
      {/*SingleCampaigns kısmı gereksiz.*/}
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
