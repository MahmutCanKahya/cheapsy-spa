import React, {Component} from 'react';
import '../css/loginRegister.css'



class Login extends Component {
    constructor(){
        super()
        this.state = {
            password : '',
            email : ''
        }
        this.login = this.login.bind(this);

    }

    handlePassword(text)
    {
        this.setState({password : text.target.value})
    }
    handleEmail(text)
    {
        this.setState({email : text.target.value})
    }

    handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
         }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })}

    login(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state))
        fetch('sallagitsin.tk/api/user/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.props.history.push('/');
                } else {
                    console.log(res.error)
                }
            })
            .catch(err => {
                console.error(err);
                    alert('Kullanıcı adı veya şifre yanlış');
            });
    }



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
                               autoFocus onChange={(text) => {this.handleEmail(text)}}/>
                        <label htmlFor="inputEmail">Email Adresi</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Şifre girmen gerekiyor." onChange={(text) => {this.handlePassword(text)}}/>
                        <label htmlFor="inputPassword">Şifre</label>
                    </div>


                    <div className="checkbox mb-3">
                        <label>
                        </label>
                    </div>
                    <button className="btn btn-lg btn-block bg-danger border-white" type="button" onClick={this.login}>Giriş</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2019 ARCOM &reg; Tüm hakları kendine aittir.</p>
                </form>
            </div>
        );
    }
}
export default Login;