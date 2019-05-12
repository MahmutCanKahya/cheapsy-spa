import React, { Component } from "react";
import axios from "axios";
import AdvertListing from "./advert-listing";

class Adverts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advert: [],
      advertLength: Number,
      max: 10
    };
    this.arttir = this.arttir.bind(this);
  }

  componentDidMount = async () => {
    const response = await axios.get(
      "http://sallagitsinakitgelsin.tk:5000/api/adverts"
    );
    this.setState({
      advert: response.data,
      advertLength: response.data.length
    });
  };
  arttir() {
    this.setState({
      max: this.state.max + 10
    });
  }
  esitMi(){
    
  }
  render() {
    return (
      <div className="Adverts">
        {console.log(this.state.advert)}
        <AdvertListing
          adverts={this.state.advert}
          min={0}
          max={this.state.max}
        />
        {this.state.max<this.state.advertLength?
          <a onClick={this.arttir}>
            <h1>+</h1>
          </a>:null
        }
      </div>
    );
  }
}

export default Adverts;
