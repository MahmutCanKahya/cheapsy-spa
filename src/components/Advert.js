import React, { Component } from 'react'

class Advert extends Component {

  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render() {

    const {_id,ilan_adi,fiyat,ilan_url,ilan_tarihi} = this.props;
    return (
      <div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="http://placehold.it/600x400" alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{this.ilan_adi}</a>
                            </h4>
                            <h5>{this.fiyat}</h5>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9734; &#9734;</small>
                            <small className="text-muted">{this.ilan_tarihi}</small>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}

export default Advert;
