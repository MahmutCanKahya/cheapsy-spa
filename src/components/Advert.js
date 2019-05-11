import React, { Component } from "react";
import axios from "axios";

export default class Advert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advert: [],
      fiyat: Number,
      ilan_aciklama: String,
      ilan_adi: String,
      ilan_tarihi: String,
      ilce: String,
      kullanici_id: String,
      mahalle: String,
      sehir: String,
      ilan_url: String
    };
  }

  componentDidMount = async () => {
    console.log(this.props.match.params.advertId);
    const response = await axios.get(
      "http://sallagitsinakitgelsin.tk:5000/api/adverts/" +
        this.props.match.params.advertId
    );
    this.setState({
      advert: response.data,
      kullanici_id:response.data.advert.kullanici_id,
      ilan_url:response.data.advert.ilan_url,
      fiyat: response.data.advert.fiyat,
      ilan_aciklama: response.data.advert.ilan_aciklama,
      ilan_adi: response.data.advert.ilan_adi,
      ilan_tarihi: response.data.advert.ilan_tarihi,
      ilce: response.data.advert.ilce,
      mahalle: response.data.advert.mahalle,
      sehir: response.data.advert.sehir,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-lg-3" style={{ height: "50%" }}>
            <img
              className="card-img-top"
              src="http://scottbalmer.co.uk/wp-content/uploads/2018/10/westworld-tv-thumb-324x324.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.kullanici_id}</h5>
              <p className="card-text">
                Aciklama =&gt; Opsiyonel satıcı ile ilgili bilgi içerebilir.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Sehir/Ulke</li>
              <li className="list-group-item">Detaylı adress</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Saticiya Mesaj At
              </a>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mt-4">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 container-fluid"
                      src={"http://sallagitsinakitgelsin.tk:5000/" + this.state.ilan_url}
                      alt="First slide"
                      style={{ height: "500px" }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="card-body">
                <h3 className="card-title">{this.state.ilan_adi}</h3>
                <h4>{this.state.fiyat+" ₺"}</h4>
                <p className="card-text">
                  {this.state.ilan_aciklama}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
