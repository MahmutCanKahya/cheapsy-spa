import React, { Component } from "react";
import axios from "axios";
import AdvertListing from "./advert-listing";

class Adverts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advert: []
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      "http://sallagitsinakitgelsin.tk:5000/api/adverts"
    );
    this.setState({
      advert: response.data
    });
    console.log("CDM =>", response);
  };

  render() {
    return (
      <div>
        {console.log(this.state.advert)}
        <AdvertListing adverts={this.state.advert} />
      </div>
    );
  }
}

export default Adverts;
