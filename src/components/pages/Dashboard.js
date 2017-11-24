import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import CpGrid from 'components/lib/CpGrid';

class Dashboard extends Component {

  render() {
    let cardHeaders = [
      'cardID',
      'cardNumber',
      'status',
      'curr',
      'expDate',
      'firstName',
      'email',
      'phone'
    ];

    let loadHeaders = [
      'loadID',
      'cardNumber',
      'amount',
      'curr',
      'description',
      'status'
    ]

    return (
      <div className="Dashboard">
        <div className="card mb-3">
          <CpGrid data={this.props.cards} headers={cardHeaders} title="Last 10 card orders"/>
        </div>
        <div className="card">
          <CpGrid data={this.props.loads} headers={loadHeaders} title="Last 10 card loads"/>
        </div>
      </div>
    )
  };
}

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired,
  loads: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
    loads: state.loads
  };
};

export default withRouter( connect(mapStateToProps, {  })(Dashboard) );
