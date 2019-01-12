import React from 'react';

import Listings from './Listings';
import Map from './Map';

import styles from './Cols.module.css';

const data = [{
  price: '300,000',
  address: '11 hyde rd',
  img: 'a.jpg',
  bedrooms: 3,
  bathrooms: 4,
},
{
  price: '500,000',
  address: '12 hyde rd',
  img: 'b.jpg',
  bedrooms: 3,
  bathrooms: 4,
},
{
  price: '400,000',
  address: '13 hyde rd',
  img: 'c.jpg',
  bedrooms: 3,
  bathrooms: 4,
}];

const Buy = (props) => (
  <div className="row">
      <div className="col-6">
        <Listings data={data} />
      </div>
      <div className="col-6">
        <Map />
      </div>
  </div>
);

export default Buy;
