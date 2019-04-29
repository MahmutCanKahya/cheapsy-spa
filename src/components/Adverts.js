import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { showAdverts } from "../actions/index";



class Adverts extends Component {
  constructor(props) {
    super(props);
    this.state = {cevap: []};
  }

  componentDidMount = async () => {
      axios.get('http://sallagitsinakitgelsin.tk:5000/api/adverts').then((response) => {
              this.setState({cevap: response.data})
    })
        .catch((error)=>{
            console.log(error);
        });


  }

  renderAdverts(){
      return this.state.cevap.map(value => {

          return(
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                      <div className="card h-100">
                          <a href="#"><img className="card-img-top" src={"http://sallagitsinakitgelsin.tk:5000/" + value.ilan_url}/></a>
                          <div className="card-body">
                              <h4 className="card-title">
                                  <a href="#">{value.ilan_adi}</a>
                              </h4>
                              <h5>{value.fiyat}</h5>
                          </div>
                          <div className="card-footer d-flex justify-content-between align-items-center">
                              <small className="text-muted">&#9733; &#9733; &#9733; &#9734; &#9734;</small>
                              <small className="text-muted">{value.ilan_tarihi}</small>
                          </div>
                      </div>
                  </div>
          )

      })



  }




  render() {
    return (
        this.renderAdverts()
        /*{<div className="col-lg-3 col-md-4 col-sm-6 mb-4"></div>}*/
    );
  }
}

function mapStateToProps(state) {
  console.log("state -> ", state);
  return {
    adverts: this.state,
  }
}

export default connect(
  mapStateToProps,
  { showAdverts }
)(Adverts);
