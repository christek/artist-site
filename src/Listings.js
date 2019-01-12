import React from 'react';

const cardStyle = {
  width: '32%',
  float: 'left',
  margin: '0 7px 7px 0'
};

const imgStyle = {
  height: '200px',
  objectFit: 'cover',
};

const Listings = (props) => (
  <ul>
    {props.data.map(function (name, index) {
      const fullImg = '/img/' + name.img;
      return <div className="card" key={index} style={cardStyle}>
        <div key={index}><img className="card-img-top" style={imgStyle} src={fullImg} alt='property' /></div>
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
