import React from 'react'
import ProductListItem from './product_list_item';

export default function AdvertListing(props) {
  return (
    
    <div className="row">
        {
            props.adverts.map(advert=>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={advert._id}>
                    <ProductListItem advert={advert}/>
                  </div>
                )
        }
        </div>
  )
}

