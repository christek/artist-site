import React, { Component } from 'react';
import logo from './logo.svg';
import './Menuitem.css';
import { Link } from "react-router-dom";

const Menuitem = (props) => (
  <div className="Menu-item"><Link to={props.url}>{props.text}</Link></div>
);

export default Menuitem;
