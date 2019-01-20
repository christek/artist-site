import React from 'react';
import './Listing.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

const cardStyle = {
  width: '31%',
  float: 'left',
  margin: '0 7px 7px 0'
};

const imgStyle = {
  height: '200px',
  objectFit: 'cover',
};

// https://codepen.io/PiotrBerebecki/pen/pEYPbY

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.data,
      currentPage: 1,
      todosPerPage: 2
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map(function (name, index) {
      const fullImg = '/img/' + name.img;
      return <div className="card" key={index} style={cardStyle}>
        <Link to={`/properties/${name.id}`}>go to this</Link>
        <div key={index}><img className="card-img-top" style={imgStyle} src={fullImg} alt='property' /></div>
        <div className="card-body">
          <h5 className="card-title">${name.price}</h5>
          <p className="card-text">{name.address}</p>
          <p className="card-text">{name.bedrooms} bedrooms</p>
          <p className="card-text">{name.bathrooms} bathrooms</p>
        </div>
      </div>
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>
      {renderTodos}
        </ul>
        <ul class="page-numbers">
         {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Listings;
