import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark">
        <div>
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="logo_footer footer_sup col-md-6 mt-md-0 mt-3">
                <img src="./images/xshop-light.png" alt="" />
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Hệ thống cửa hàng</a>
                  </li>
                  <li>
                    <a href="#!">Hot line:0123 456 789</a>
                  </li>
                  <li>
                    <a href="#!">Store 1: 57 Quan Hoa, Cầu Giấy, HN</a>
                  </li>
                  <li>
                    <a href="#!">Store 2: 29 Trần Đại Nghĩa, Hai Bà Trưng, HN</a>
                  </li>
                  <li>
                    <a href="#!">Store 3: abc Thủ Đức, HCM</a>
                  </li>
                  <li>
                    <a href="#!">Xem thêm. . .</a>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="support footer_sup col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">HỖ TRỢ</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Chăm sóc khách hàng</a>
                  </li>
                  <li>
                    <a href="#!">Thanh toán</a>
                  </li>
                  <li>
                    <a href="#!">Hướng dẫn mua hàng</a>
                  </li>
                </ul>
              </div>
              <div className="service_cus footer_sup col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">DỊCH VỤ KHÁC HÀNG</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Hướng dẫn đặt hàng</a>
                  </li>
                  <li>
                    <a href="#!">Chính sách đổi trả và bảo hành</a>
                  </li>
                  <li>
                    <a href="#!">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#!">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
        </div>
      </footer>
    );
  }
}
