import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
          <div className="banner">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
              </ul>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="la.jpg"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h3>Los Angeles</h3>
                    <p>We had such a great time in LA!</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="chicago.jpg"
                    alt="Chicago"
                    width={1100}
                    height={500}
                  />
                  <div className="carousel-caption">
                    <h3>Chicago</h3>
                    <p>Thank you, Chicago!</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="ny.jpg" alt="New York" width={1100} height={500} />
                  <div className="carousel-caption">
                    <h3>New York</h3>
                    <p>We love the Big Apple!</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
        );
    }
}
