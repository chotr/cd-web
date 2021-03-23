import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div className="Services">
        <div className="Services_content container-fluid">
          <div className="row">
            <div className="Services_item col-md-3 col-xl-3">
              <img src="./images/truck .png" alt="Delivery" />
              <span className="Service_text">
                <p className="text_upercase">giao hàng toàn quốc</p>
                <p className="text">Vận chuyển khắp Việt Nam</p>
              </span>
            </div>
            <div className="Services_item col-md-3 col-xl-3">
              <img src="./images/wallet.png" alt="Pay" />
              <span className="Service_text">
                <p className="text_upercase">thanh toán khi nhận hàng</p>
                <p className="text">Nhận hàng tại nhà rồi thanh toán</p>
              </span>
            </div>
            <div className="Services_item col-md-3 col-xl-3">
              <img src="./images/fix.png" alt="Guarantee" />
              <span className="Service_text">
                <p className="text_upercase">bảo hành dài hạn</p>
                <p className="text">Bảo hành lên đến 60 ngày</p>
              </span>
            </div>
            <div className="Services_item col-md-3 col-xl-3">
              <img src="./images/loop.png" alt="Delivery" />
              <span className="Service_text">
                <p className="text_upercase">đổi hàng dễ dàng</p>
                <p className="text">Đổi hàng thoải mái trong 30 ngày</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
