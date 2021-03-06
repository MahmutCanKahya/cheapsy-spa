import React, { Component } from "react";
import "../css/loginRegister.css";
import axios from "axios";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
        }
        this.addUser = this.addUser.bind(this)
    }

    addUser(){
        console.log(this.state.name)
        console.log(this.state.lastname)
        console.log(this.state.email)
        console.log(this.state.password)

        axios.post('http://sallagitsinakitgelsin.tk:5000/api/user/signup',{
            ad:this.state.name,
            soyad:this.state.lastname,
            email:this.state.email,
            sifre:this.state.password
        }).then((res)=>{
                console.log(res)
            })
    }

  handlePassword(text)
  {
    this.setState({password : text.target.value})
  }
  handleEmail(text)
  {
    this.setState({email : text.target.value})
  }
  handleName(text)
  {
    this.setState({name : text.target.value})
  }
  handleSurname(text)
  {
    this.setState({lastname : text.target.value})
  }


  
  
  render() {
    return (
      <div className="registerDiv">
        <form className="form-signin">
          <div className="text-center mb-4">
            <br />
            <h1 className="h1 mb-1 font-weight-normal">
              <a href="/">CHEAPSY</a>
            </h1>
            <br />
            <br />
          </div>

          <div className="form-label-group">
            <input
                onChange={(text) => {this.handleEmail(text)}}
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email adresi girmen gerekiyor"
              autoFocus
            />
            <label htmlFor="inputEmail" >Email Adresi</label>
          </div>

          <div className="form-label-group">
            <input
                onChange={(text) => {this.handlePassword(text)}}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Şifre girmen gerekiyor."
            />
            <label htmlFor="inputPassword" >Şifre</label>
          </div>

          <div className="form-label-group">
            <input
                onChange={(text) => {this.handleName(text)}}
              type="text"
              id="inputName"
              className="form-control"
              placeholder="İsim girmen gerekiyor."
            />
            <label htmlFor="inputEmail" >İsim</label>
          </div>

          <div className="form-label-group">
            <input
                onChange={(text) => {this.handleSurname(text)}}
              type="text"
              id="inputName"
              className="form-control"
              placeholder="İsim girmen gerekiyor."
            />
            <label htmlFor="inputEmail" >Soyisim</label>
          </div>

          <div className="checkbox mb-3">
            <label />
          </div>
          <button className="btn btn-lg btn-block bg-danger border-white" type="button" onClick={this.addUser}>Giriş</button>
          <p className="mt-5 mb-3 text-muted text-center">
            &copy; 2019 ARCOM &reg; Tüm hakları kendine aittir.
          </p>
        </form>
      </div>
    );
  }
}
export default Register;
