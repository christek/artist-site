import React from 'react';
import Property from './Property';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Properties = ({ match }) => (
  <div>   
    <Router>
      <div>
        <h2>Property Detail page</h2>
        <Route path="/properties/:id" component={Child} />
      </div>
    </Router>
  </div>
);

function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export default Properties;
