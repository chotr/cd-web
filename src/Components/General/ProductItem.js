import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="listPro">
        <div className="pro_content row">
          <div className="pro_item col-xl-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./images/adidas.jpg"
                className="card-img-top"
                alt="adidas_shoes"
              />
              <div className="card-body">
                <h5 className="name_pro">
                  Giày Thể Thao XSPORT Adi.das 918 SF
                </h5>
                <p className="price_pro">400.000₫</p>
                <button href="#" className="btn btn-buy mr-4">
                  Mua ngay
                </button>
                <button href="#" className="btn btn-add">
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
