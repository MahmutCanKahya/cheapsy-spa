<<<<<<< HEAD
import React, { Component } from "react";
import OutsideAlerter from "../actions/OutsideClick";
import axios from "axios";
import { locale } from "moment";
import validateInput from "../shared/validations/login";
import {login} from '../actions/login'
import { connect } from "net";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kullaniciAdi: "",
      password: "",
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  isValid(){
    const{errors,isValid}= validateInput(this.state);
    if(!isValid){
        this.setState({errors});
    }
    return isValid;
}
  onSubmit(e) {
    e.preventDefault();
   
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div className="popup">
        <OutsideAlerter closePopup={this.props.closePopup}>
          <div className="popup_inner">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-md-offset-3">
                  <div className="panel panel-login">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-md-6">
                          <a href="#" className="active" id="login-form-link">
                            Login
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a href="#" id="register-form-link">
                            Register
                          </a>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <form
                            id="login-form-link"
                            onSubmit={this.onSubmit}
                            action=""
                            method="post"
                            role="form"
                            style={{ display: "block" }}
                          >
                            <div className="form-group">
                            <label htmlFor="username">Kullanıcı Adı</label>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                tabIndex={1}
                                className="form-control"
                                placeholder="Username"
                                error={errors.username}
                                onChange={this.onChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">Şifre</label>
                              <input
                                type="password"
                                name="password"
                                id="password"
                                tabIndex={2}
                                className="form-control"
                                placeholder="Password"
                                error={errors.password}
                                onChange={this.onChange}
                              />
                            </div>
                            <div className="form-group text-center">
                              <input
                                type="checkbox"
                                tabIndex={3}
                                className
                                name="remember"
                                id="remember"
                              />
                              <label htmlFor="remember"> Remember Me</label>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6 col-sm-offset-3 ">
                                  <button
                                    className="btn btn-primary btn-lg"
                                    disabled={isLoading}
                                    type="submit"
                                    name="login"
                                    id="login"
                                    tabIndex={4}
                                    className="form-control btn btn-login"
                                  >
                                    Giriş
                                  </button>
=======
import React, {Component} from 'react';
import OutsideAlerter from '../actions/OutsideClick';
import '../css/loginRegister.css'

class LoginRegister extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-body">
                            <ul className="nav nav-tabs final-login">
                                <li className="active"><a data-toggle="tab" href="#sectionA">Sign In</a></li>
                                <li><a data-toggle="tab" href="#sectionB">Join us!</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="sectionA" className="tab-pane fade in active">
                                    <div className="innter-form">
                                        <form className="sa-innate-form" method="post">
                                            <label>Email Address</label>
                                            <input type="text" name="username" />
                                            <label>Password</label>
                                            <input type="password" name="password" />
                                            <button type="submit">Sign In</button>
                                            <a href>Forgot Password?</a>
                                        </form>
                                    </div>
                                    <div className="social-login">
                                        <p>- - - - - - - - - - - - - Sign In With - - - - - - - - - - - - - </p>
                                        <ul>
                                            <li><a href><i className="fa fa-facebook" /> Facebook</a></li>
                                            <li><a href><i className="fa fa-google-plus" /> Google+</a></li>
                                            <li><a href><i className="fa fa-twitter" /> Twitter</a></li>
                                        </ul>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div id="sectionB" className="tab-pane fade">
                                    <div className="innter-form">
                                        <form className="sa-innate-form" method="post">
                                            <label>Name</label>
                                            <input type="text" name="username" />
                                            <label>Email Address</label>
                                            <input type="text" name="username" />
                                            <label>Password</label>
                                            <input type="password" name="password" />
                                            <button type="submit">Join now</button>
                                            <p>By clicking Join now, you agree to hifriends's User Agreement, Privacy Policy, and Cookie Policy.</p>
                                        </form>
                                    </div>
                                    <div className="social-login">
                                        <p>- - - - - - - - - - - - - Register With - - - - - - - - - - - - - </p>
                                        <ul>
                                            <li><a href><i className="fa fa-facebook" /> Facebook</a></li>
                                            <li><a href><i className="fa fa-google-plus" /> Google+</a></li>
                                            <li><a href><i className="fa fa-twitter" /> Twitter</a></li>
                                        </ul>
                                    </div>
>>>>>>> d051abb24830e030ba4ddb77a78edd42b5db50f4
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="text-center">
                                    <a
                                      href="http://phpoll.com/recover"
                                      tabIndex={5}
                                      className="forgot-password"
                                    >
                                      Forgot Password?
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                          <form
                            id="register-form-link"
                            action="http://phpoll.com/register/process"
                            method="post"
                            role="form"
                            style={{ display: "none" }}
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                name="username"
                                id="username"
                                tabIndex={1}
                                className="form-control"
                                placeholder="Username"
                                defaultValue
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                tabIndex={1}
                                className="form-control"
                                placeholder="Email Address"
                                defaultValue
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="password"
                                id="password"
                                tabIndex={2}
                                className="form-control"
                                placeholder="Password"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                tabIndex={2}
                                className="form-control"
                                placeholder="Confirm Password"
                              />
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                  <input
                                    type="submit"
                                    name="register-submit"
                                    id="register-submit"
                                    tabIndex={4}
                                    className="form-control btn btn-register"
                                    defaultValue="Register Now"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
<<<<<<< HEAD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OutsideAlerter>
      </div>
    );
  }
=======
                    </div>
                </div>
            </div>



        );
    }
>>>>>>> d051abb24830e030ba4ddb77a78edd42b5db50f4
}



export default (LoginRegister);
