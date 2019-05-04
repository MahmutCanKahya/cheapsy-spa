import React, { Component } from "react";
import "../css/ustBar.css";
import Axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
    this.logOut = this.logOut.bind(this);
  }

  isAuthenticated() {
    var token = sessionStorage.getItem("user");
    Axios.post("http://localhost:5000/api/user/posts", {
      authorization: "Bearer " + token
    }).then(res => {
      console.log(res);
      if (res.status === 200) {
        console.log("asdasd:  ", res);
        this.setState({ isAuth: true });
      } else {
        this.setState({ isAuth: false });
        const error = new Error(res.error);
        throw error;
      }
    });
  }
  logOut() {
    sessionStorage.removeItem("user");
    this.setState({ isAuth: false });
  }
  componentDidMount() {
    this.isAuthenticated();
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand navcode" id="logo" href="/">
              CHEAPSY
            </a>
            <input
              class="form-control form-control-dark  w-50"
              type="text"
              placeholder="Aramaya başla"
              aria-label="Search"
            />
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
                {!this.state.isAuth ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/login" id="giriskayit">
                      GİRİŞ
                    </a>
                  </li>
                ) : null}
                {!this.state.isAuth ? (
                  <li className="nav-item">
                    <a className="nav-link" id="giriskayit" href="/add">
                      KAYIT OL
                    </a>
                  </li>
                ) : null}
                {this.state.isAuth ? (
                  <li className="nav-item">
                    <a onClick={this.logOut} className="nav-link" href="/">
                      ÇIKIŞ
                    </a>
                  </li>
                ) : null}
                {this.state.isAuth ? (
                  <li className="nav-item ">
                    <a className="nav-link ml-lg-4" id="sat" href="/hemenSat">
                      HEMEN SAT
                    </a>
                  </li>
                ) : null}
                {!this.state.isAuth ? (
                  <li className="nav-item ">
                    <a className="nav-link ml-lg-4" id="sat" href="/login">
                      HEMEN SAT
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
