import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';

import CpGrid from '../lib/CpGrid';
import { fetchCards, fetchLoads, fetchAlerts } from '../../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCards();
    this.props.fetchLoads();
    this.props.fetchAlerts();
  }
  render() {
    return (
      <div className="Dashboard">
        <h4>Dashboard</h4>
        <div className="card">
          <CpGrid items={this.props.cards} />
        </div>
        <div className="card">
          <CpGrid items={this.props.cards} />
        </div>
      </div>
    )
  };
}

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired,
  fetchCards: PropTypes.func.isRequired,
  fetchLoads: PropTypes.func.isRequired,
  fetchAlerts: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
    loads: state.loads,
    alerts: state.alerts
  };
};

export default withRouter( connect(mapStateToProps, { fetchCards, fetchLoads, fetchAlerts })(Dashboard) );
