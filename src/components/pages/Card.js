import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2 className="page-title">Card {this.props.match.params._id}</h2>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  };
}

export default Card;
