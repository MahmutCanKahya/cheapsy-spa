import React, { Component } from "react";
import "../css/shop-item.css";
import axios from "axios";
import Message from "./Message";

export default class Profile extends Component {
  componentWillMount() {
    axios
      .get(
        "http://sallagitsinakitgelsin.tk:5000/api/user/userId=" +
          this.props.userId
      )
      .then(response2 => {
        this.setDefaultValues(response2);
      });
  }

  setDefaultValues(response2) {
    this.setState({
      kullanici_ad: response2.data.advert.ad,
      kullanici_soyad: response2.data.advert.soyad,
      kullanici_hakkinda: response2.data.advert.hakkinda,
      kullanici_mail: response2.data.advert.email,
      kullanici_url: response2.data.advert.resim,
      adres: response2.data.advert.adres,
      sehir: response2.data.advert.sehir,
      data: response2.data.advert.resim
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      kullanici_id: "",
      kullanici_ad: "Adınız",
      kullanici_soyad: "Soyadınız",
      kullanici_hakkinda: "Hakkınızda",
      kullanici_url: "",
      adres: "Adresiniz",
      sehir: "Sehriniz",
      data: null
    };

    this.saveButton = this.saveButton.bind(this);
    this.inputFileChanged = this.inputFileChanged.bind(this);
  }

  inputFileChanged(e) {
    this.setState({
      data: e.target.files[0]
    });
  }

  handleAd(text) {
    this.setState({ kullanici_ad: text.target.value });
  }
  handleSoyad(text) {
    this.setState({ kullanici_soyad: text.target.value });
  }
  handleSehir(text) {
    this.setState({ sehir: text.target.value });
  }
  handleAdres(text) {
    this.setState({ adres: text.target.value });
  }
  handleHakkimda(text) {
    this.setState({ kullanici_hakkinda: text.target.value });
  }

  saveButton = () => {
    var formData = new FormData();
    formData.append("ad", this.state.kullanici_ad);
    formData.append("soyad", this.state.kullanici_soyad);
    formData.append("hakkinda", this.state.kullanici_hakkinda);
    formData.append("adres", this.state.adres);
    formData.append("sehir", this.state.sehir);
    formData.append("resim", this.state.data);

    console.log(this.state);
    axios
      .patch(
        "http://sallagitsinakitgelsin.tk:5000/api/user/userId=" +
          this.props.userId,
        formData
      )
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <div className="container-fluid" />
        <div className="container" />
        <div className="container-fluid" />
        <div className="container">
          <div className="row my-2">
            <div className="col-lg-8 order-lg-2">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href
                    data-target="#profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Profil
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-target="#messages"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Mesaj
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href
                    data-target="#edit"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Ayarlar
                  </a>
                </li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h4 className="mb-3">
                    {this.state.kullanici_ad + " " + this.state.kullanici_soyad}
                  </h4>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Hakkımda</h5>
                      <p>{this.state.kullanici_hakkinda}</p>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
                <Message/>
                <div className="tab-pane" id="edit">
                  <form role="form">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Ad
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.kullanici_ad}
                          onChange={text => {
                            this.handleAd(text);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Soyad
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.kullanici_soyad}
                          onChange={text => {
                            this.handleSoyad(text);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Adres
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.sehir}
                          onChange={text => {
                            this.handleSehir(text);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.adres}
                          onChange={text => {
                            this.handleAdres(text);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Hakkimda
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.kullanici_hakkinda}
                          onChange={text => {
                            this.handleHakkimda(text);
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          type="button"
                          className="btn btn-primary"
                          defaultValue="Kaydet"
                          onClick={this.saveButton.bind(this)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1 text-center">
              <img
                src={"http://sallagitsinakitgelsin.tk:5000/" + this.state.data}
                className="mx-auto img-fluid img-circle d-block"
                alt="avatar"
              />
              <label className="custom-file">
                Resim Sec
                <input
                  type="file"
                  id="file"
                  ref="input_reader"
                  name="file"
                  multiple
                  className="custom-file-input"
                  onChange={this.inputFileChanged}
                  accept="image/jpeg, image/png"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
