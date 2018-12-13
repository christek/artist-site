import React from 'react';
import './Menuitem.css';
import Menuitem from './Menuitem';

const Nav = (props) => (
      <nav>
        <ul>
          <li>
            <Menuitem text="Home" url="/" />
          </li>
          <li>
            <Menuitem text="Buy" url="/buy/" />
          </li>
          <li>
            <Menuitem text="Rent" url="/rent/" />
          </li>
        </ul>
      </nav>
);

export default Nav;
