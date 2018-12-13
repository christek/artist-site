import React from 'react';

import styles from './Listing.module.css'; // Import css modules stylesheet as styles


const Listings = (props) => (
  <ul>
    {props.data.map(function (name, index) {
      const fullImg = '/img/' + name.img;
      return <div className={styles.box}>
            <div key={index}><img className={styles.thumb} src={fullImg} /></div>
            <div key={index}>${name.price}</div>
            <div key={index}>{name.address}</div>
            <div key={index}>{name.bedrooms} bedrooms</div>
            <div key={index}>{name.bathrooms} bathrooms</div>
        </div>;
    })}
    
  </ul>
  
);

export default Listings;
