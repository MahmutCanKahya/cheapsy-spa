import React, { Component } from "react";
import '../css/shop-item.css'
import axios from "axios";

export default class Profile extends Component {
  componentWillMount() {
      axios.get(
          "http://sallagitsinakitgelsin.tk:5000/api/user/userId=" + this.props.userId
      ).then(response2 => {
        this.setDefaultValues(response2)

      })
  }

   setDefaultValues(response2) {
     this.setState({
       kullanici_ad:response2.data.advert.ad,
       kullanici_soyad:response2.data.advert.soyad,
       kullanici_hakkinda:response2.data.advert.hakkinda,
       kullanici_mail:response2.data.advert.email,
       kullanici_url:response2.data.advert.resim,
       adres:response2.data.advert.adres,
       sehir:response2.data.advert.sehir,
     });
  }


  constructor(props) {
    super(props);
    this.state = {
      kullanici_id:"",
      kullanici_ad:"Adınız",
      kullanici_soyad:"Soyadınız",
      kullanici_hakkinda:"Hakkınızda",
      kullanici_url:"",
      adres:"Adresiniz",
      sehir:"Sehriniz",
      data:null
    };

    this.saveButton = this.saveButton.bind(this);
    this.inputFileChanged = this.inputFileChanged.bind(this);
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
    this.setState({ kullanici_hakkinda: text.target.value});
  }

  saveButton = () => {
    console.log(this.state)
    axios.patch("http://sallagitsinakitgelsin.tk:5000/api/user/userId=" + this.props.userId , {
      ad:this.state.kullanici_ad,
      soyad:this.state.kullanici_soyad,
      hakkida:this.state.kullanici_hakkinda,
      adres:this.state.adres,
      sehir:this.state.sehir,
      resim:this.state.data
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid" /><div className="container" /><div className="container-fluid" /><div className="container">
          <div className="row my-2">
            <div className="col-lg-8 order-lg-2">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a href data-target="#profile" data-toggle="tab" className="nav-link active">Profil</a>
                </li>
                <li className="nav-item">
                  <a href="#" data-target="#messages" data-toggle="tab" className="nav-link">Mesaj</a>
                </li>
                <li className="nav-item">
                  <a href data-target="#edit" data-toggle="tab" className="nav-link">Ayarlar</a>
                </li>
              </ul>
              <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                  <h4 className="mb-3">{this.state.kullanici_ad +" "+ this.state.kullanici_soyad}</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Hakkımda</h5>
                      <p>
                        {this.state.kullanici_hakkinda}
                      </p>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
                <div className="tab-pane" id="messages">
                  <div className="alert alert-info alert-dismissable">
                    <a className="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong> 
                  </div>
                  <div className="container">
                    <h3 className=" text-center">Gelen Kutusu</h3>
                    <div className="messaging">
                      <div className="inbox_msg">
                        <div className="inbox_people">
                          <div className="headind_srch">
                            <div className="recent_heading">
                              <h4>Sohbet</h4>
                            </div>
                            <div className="srch_bar">
                              <div className="stylish-input-group">
                                <input type="text" className="search-bar" placeholder="Search" />
                                <span className="input-group-addon">
                                  <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                                </span> </div>
                            </div>
                          </div>
                          <div className="inbox_chat">
                            <div className="chat_list active_chat">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                            <div className="chat_list">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                            <div className="chat_list">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                            <div className="chat_list">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                            <div className="chat_list">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                            <div className="chat_list">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                            <div className="chat_list">
                              <div className="chat_people">
                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                <div className="chat_ib">
                                  <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                  <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mesgs">
                          <div className="msg_history">
                            <div className="incoming_msg">
                              <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="received_msg">
                                <div className="received_withd_msg">
                                  <p>Test which is a new approach to have all
                                    solutions</p>
                                  <span className="time_date"> 11:01 AM    |    June 9</span></div>
                              </div>
                            </div>
                            <div className="outgoing_msg">
                              <div className="sent_msg">
                                <p>Test which is a new approach to have all
                                  solutions</p>
                                <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>
                            <div className="incoming_msg">
                              <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="received_msg">
                                <div className="received_withd_msg">
                                  <p>Test, which is a new approach to have</p>
                                  <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                              </div>
                            </div>
                            <div className="outgoing_msg">
                              <div className="sent_msg">
                                <p>Apollo University, Delhi, India Test</p>
                                <span className="time_date"> 11:01 AM    |    Today</span> </div>
                            </div>
                            <div className="incoming_msg">
                              <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                              <div className="received_msg">
                                <div className="received_withd_msg">
                                  <p>We work directly with our designers and suppliers,
                                    and sell direct to you, which means quality, exclusive
                                    products, at a price anyone can afford.</p>
                                  <span className="time_date"> 11:01 AM    |    Today</span></div>
                              </div>
                            </div>
                          </div>
                          <div className="type_msg">
                            <div className="input_msg_write">
                              <input type="text" className="write_msg" placeholder="Type a message" />
                              <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div>

                </div>
                <div className="tab-pane" id="edit">
                  <form role="form">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Ad</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.kullanici_ad} onChange={text => {
                          this.handleAd(text);
                        }}/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Soyad</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.kullanici_soyad} onChange={text => {
                          this.handleSoyad(text);
                        }}/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Adres</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text"  value={this.state.sehir} onChange={text => {
                          this.handleSehir(text);
                        }}/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text"  value={this.state.adres} onChange={text => {
                          this.handleAdres(text);
                        }}/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Hakkimda</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text"  value={this.state.kullanici_hakkinda} onChange={text => {
                          this.handleHakkimda(text);
                        }}/>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input type="button" className="btn btn-primary" defaultValue="Kaydet" onClick={this.saveButton.bind(this)}/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1 text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_960_720.png" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
              <h6 className="mt-2">Upload a different photo</h6>
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
                    accept="image/jpeg, image/png"/>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
