import React, { Component } from "react";

export default class EmailForSale extends Component {
  render() {
    return (
      <div className="formForSale">
        <div className="form_content row">
          <div className="form_titlle col-xl-6">
            <span className="icon">
              <img src="./images/email.png" alt="" />
            </span>
            <span className="text">đăng ký nhận thông tin khuyến mãi</span>
          </div>
          <div className="form_input col-xl-6">
            <div className="input-group row">
              <div className="form-outline col-xl-9">
                <input type="search" id="form1" className="form-control" placeholder="Nhập email để nhận . . ."/>
              </div>
              <div className="submit col-xl-3">
              <button type="button" className="btn btn-primary">
                <span className="text">đăng ký</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
