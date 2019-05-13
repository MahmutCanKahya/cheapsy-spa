import React, { Component } from "react";
import axios from "axios";
import moment from "moment/min/moment-with-locales";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kullaniciId: String,
      konusmalar: [],
      kullanici_ad: [],
      kullanici_soyad: [],
      hakkinda: [],
      data: [],
      mesaj: [],
      mesaj_zaman: [],
      gonderici: [],
      gonderilecek_mesaj: String,
      tiklanan: String
    };
    moment.locale("tr");
  }

  mesajCek() {
    axios
      .get(
        "http://localhost:5000/api/messages/kullaniciId=" +
          this.state.kullaniciId
      )
      .then(res => {
        this.setState({
          konusmalar: res.data.message
        });
        let sira;
        this.state.konusmalar.forEach(element => {
          if (element.konusmacilar[1] === this.state.kullaniciId) {
            sira = 0;
          } else {
            sira = 1;
          }
          axios
            .get(
              "http://sallagitsinakitgelsin.tk:5000/api/user/userId=" +
                element.konusmacilar[sira]
            )
            .then(res => {
              console.log(res);
              this.setDefaultValues(res);
            });
        });
      });
  }
  setDefaultValues(res) {
    this.setState({
      kullanici_ad: [...this.state.kullanici_ad, res.data.advert.ad],
      kullanici_soyad: [...this.state.kullanici_soyad, res.data.advert.soyad],
      data: [...this.state.data, res.data.advert.resim],
      hakkinda: [...this.state.hakkinda, res.data.advert.hakkinda]
    });
  }

  mesajGonder = e => {
    axios
      .post("http://localhost:5000/api/messages/", {
        gonderici: this.state.kullaniciId,
        mesaj: this.state.gonderilecek_mesaj,
        konusmaId: this.state.tiklanan
      })
      .then(res => {
        this.setState({
          mesaj: [...this.state.mesaj, this.state.gonderilecek_mesaj],
          gonderici: [...this.state.gonderici, this.state.kullaniciId],
          mesaj_zaman: [...this.state.mesaj_zaman, moment()._d]
        });
        console.log(this.state.mesaj_zaman)
      });
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
            kullaniciId: res.data.authData.userId
          });
          this.mesajCek();
        } else {
          const error = new Error(res.error);
          throw error;
        }
      });
  }
  handleMesaj(text) {
    this.setState({ gonderilecek_mesaj: text.target.value });
  }
  componentDidMount() {
    this.kullaniciId();
  }
  konusmaTikla = e => {
    const tiklanan = e.currentTarget.getAttribute("value");
    this.setState({
      tiklanan: tiklanan,
      gonderici: [],
      mesaj: [],
      mesaj_zaman: []
    });
    axios
      .get("http://localhost:5000/api/messages/konusmaId=" + tiklanan)
      .then(res => {
        res.data.message.forEach(element => {
          this.setState({
            gonderici: [...this.state.gonderici, element.gonderici],
            mesaj: [...this.state.mesaj, element.mesaj],
            mesaj_zaman: [...this.state.mesaj_zaman, element.mesaj_zaman]
          });
        });
      });
  };

  render() {
    return (
      <div className="tab-pane" id="messages">
        <div className="container">
          <h3 className=" text-center">Gelen Kutusu</h3>
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="recent_heading">
                    <h4>Sohbet</h4>
                  </div>
                </div>
                <div className="inbox_chat">
                  <div className="chat_list active_chat">
                    {this.state.konusmalar.map((konusma, index) => {
                      return (
                        <div
                          className="chat_people "
                          value={konusma._id}
                          onClick={this.konusmaTikla}
                          key={konusma._id}
                        >
                          <div className="chat_img">
                            {" "}
                            <img
                              src={
                                "http://sallagitsinakitgelsin.tk:5000/" +
                                this.state.data[index]
                              }
                              alt="sunil"
                            />{" "}
                          </div>
                          <div className="chat_ib">
                            <h5>{this.state.kullanici_ad[index]} </h5>
                            <p>{this.state.hakkinda[index]}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mesgs ">
                <div className="msg_history">
                  {this.state.mesaj.map((element, index) => {
                    if (
                      this.state.gonderici[index] !== this.state.kullaniciId
                    ) {
                      return (
                        <div className="incoming_msg " key={element._id}>
                          <div className="received_msg ">
                            <div className="received_withd_msg ">
                              <p className="bg-danger text-white">
                                {this.state.mesaj[index]}
                              </p>
                              <span className="time_date">
                                {" "}
                                {moment(
                                  new Date(this.state.mesaj_zaman[index])
                                ).fromNow()}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="outgoing_msg">
                          <div className="sent_msg">
                            <p>{this.state.mesaj[index]}</p>
                            <span className="time_date">
                              {" "}
                              {moment(
                                new Date(this.state.mesaj_zaman[index])
                              ).fromNow()}
                            </span>{" "}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="type_msg ">
                  <div className="input_msg_write">
                    <input
                      onChange={text => {
                        this.handleMesaj(text);
                      }}
                      type="text"
                      className="write_msg"
                      placeholder="Mesaj yazin..."
                    />
                    <button
                      className="msg_send_btn"
                      value=""
                      type="button"
                      onClick={this.mesajGonder}
                    >
                      <i className="fa fa-paper-plane-o" aria-hidden="true">
                        >
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
