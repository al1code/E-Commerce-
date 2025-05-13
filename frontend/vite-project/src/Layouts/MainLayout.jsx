import React from "react";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Footer from "../components/Layout/Footer/Footer";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
