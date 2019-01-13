import React from 'react';
import './Menuitem.css';
import Menuitem from './Menuitem';

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">YourHomes</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Menuitem text="Home" url="/" />
        </li>
        <li className="nav-item">
          <Menuitem text="Buy" url="/buy/" />
        </li>
        <li className="nav-item">
          <Menuitem text="Rent" url="/rent/" />
        </li>
      </ul>
    </div>

  </nav>
);

export default Nav;
