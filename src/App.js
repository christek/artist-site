import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Menuitem from './Menuitem';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Menuitem text="Users" url="/" />
          </li>
          <li>
            <Menuitem text="About" url="/about/" />
          </li>
          <li>
            <Menuitem text="Users" url="/users/" />
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
      </Router>
    );
  }
}

export default App;
