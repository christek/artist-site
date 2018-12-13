import React from 'react';
import './Menuitem.css';
import { Link } from "react-router-dom";

const Menuitem = (props) => (
  <Link to={props.url}>{props.text}</Link>
);

export default Menuitem;
