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
      kullanici_id: String,
      adres: String,
      sehir: String,
      ilan_url: String,
      kullanici_ad: String,
      kullanici_soyad: String,
      kullanici_url: String,
      kullanici_hakkinda: String,
      token_kullanici:String
    };
    this.message=this.message.bind(this);
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
    });
    console.log(response)

    const response2 = await axios.get(
        "http://sallagitsinakitgelsin.tk:5000/api/user/userId=" + this.state.kullanici_id
    );
    this.setState({
      kullanici_ad:response2.data.advert.ad,
      kullanici_soyad:response2.data.advert.soyad,
      kullanici_hakkinda:response2.data.advert.hakkinda,
      kullanici_mail:response2.data.advert.email,
      kullanici_url:response2.data.advert.resim,
      adres:response2.data.advert.adres,
      sehir:response2.data.advert.sehir,
    });
    this.kullaniciId()
  };

  kullaniciId() {
    var token = sessionStorage.getItem("user");
    axios
      .post("http://sallagitsinakitgelsin.tk:5000/api/user/posts", {
        authorization: "Bearer " + token
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            token_kullanici: res.data.authData.userId
          });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      });
  }

  message(){
    axios.post('http://sallagitsinakitgelsin.tk:5000/api/messages/conversation',{
      gonderici:this.state.token_kullanici,
      alici:this.state.kullanici_id
    })
    .then(res => {
      console.log(res)
      if (res.status === 201) {
        this.props.history.push('/profile');
        console.log("işlem başarılı")
      } else {
        const error = new Error(res.error);
        throw error;
      }
    });
  }

  render() {
    console.log(this.state.kullanici_url)
    return (
      <div className="container">
        <div className="row">
          <div className="card col-lg-3 " style={{ height: "50%" , paddingTop:"10px"}}>
            {this.state.kullanici_url != null && <img
                className="card-img-top"
                src={"http://sallagitsinakitgelsin.tk:5000/"+this.state.kullanici_url}
            />
            }
            
            {this.state.kullanici_url == null && <img
                className="card-img-top"
                src="https://i.ibb.co/gmBNbrD/man.png"
            />}
            <div className="card-body">
              <h5 className="card-title">{this.state.kullanici_ad +" "+ this.state.kullanici_soyad}</h5>
              <p className="card-text">
                {this.state.kullanici_hakkinda}
              </p>
            </div>
            {this.state.sehir != null && <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.state.sehir}</li>
              <li className="list-group-item">{this.state.adres}</li>
            </ul>}
            <div className="card-body">
              <a  onClick={this.message}  className="card-link">
                Saticiya Mesaj At
              </a>
            </div>
          </div>

          <div className="col-lg-9" >
            <div className="card mt-4" style={{ paddingTop:"10px"}}>
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
