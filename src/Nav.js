import React from 'react';
import './Menuitem.css';
import Menuitem from './Menuitem';

const Nav = (props) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">YourHomes</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
  <li class="nav-item">
  <Menuitem text="Home" url="/" />
  </li>
  <li class="nav-item">
  <Menuitem text="Buy" url="/buy/" />
  </li>
  <li class="nav-item">
  <Menuitem text="Rent" url="/rent/" />
  </li>
</ul>
</div>

      </nav>
);

export default Nav;
