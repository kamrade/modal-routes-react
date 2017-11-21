import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';

import CpGrid from 'components/lib/CpGrid';
import { fetchCards, fetchLoads } from 'actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCards();
    this.props.fetchLoads();
  }
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
        <h2>Dashboard</h2>
        <div className="card">
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
  fetchCards: PropTypes.func.isRequired,
  fetchLoads: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
    loads: state.loads
  };
};

export default withRouter( connect(mapStateToProps, { fetchCards, fetchLoads })(Dashboard) );
