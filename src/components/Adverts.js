import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { showAdverts } from "../actions/index";

class Adverts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        advert:[],
        _id:"",
        ilan_adi: "",
        fiyat: "",
        ilan_url: "",
        ilan_tarihi: ""
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      "http://sallagitsinakitgelsin.tk:5000/api/adverts"
    );
    this.setState({
        advert:response.data
    })

  };

  renderAdverts(){
    const {adverts} =this.props;
        return(
        <div className="card h-100">
            {
              adverts.map(advert => {
                return (
                <div key={advert.data._id}>
                    <a href="#">
                    <img
                        className="card-img-top"
                        src="{{this.ilan_url}}"
                        alt=""
                    />
                    </a>
                    <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{advert.data.ilan_adi}</a>
                    </h4>
                    <h5>{this.fiyat}</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        &#9733; &#9733; &#9733; &#9734; &#9734;
                    </small>
                    <small className="text-muted">{this.date}</small>
                    </div>
                </div>
                );
                })
            }
        </div>
        )
  }

  render() {
      
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        {this.renderAdverts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state -> ", state);
  return {
    adverts: state,
  }
}

export default connect(
  mapStateToProps,
  { showAdverts }
)(Adverts);
