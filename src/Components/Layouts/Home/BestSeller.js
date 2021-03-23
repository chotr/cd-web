import React, { Component } from "react";
import ProductItem from "../../General/ProductItem";

export default class BestSeller extends Component {
  render() {
    return (
      <div className="bestSeller">
        <div className="productTitle">
          <h1 className="text">TOP SẢN PHẨM BÁN CHẠY</h1>
        </div>
        <ProductItem />
      </div>
    );
  }
}
