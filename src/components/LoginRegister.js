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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default LoginRegister;