import React, { Component } from "react";
import BackTop from "../../General/BackTop";
import Banner from "../../General/Banner";
import ProductItem from "../../General/ProductItem";
import Footer from "../Footer/Footer";
import Header from "../Header";
export default class ProductPage extends Component {
  render() {
    return (
      <div className="ProductPage">
        <Header />
        <Banner />
        <ProductItem />
        <Footer />
        <BackTop />
      </div>
    );
  }
}
