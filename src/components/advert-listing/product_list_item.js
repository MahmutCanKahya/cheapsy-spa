import React from "react";
import moment from 'moment/min/moment-with-locales';

export default function ProductListItem(props) {
    moment.locale('tr');
  return (
    
        <div className="card h-100">
          <a href={"/adverts/advertId="+props.advert._id}>
            <img
              className="card-img-top "
              src={
                "http://sallagitsinakitgelsin.tk:5000/" + props.advert.ilan_url
              }
              alt="Resim Mevcut Değil"
              width="auto" 
              height="181.7"
              placeholder={props.advert.ilan_adi}
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href={"/adverts/advertId="+props.advert._id}>{props.advert.ilan_adi}</a>
            </h4>
            <h5>{props.advert.fiyat +" ₺"}</h5>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <small className="text-muted">{moment(new Date(props.advert.ilan_tarihi)).fromNow()}</small>
          </div>
        </div>
  );
}
