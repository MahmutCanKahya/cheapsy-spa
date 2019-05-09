import React, {Component} from 'react';
import '../css/loginRegister.css'
import Axios from 'axios';
import alertify from 'alertifyjs';


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


    login(){
       Axios.post('http://sallagitsinakitgelsin.tk:5000/api/user/login',{
           sifre:this.state.password,
           email:this.state.email
       }).then((res)=>{
            if(res.status===200){
                sessionStorage.setItem('user',res.data.token);
                alertify.success('Giriş Yapıldı'); 
                this.props.history.push('/')
            }else{
                const error = new Error(res.error);
                throw error;
            }
       })
       .catch(err => {
            alertify.error('Giriş işlemi yapılmadı.'); 
       })
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