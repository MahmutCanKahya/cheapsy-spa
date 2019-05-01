import React, { Component } from "react";
import axios from "axios";
import AdvertListing from "./advert-listing";

class Adverts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adverts: []
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      "http://sallagitsinakitgelsin.tk:5000/api/adverts"
    );
    this.setState({
      adverts: response.data
    });
    console.log("CDM =>", response);
  };

  render() {
    return (
      <div>
        {console.log(this.state.adverts)}
        <AdvertListing adverts={this.state.adverts} />
      </div>
    );
  }
}

export default Adverts;
