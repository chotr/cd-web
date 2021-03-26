import React, { Component } from "react";

export default class FormSignUp extends Component {
  render() {
    return (
      <div className="formSignUp">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="second">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Đăng ký</h1>
                  </div>
                </div>
                <form action="#" name="registration">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="firstname"
                      aria-describedby="emailHelp"
                      placeholder="Nhập tên. . ."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Họ</label>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="lastname"
                      aria-describedby="emailHelp"
                      placeholder="Nhập họ. . ."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Địa chỉ email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Nhập email. . ."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mật khẩu</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Nhập mật khẩu. . ."
                    />
                  </div>
                  <div className="form-group">
                        <p className="text-center">
                          Bằng cách đồng ý đăng ký bạn đã đồng ý với {" "}
                          <a href="#">điều khoản </a>
                          của chúng tôi
                        </p>
                      </div>
                  <div className="col-md-12 text-center mb-3">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                    >
                      Đăng ký
                    </button>
                  </div>
                  <div className="col-md-12 ">
                    <div className="form-group">
                      <p className="text-center">
                        <a href="#" id="signin">
                          Bạn đã có tài khoản?
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
