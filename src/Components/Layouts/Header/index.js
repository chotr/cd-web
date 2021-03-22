import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
          <header className="container-fluid">
            <p className="text-right">
              <i className="bi bi-telephone-fill" />
              <span className="border-right mx-2 pr-3">0123 456 789</span>
              <i className="bi bi-search" />
            </p>
            <nav id="non-fixed" className="navbar navbar-expand-lg non-fixed">
              <a className="navbar-brand" href="#">
                <img src="./images/xshop-light.png" alt="" />
              </a>
              <div className="collapse navbar-collapse" id="navbarMovie">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      giày  nike 
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
                </ul>
              </div>
            </nav>
          </header>
        );
    }
}
