import React, { Component } from "react";

export default class Type extends Component {
  render() {
    return (
      <div className="typeShoes container-fluid">
        <div className="type_content">
          <div className="row">
            <div className="type_item col-xl-4">
              <div className="img_type">
                <img src="./images/MG_2252.jpg" alt="" />
              </div>
              <div className="see_now">
                <h1 className="text">Giày nam</h1>
                <div className="see_btn">
                  <button className="btn btn_see_now"><span className="text">Xem ngay</span></button>
                </div>
              </div>
            </div>
            <div className="type_item col-xl-4">
              <div className="img_type">
                <img src="./images/MG_2252.jpg" alt="" />
              </div>
              <div className="see_now">
                <h1 className="text">Giày nam</h1>
                <div className="see_btn">
                  <button className="btn btn_see_now"><span className="text">Xem ngay</span></button>
                </div>
              </div>
            </div>
            <div className="type_item col-xl-4">
              <div className="img_type">
                <img src="./images/MG_2252.jpg" alt="" />
              </div>
              <div className="see_now">
                <h1 className="text">Giày nam</h1>
                <div className="see_btn">
                  <button className="btn btn_see_now"><span className="text">Xem ngay</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
