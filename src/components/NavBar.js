import React, { Component } from "react";
import "../css/ustBar.css";
import Popup from "./LoginRegister"


class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }




  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand navcode" id="logo" href="/">
              CHEAPSY
            </a>
            <input class="form-control form-control-dark  w-50" type="text" placeholder="Search" aria-label="Search"></input>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">

                  <a className="nav-link" id="giriskayit" onClick={this.togglePopup.bind(this)}>GİRİŞ</a>

                </li>
                <li className="nav-item">
                  <a className="nav-link" id="giriskayit" href="/add">
                    KAYIT OL
                  </a>
                </li>
                {/* BURASI LOGİN İŞLEMİ YAPILDIKTAN SONRA ACILCAK
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ÇIKIŞ</a>
                                </li>*/}
                <li className="nav-item ">
                  <a className="nav-link ml-lg-4" id="sat" href="/">
                    HEMEN SAT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.showPopup ?
            <Popup closePopup={this.togglePopup.bind(this)}/>
            : null
        }
      </div>
    );
  }
}

export default NavBar;
