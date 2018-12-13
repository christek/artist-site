import React from 'react';

import Listings from './Listings';

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

const Rent = (props) => (
  <div>
    <h1>Rent</h1>
    <Listings data={data} />
  </div>
);

export default Rent;
