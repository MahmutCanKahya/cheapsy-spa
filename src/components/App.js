import React, { Component } from "react";
import NavBar from "./NavBar";
import LeftBar from "./LeftBar";
import "../css/App.css";
import Adverts from "./Adverts";
class App extends Component {
  render() {
    return (
      <div id="nav">
        <NavBar />

        <div className="container">
          <div className="row">
            <LeftBar />

            <div className="col-lg-9">
              <Adverts />
            </div>
          </div>
        </div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2019
            </p>
          </div>
        </footer>

        <script src="vendor/jquery/jquery.min.js" />
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
      </div>
    );
  }
}

export default App;
