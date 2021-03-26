/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
// import ScrollMenu from "../../General/ScrollMenu";

export default class Header extends Component {
  
  render() {
    
    // const computedClassName = props.active ? 'active' : 'muted';
    return (
      <header className="container-fluid">
        <nav id="non-fixed" className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src="./images/xshop-light.png" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarMovie">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  giày nike
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  giày van
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  giày adidas
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="#" id="navbarDropdown">
                  giày thời trang
                </a>
                <div className="dropdownmenu">
                  <a className="dropdownitem" href="#">
                    Action
                  </a>
                </div>
              </li>
              <li className="nav-item account ">
                <div className="row">
                  <div class="dropdown">
                    <div
                      class="dropAcc"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        <span className="icon_user">
                          <img src="./images/user.png" alt="" />
                        </span>
                      </span>
                    </div>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Đăng nhập
                      </a>
                      <a class="dropdown-item" href="#">
                        Đăng kí
                      </a>
                    </div>
                  </div>
                  <div className="cart">
                    <img src="./images/cart.png" alt="cart" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
