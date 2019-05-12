import React, { Component } from "react";
import axios from "axios";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kullaniciId: String
    };
  }
  mesajCek() {
    axios.get("http://localhost:5000/api/messages/kullaniciId="+this.state.kullaniciId)
    .then(res => {
        console.log(res);
      });
  }



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
          console.log(this.state.kullaniciId)
        } else {
          const error = new Error(res.error);
          throw error;
        }
      });
  }

  componentDidMount(){
    this.kullaniciId()
  }
  render() {
      this.mesajCek()
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
                    <div className="chat_people">
                      <div className="chat_img">
                        {" "}
                        <img
                          src="https://ptetutorials.com/images/user-profile.png"
                          alt="sunil"
                        />{" "}
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Sunil Rajput <span className="chat_date">Dec 25</span>
                        </h5>
                        <p>
                          Test, which is a new approach to have all solutions
                          astrology under one roof.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mesgs">
                <div className="msg_history">
                  <div className="incoming_msg">
                    <div className="incoming_msg_img">
                      {" "}
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{" "}
                    </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>
                          Test which is a new approach to have all solutions
                        </p>
                        <span className="time_date"> 11:01 AM | June 9</span>
                      </div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span className="time_date"> 11:01 AM | June 9</span>{" "}
                    </div>
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
