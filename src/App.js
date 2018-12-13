import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Buy from './Buy';
import Rent from './Rent';
import Home from './Home';
import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Nav />

      <Route path="/" exact component={Home} />
      <Route path="/buy/" component={Buy} />
      <Route path="/rent/" component={Rent} />

    </div>
      </Router>
    );
  }
}

export default App;
