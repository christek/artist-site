import React from 'react';

import Listings from './Listings';
import Map from './Map';

const data = [{
  id: 'abc',
  price: '300,000',
  address: '11 hyde rd',
  img: 'a.jpg',
  bedrooms: 3,
  bathrooms: 4,
},
{
  id: 'def',
  price: '500,000',
  address: '12 hyde rd',
  img: 'b.jpg',
  bedrooms: 3,
  bathrooms: 4,
},
{
  id: 'ghi',
  price: '400,000',
  address: '13 hyde rd',
  img: 'c.jpg',
  bedrooms: 3,
  bathrooms: 4,
}];

const Rent = (props) => (
  <div className="row">   
      <div className="col-6">
        <Listings data={data} />
      </div>
      <div className="col-6">
        <Map />
      </div>
  </div>
);

export default Rent;
