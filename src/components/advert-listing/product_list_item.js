import React from "react";
import moment from 'moment';

export default function ProductListItem(props) {
  return (
    
        <div className="card h-100">
          <a href="#">
            <img
              className="card-img-top"
              src={
                "http://sallagitsinakitgelsin.tk:5000/" + props.advert.ilan_url
              }
              alt="Resim Mevcut Değil"
              width="auto" 
              height="181.7"
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{props.advert.ilan_adi}</a>
            </h4>
            <h5>{props.advert.fiyat +" ₺"}</h5>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9734; &#9734;
            </small>
            <small className="text-muted">{moment(new Date(props.advert.ilan_tarihi)).fromNow()}</small>
          </div>
        </div>
  );
}
