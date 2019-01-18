import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

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

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3004/posts/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const fullImg = '/img/' + this.state.item.img;
      return (
        <div className="row">   
        <div className="col-sm">
          <p>${this.state.item.price}</p>
          <p>${this.state.item.address}</p>
          <p>${this.state.item.bedrooms}</p>
          <p>${this.state.item.bathrooms}</p>
        </div>
        <div className="col-sm">
          <img src={fullImg} />
        </div>
    </div>
      );
    }
  }
}


export default Properties;
