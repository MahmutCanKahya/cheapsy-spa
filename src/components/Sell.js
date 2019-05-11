import React, { Component } from "react";
import "../css/sell.css";
import axios from "axios";
import alertify from "alertifyjs";

export default class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      images: null,
      fiyat: "",
      kategori: "",
      ozellik: "",
      ilanAdi: "",
      kullanici:"",
      data:null
    };

    this.sell = this.sell.bind(this);
    this.inputFileChanged = this.inputFileChanged.bind(this);
    this.removeUpload = this.removeUpload.bind(this);
  }

  inputFileChanged(e) {
    if (window.FileReader) {
      let file = e.target.files[0],
        reader = new FileReader(),
        self = this;
      reader.onload = function(r) {
        self.setState({
          images: r.target.result,
          isHidden: false
        });
      }
      this.setState({
        data: e.target.files[0],
      })
      
      reader.readAsDataURL(file);
    } else {
      alert("Soryy, your browser does'nt support for preview");
    }
  }

  removeUpload() {
    this.setState({
      images: null,
      isHidden: true
    });
  }

  handleFiyat(text) {
    this.setState({ fiyat: text.target.value });
  }
  handleIlanAdi(text) {
    this.setState({ ilanAdi: text.target.value });
  }
  handleKategori(text) {
    this.setState({ kategori: text.target.value });
  }
  handleOzellik(text) {
    this.setState({ ozellik: text.target.value });
  }

  kullaniciId() {
    var token = sessionStorage.getItem("user");
    axios.post("http://sallagitsinakitgelsin.tk:5000/api/user/posts", {
      authorization: "Bearer " + token
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          kullanici:res.data.authData.userId
        })
      } else {
        const error = new Error(res.error);
        throw error;
      }
    });
  }
  componentWillMount(){
    this.kullaniciId();
  }

  sell() {
    var formData = new FormData();
    formData.append("ilan_url", this.state.data);
    formData.append("kullanici_id", this.state.kullanici);
    formData.append("kategori", this.state.kategori);
    formData.append("fiyat", this.state.fiyat);
    formData.append("ilan_aciklama", this.state.ozellik);
    formData.append("ilan_adi", this.state.ilanAdi);
    console.log(this.state.data);
    axios
      .post("http://sallagitsinakitgelsin.tk:5000/api/adverts", formData)
      .then(res => {
        if (res.status === 201) {
          
          alertify.success("İlan başarılı bir şekilde oluşturuldu.");
          this.props.history.push("/");
        } else {
          alertify.success("İlan oluşturulurken bir hata rastlandı.");
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        alertify.success("İlan oluşturulurken bir hata rastlandı.");
      });
  }

  render() {
    return (
      <div>
        <div className="containere">
          <div className="sign-up-content">
            <legend style={{ textAlign: "center" }}>Ne Satıyorsun?</legend>

            <script
              className="jsbin"
              src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"
            />
            <div className="file-upload col-md-12">
              {this.state.isHidden && (
                <div>
                  <input
                    type="file"
                    ref="input_reader"
                    name="file"
                    multiple
                    className="file-upload-btn"
                    onChange={this.inputFileChanged}
                    accept="image/jpeg, image/png"
                  />
                </div>
              )}
              {!this.state.isHidden && (
                <div className="file-upload-content">
                  <img
                    className="file-upload-image"
                    src={this.state.images}
                    alt="your image"
                  />
                  <div className="image-title-wrap">
                    <button
                      type="button"
                      onClick={this.removeUpload}
                      className="remove-image"
                    >
                      Sil Resim Yükle
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="col-md-12 control-label" htmlFor="kategori_sec">
                Kategori Seç
              </label>
              <div className="col-md-12">
                <select
                  id="kategori_sec"
                  name="kategori_sec"
                  className="form-control"
                  onChange={text => {
                    this.handleKategori(text);
                  }}
                >
                  <option value="emlak">Emlak</option>
                  <option value="vasıta">Vasıta</option>
                  <option value="elektronik">Elektronik</option>
                  <option value="giyim">Giyim</option>
                  <option value="aksesuar">Aksesuar</option>
                  <option value="diğer">Diğer</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-12 control-label" htmlFor="urun_adı">
                Ürün Adı
              </label>
              <div className="col-md-12">
                <input
                  id="urun_adı"
                  name="urun_adı"
                  type="text"
                  placeholder="Pikap"
                  className="form-control input-md"
                  onChange={text => {
                    this.handleIlanAdi(text);
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-12 control-label" htmlFor="fiyat">
                Fiyat
              </label>
              <div className="col-md-12">
                <div className="input-group">
                  <input
                    id="fiyat"
                    name="fiyat"
                    className="form-control"
                    placeholder="Fiyat Giriniz"
                    type="text"
                    onChange={text => {
                      this.handleFiyat(text);
                    }}
                  />
                  <span className="input-group-addon">TRY</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12 control-label" htmlFor="urun_ozellik">
                Özellikler
              </label>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  id="urun_ozellik"
                  name="urun_ozellik"
                  placeholder="Detay verin."
                  onChange={text => {
                    this.handleOzellik(text);
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-12 control-label" htmlFor="button1id" />
              <div className="col-md-12">
                <button
                  id="button1id"
                  name="button1id"
                  className="btn btn-success"
                  onClick={this.sell}
                >
                  Kaydet
                </button>
                <button
                  id="button2id"
                  name="button2id"
                  className="btn btn-danger"
                >
                  İptal
                </button>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
