import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cards extends Component {
  render() {
    return (
      <div className="Cards">
        <h4>Cards</h4>
        <Link to="/cards/11">Card 1</Link><br />
        <Link to="/cards/11">Card 2</Link><br />
        <Link to="/cards/11">Card 3</Link><br />
        <Link to="/cards/11">Card 4</Link><br />
        <Link to="/cards/11">Card 5</Link><br />
      </div>
    )
  };
}

export default Cards;
