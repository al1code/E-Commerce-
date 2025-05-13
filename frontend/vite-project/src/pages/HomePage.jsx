import React from "react";
import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <Products />
      {/*Campaigns kısmı gereksiz.*/}
      <Products />
      <Blogs />
      <Brands />
      {/*SingleCampaigns kısmı gereksiz.*/}
    </React.Fragment>
  );
};

export default HomePage;
