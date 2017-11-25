import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CpGrid from 'components/lib/CpGrid';

class Cards extends Component {
  render() {

    let cardHeaders = []
    if(this.props.cards[0]) {
      cardHeaders = Object.keys(this.props.cards[0]);
    } else {
      cardHeaders = [];
    }

    return (
      <div className="Cards">
        <CpGrid
          data={this.props.cards}
          headers={cardHeaders}
          title="Last 10 card orders"
          history={this.props.history}
        />
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
};


export default withRouter( connect(mapStateToProps, {})(Cards) );
