import React, { Component } from "react";
import CountUp from "react-countup";
import ReactDom from "react-dom";
import VisibilitySensor from "react-visibility-sensor";

const style = {
  componentName: {},
  col: {},
  countup: {},
};

export default class Achivement extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    return (
      <div className="achivement">
        <div className="achive_text">
          <p className="text"></p>
        </div>
        <div className="list row">
          <div className="list__item col-xl-4">
            <p>Số Sản Phẩm Đã Bán</p>
            <h1 className={style.componentName}>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  //   decimals={1}
                  start={0}
                  end={this.state.didViewCountUp ? 314526 : 0}
                  duration={3}
                />
              </VisibilitySensor>
            </h1>
          </div>
          <div className="list__item col-xl-4">
            <p>Khách Hàng Đã Mua</p>
            <h1 className={style.componentName}>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  //   decimals={1}
                  start={0}
                  end={this.state.didViewCountUp ? 65702 : 0}
                  duration={3}
                />
              </VisibilitySensor>
            </h1>
          </div>
          <div className="list__item col-xl-4">
            <p>Chi Nhánh Toàn Quốc</p>
            <h1 className={style.componentName}>
              <VisibilitySensor
                onChange={this.onVisibilityChange}
                offset={{
                  top: 10,
                }}
                delayedCall
              >
                <CountUp
                  className={style.countup}
                  //   decimals={1}
                  start={0}
                  end={this.state.didViewCountUp ? 20 : 0}
                  duration={3}
                />
              </VisibilitySensor>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
