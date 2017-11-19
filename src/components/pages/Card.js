import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h4>Card {this.props.match.params._id}</h4>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  };
}

export default Card;
