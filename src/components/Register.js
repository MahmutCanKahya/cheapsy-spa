import React, {Component} from 'react';

import { connect } from 'react-redux'
import {addUser} from '../actions/index'
import axios from 'axios';

class AddUser extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
        }
    }
    addUser(){
        this.props.addUser(this.state.name,this.state.lastname,this.state.email,this.state.username,this.state.password);
        axios.post('http://sallagitsinakitgelsin.tk:5000/api/user/signup',{
            ad:this.state.name,
            soyad:this.state.lastname,
            kullaniciAdi:this.state.username,
            email:this.state.email,
            sifre:this.state.password,
        })
        .then((res)=>{
            console.log(res)
        })
    }
    deleteUser(id){
        console.log('uygulamadan silenen id => ',id);
        console.log('this.props => ',this.props)
    }
    render(){
        console.log("this.porps -> " , this.props);
        return(
            <div>
                
                <div className="container">
                    <h1>ADD USER</h1>
                    <hr/>
                    <form>
                    
                    <div className="form-group">
                        <label htmlFor="name">Ad</label>
                        <input onChange={event=>this.setState({name:event.target.value})} type="text" className="form-control" id="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Soyad</label>
                        <input onChange={event=>this.setState({lastname:event.target.value})} type="text" className="form-control" id="lastname" placeholder="LastName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">E-mail</label>
                        <input onChange={event=>this.setState({email:event.target.value})} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Kullanıcı Adı</label>
                        <input onChange={event=>this.setState({username:event.target.value})} type="text" className="form-control" id="username" placeholder="User Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input onChange={event=>this.setState({password:event.target.value})} type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    
                    <button onClick={()=> this.addUser()} type="button" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('state -> ', state);
    return{
        users:state,
    }
}

export default connect(mapStateToProps, {addUser})(AddUser)