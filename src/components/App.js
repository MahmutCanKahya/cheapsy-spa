import React, { Component } from "react";
import NavBar from "./NavBar";
import LeftBar from "./LeftBar";
import Register from "./Register";
import Advert from "./Advert";
import Adverts from "./Adverts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../css/App.css";
import Login from "./Login";
import Profile from "./Profile";
import Sell from "./Sell";
import Category from "./Category";
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:""
    };
  }

  componentWillMount() {
    this.isAuthenticated()
  }

  isAuthenticated() {
    var token = sessionStorage.getItem("user");
    Axios.post("http://sallagitsinakitgelsin.tk:5000/api/user/posts", {
      authorization: "Bearer " + token
    }).then(res => {
      if (res.status === 200) {
        this.setState({userId:res.data.authData.userId});
      } else {
        const error = new Error(res.error);
        throw error;
      }
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/add" component={Register} />
          <Route exact path="/login" component={Login} />
          <div>
            <NavBar />
            <Switch>
            <Route exact path="/profile/" component={() => <Profile userId={this.state.userId}/>} />
            <Route exact path="/sell" component={Sell} />
              <div className="container navtopmargin">
                <div className="row">

                <Route  component={LeftBar} />

                  <div className="col-lg-9">
                    <Switch>
                      <Route exact path="/" component={Adverts} />
                      <Route exact path="/kategori/:kategoriAdi" component={Category} />
                      <Route exact path="/adverts/:advertId" component={Advert}/>
                      <Route component={Adverts} />
                    </Switch>
                  </div>
                </div>
              </div>
            </Switch>

            <footer className="footer py-3 mt-3 bg-dark">
              <div className="container">
                <p className="m-0 text-center text-white">
                  Copyright &copy; Cheapsy 2019
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
