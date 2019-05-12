import React, { Component } from "react";
import "../css/shop-item.css";
import Message from "./Message";

export default class Profile extends Component {
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
                    href
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
                  <h4 className="mb-3">Profilim</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Hakkımda</h5>
                      <p>
                        Fusce quis mi in sapien ultrices ullamcorper at vitae
                        urna. Sed mattis arcu non ullamcorper sodales. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        et quam gravida, scelerisque ex eu, maximus justo.
                        Vivamus sed libero non ex vulputate condimentum at id
                        orci. Quisque luctus mi purus, et ultricies odio
                        vestibulum vitae. Phasellus vestibulum magna id nunc
                        semper, vitae consectetur justo sagittis. Aliquam
                        placerat, eros in laoreet condimentum, mi libero blandit
                        urna, eget consectetur dolor lectus in lorem. Nullam
                        magna turpis, finibus id magna at, sodales consectetur
                        erat. In luctus mollis lectus, id iaculis velit
                        facilisis nec.
                      </p>
                    </div>
                    <div className="col-md-12">
                      <h4 className="mt-2">
                        <span className="fa fa-clock-o ion-clock float-right" />
                        Sattıklarım
                      </h4>
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
                          defaultValue="Jane"
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
                          defaultValue="Bishop"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Email
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="email"
                          defaultValue="email@gmail.com"
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
                          defaultValue
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          defaultValue
                          placeholder="City"
                        />
                      </div>
                      <div className="col-lg-3">
                        <input
                          className="form-control"
                          type="text"
                          defaultValue
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Saat
                      </label>
                      <div className="col-lg-9">
                        <select
                          id="user_time_zone"
                          className="form-control"
                          size={0}
                        >
                          <option value="Hawaii">(GMT-10:00) İstanbul</option>
                          <option value="Alaska">(GMT-09:00) Berlin</option>
                          <option value="Pacific Time (US  Canada)">
                            (GMT-08:00) Pacific Time (US &amp; Canada)
                          </option>
                          <option value="Arizona">(GMT-07:00) Arizona</option>
                          <option value="Mountain Time (US  Canada)">
                            (GMT-07:00) Mountain Time (US &amp; Canada)
                          </option>
                          <option
                            value="Central Time (US Canada)"
                            selected="selected"
                          >
                            (GMT-06:00) Central Time (US &amp; Canada)
                          </option>
                          <option value="Eastern Time (US  Canada)">
                            (GMT-05:00) Eastern Time (US &amp; Canada)
                          </option>
                          <option value="Indiana (East)">
                            (GMT-05:00) Indiana (East)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Kullancı Adı
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="janeuser"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Şifre
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          defaultValue={11111122333}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Şifre Doğrula
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          defaultValue={11111122333}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label" />
                      <div className="col-lg-9">
                        <input
                          type="reset"
                          className="btn btn-secondary"
                          defaultValue="Vazgeç"
                        />
                        <input
                          type="button"
                          className="btn btn-primary"
                          defaultValue="Kaydet"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1 text-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295398_960_720.png"
                className="mx-auto img-fluid img-circle d-block"
                alt="avatar"
              />
              <h6 className="mt-2">Upload a different photo</h6>
              <label className="custom-file">
                <input type="file" id="file" className="custom-file-input" />
                <span
                  className="custom-file-control"
                  style={{ borderColor: "red" }}
                >
                  Choose file
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
