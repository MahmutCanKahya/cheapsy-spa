import React, {Component} from 'react';
import '../css/profile.css'
import NavBar from "./NavBar";

class Profile extends Component {

    render() {
        return (
            <div>
            <NavBar />
                <div className="container">
                    <div className="row my-2">
                        <div className="col-lg-8 order-lg-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="" data-target="#profile" data-toggle="tab"
                                       className="nav-link active">Profil</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" data-target="#messages" data-toggle="tab" className="nav-link">Mesaj</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Ayarlar</a>
                                </li>
                            </ul>
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="profile">
                                    <h4 className="mb-3">Profilim</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Hakkımda</h5>
                                            <p>
                                                Fusce quis mi in sapien ultrices ullamcorper at vitae urna. Sed mattis
                                                arcu non ullamcorper sodales. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Sed et quam gravida, scelerisque ex eu, maximus justo.
                                                Vivamus sed libero non ex vulputate condimentum at id orci. Quisque
                                                luctus mi purus, et ultricies odio vestibulum vitae. Phasellus
                                                vestibulum magna id nunc semper, vitae consectetur justo sagittis.
                                                Aliquam placerat, eros in laoreet condimentum, mi libero blandit urna,
                                                eget consectetur dolor lectus in lorem. Nullam magna turpis, finibus id
                                                magna at, sodales consectetur erat. In luctus mollis lectus, id iaculis
                                                velit facilisis nec.
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <h4 className="mt-2"><span
                                                className="fa fa-clock-o ion-clock float-right"></span>Sattıklarım</h4>
                                            <table className="table table-sm table-hover table-striped">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Teflon tava</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Kulaklık</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Teflon tava</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>buraya resim gelcek</strong>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="messages">
                                    <div className="alert alert-info alert-dismissable">
                                        <a className="panel-close close" data-dismiss="alert">×</a> This is
                                        an <strong>.alert</strong>
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

                        <span className="input-group-addon">
                        <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                        </span></div>
                                                        </div>
                                                    </div>
                                                    <div className="inbox_chat">
                                                        <div className="chat_list active_chat">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"><img
                                                                    src="https://ptetutorials.com/images/user-profile.png"
                                                                    alt="sunil"/></div>
                                                                <div className="chat_ib">
                                                                    <h5>Sunil Rajput <span
                                                                        className="chat_date">Dec 25</span></h5>
                                                                    <p>Test, which is a new approach to have all
                                                                        solutions
                                                                        astrology under one roof.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mesgs">
                                                    <div className="msg_history">
                                                        <div className="incoming_msg">
                                                            <div className="incoming_msg_img"><img
                                                                src="https://ptetutorials.com/images/user-profile.png"
                                                                alt="sunil"/></div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>Test which is a new approach to have all
                                                                        solutions</p>
                                                                    <span
                                                                        className="time_date"> 11:01 AM    |    June 9</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outgoing_msg">
                                                            <div className="sent_msg">
                                                                <p>Test which is a new approach to have all
                                                                    solutions</p>
                                                                <span
                                                                    className="time_date"> 11:01 AM    |    June 9</span>
                                                            </div>
                                                        </div>
                                                        <div className="incoming_msg">
                                                            <div className="incoming_msg_img"><img
                                                                src="https://ptetutorials.com/images/user-profile.png"
                                                                alt="sunil"/></div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>Test, which is a new approach to have</p>
                                                                    <span className="time_date"> 11:01 AM    |    Yesterday</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outgoing_msg">
                                                            <div className="sent_msg">
                                                                <p>Apollo University, Delhi, India Test</p>
                                                                <span
                                                                    className="time_date"> 11:01 AM    |    Today</span>
                                                            </div>
                                                        </div>
                                                        <div className="incoming_msg">
                                                            <div className="incoming_msg_img"><img
                                                                src="https://ptetutorials.com/images/user-profile.png"
                                                                alt="sunil"/></div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>We work directly with our designers and
                                                                        suppliers,
                                                                        and sell direct to you, which means quality,
                                                                        exclusive
                                                                        products, at a price anyone can afford.</p>
                                                                    <span
                                                                        className="time_date"> 11:01 AM    |    Today</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="type_msg">
                                                        <div className="input_msg_write">
                                                            <input type="text" className="write_msg"
                                                                   placeholder="Type a message"/>
                                                            <button className="msg_send_btn" type="button"><i
                                                                className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="tab-pane" id="edit">
                                    <form role="form">
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Ad</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="Jane"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Soyad</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="Bishop"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="email" value="email@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Adres</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value=""
                                                       placeholder="Street"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label"></label>
                                            <div className="col-lg-6">
                                                <input className="form-control" type="text" value="" placeholder="City"/>
                                            </div>
                                            <div className="col-lg-3">
                                                <input className="form-control" type="text" value=""
                                                       placeholder="State"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Saat</label>
                                            <div className="col-lg-9">
                                                <select id="user_time_zone" className="form-control" size="0">
                                                    <option value="Hawaii">(GMT-10:00) İstanbul</option>
                                                    <option value="Alaska">(GMT-09:00) Berlin</option>
                                                    <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific
                                                        Time (US &amp; Canada)
                                                    </option>
                                                    <option value="Arizona">(GMT-07:00) Arizona</option>
                                                    <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain
                                                        Time (US &amp; Canada)
                                                    </option>
                                                    <option value="Central Time (US &amp; Canada)"
                                                            selected="selected">(GMT-06:00) Central Time
                                                        (US &amp; Canada)
                                                    </option>
                                                    <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern
                                                        Time (US &amp; Canada)
                                                    </option>
                                                    <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Kullancı
                                                Adı</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="janeuser"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Şifre</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="password" value="11111122333"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Şifre
                                                Doğrula</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="password" value="11111122333"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label"></label>
                                            <div className="col-lg-9">
                                                <input type="reset" className="btn btn-secondary" value="Vazgeç"/>
                                                    <input type="button" className="btn btn-primary" value="Kaydet"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1 text-center">
                            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_960_720.png"
                                 className="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                                <h6 className="mt-2">Upload a different photo</h6>
                                <label className="custom-file">
                                    <input type="file" id="file" className="custom-file-input"/>
                                        <span className="custom-file-control">Choose file</span>
                                </label>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Profile;