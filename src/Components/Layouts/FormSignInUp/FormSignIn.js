import React, { Component } from 'react'

export default class FormSignIn extends Component {
    render() {
        return (
          <div className="formSignIn">
            <div className="row">
              <div className="col-md-5 mx-auto">
                <div id="first">
                  <div className="myform form ">
                    <div className="logo mb-3">
                      <div className="col-md-12 text-center">
                        <h1>Đăng nhập</h1>
                      </div>
                    </div>
                    <form action method="post" name="login">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Địa chỉ email
                        </label>
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
                      <div className="col-md-12 text-center ">
                        <button
                          type="submit"
                          className=" btn btn-block mybtn btn-primary tx-tfm"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div className="col-md-12 ">
                        <div className="login-or">
                          <hr className="hr-or" />
                          <span className="span-or">Hoặc</span>
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <p className="text-center">
                          <a
                            href="javascript:void();"
                            className="google btn mybtn"
                          >
                            <i className="fa fa-google-plus"></i> Đăng nhập bằng google
                          </a>
                        </p>
                      </div>
                      <div className="form-group">
                        <p className="text-center">
                          Bạn chưa có tài khoản?{" "}
                          <a href="#" id="signup">
                            Đăng ký ở đây
                          </a>
                        </p>
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
