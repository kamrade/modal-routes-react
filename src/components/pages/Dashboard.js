import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';

import CpGrid from '../lib/CpGrid';
import { fetchCards } from '../../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }
  render() {
    return (
      <div className="Dashboard">
        <h4>Dashboard</h4>
        <CpGrid cards={this.props.cards} />
      </div>
    )
  };
}

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired,
  fetchCards: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    cards: state.cards
  };
};

export default withRouter( connect(mapStateToProps, { fetchCards })(Dashboard) );
