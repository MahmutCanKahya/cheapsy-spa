import React, {Component} from 'react';
import OutsideAlerter from '../actions/OutsideClick';

class LoginRegister extends Component {
    render() {
        return (
                <div className='popup'>
                    <OutsideAlerter closePopup={this.props.closePopup}>

                    <div className='popup_inner'>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3">
                                    <div className="panel panel-login">
                                        <div className="panel-heading">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <a href="#" className="active" id="login-form-link">Login</a>
                                                </div>
                                                <div className="col-xs-6">
                                                    <a href="#" id="register-form-link">Register</a>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <form id="login-form" action="http://phpoll.com/login/process" method="post" role="form" style={{display: 'block'}}>
                                                        <div className="form-group">
                                                            <input type="text" name="username" id="username" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group text-center">
                                                            <input type="checkbox" tabIndex={3} className name="remember" id="remember" />
                                                            <label htmlFor="remember"> Remember Me</label>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div className="col-sm-6 col-sm-offset-3">
                                                                    <input type="submit" name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="text-center">
                                                                        <a href="http://phpoll.com/recover" tabIndex={5} className="forgot-password">Forgot Password?</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <form id="register-form" action="http://phpoll.com/register/process" method="post" role="form" style={{display: 'none'}}>
                                                        <div className="form-group">
                                                            <input type="text" name="username" id="username" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Email Address" defaultValue />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div className="col-sm-6 col-sm-offset-3">
                                                                    <input type="submit" name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Register Now" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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
}

export default LoginRegister;