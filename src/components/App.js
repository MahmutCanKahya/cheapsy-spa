import React, { Component } from "react";
import NavBar from "./NavBar";
import LeftBar from "./LeftBar";
import Register from "./Register";
import Advert from "./Advert";
import Adverts from "./Adverts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../css/App.css";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/add" component={Register} />
          <Route exact path="/login" component={Login} />

          <div>
            <NavBar />

            <div className="container navtopmargin">
              <div className="row">
                <LeftBar />

                <div className="col-lg-9">
                  <Switch>
                    <Route exact path="/" component={Adverts} />
                    <Route exact path="/adverts/:advertId" component={Advert} />
                    <Route component={Adverts} />
                  </Switch>
                </div>
              </div>
            </div>

            <footer className="footer mt-auto py-3 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">
                  Copyright &copy; Your Website 2019
                </p>
              </div>
            </footer>

            <script src="vendor/jquery/jquery.min.js" />
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
