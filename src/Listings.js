import React from 'react';

import styles from './Listing.module.css'; // Import css modules stylesheet as styles

const divStyle = {
  width: '33%',
  float: 'left'
};

const imgStyle = {
  height: '200px',
  objectFit: 'cover',
};

const Listings = (props) => (
  <ul>
    {props.data.map(function (name, index) {
      const fullImg = '/img/' + name.img;
      return <div className="card" style={divStyle}>
        <div key={index}><img className="card-img-top" style={imgStyle} src={fullImg} /></div>
        <div className="card-body">
          <h5 className="card-title">${name.price}</h5>
          <p className="card-text">{name.address}</p>
          <p className="card-text">{name.bedrooms} bedrooms</p>
          <p className="card-text">{name.bathrooms} bathrooms</p>
        </div>
      </div>;
    })}

  </ul>

);

export default Listings;
