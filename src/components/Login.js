import React, {Component} from 'react';
import '../css/loginRegister.css'

class Login extends Component {
    render() {
        return (
            <div className="registerDiv">
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <br/>
                        <h1 className="h1 mb-1 font-weight-normal"><a href="/">CHEAPSY</a></h1>
                        <br/>
                        <br/>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email adresi girmen gerekiyor"
                               autoFocus/>
                        <label htmlFor="inputEmail">Email Adresi</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Şifre girmen gerekiyor."/>
                        <label htmlFor="inputPassword">Şifre</label>
                    </div>


                    <div className="checkbox mb-3">
                        <label>
                        </label>
                    </div>
                    <button className="btn btn-lg btn-block bg-danger border-white" type="submit">Giriş</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2019 ARCOM &reg; Tüm hakları kendine aittir.</p>
                </form>
            </div>
        );
    }
}
export default Login;