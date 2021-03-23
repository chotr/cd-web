import React, { Component } from "react";
import ProductItem from "../../General/ProductItem";

export default class TopNewPro extends Component {
  render() {
    return (
      <div className="topNewProduct">
        <div className="productTitle">
          <h1 className="text">TOP SẢN PHẨM MỚI NHẤT</h1>
        </div>
        <ProductItem />
      </div>
    );
  }
}
