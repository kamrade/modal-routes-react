import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';

import { fetchAlerts, removeAlert, fetchCards, fetchLoads, showTooltip, hideTooltip } from './actions';

import Dashboard from "./components/pages/Dashboard";
import Cards from "./components/pages/Cards";
import Card from "./components/pages/Card";
import Orders from "./components/pages/Orders";
import LoadHistory from "./components/pages/LoadHistory";
import ManageProfile from "./components/pages/ManageProfile";

import Topics from "./components/Topics";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Tooltip from "./components/lib/Tooltip";

import Alert from "./components/lib/Alert";

class App extends Component {
  componentDidMount() {
    this.props.fetchAlerts();
    this.props.fetchCards();
    this.props.fetchLoads();

    let that = this;

    // tooltips
    document.addEventListener('mouseup', function() {
      let selection = window.getSelection();
      if (selection.anchorNode) {
        let range = selection.getRangeAt(0);
        let rect = range.getBoundingClientRect();
        let params = {
          message: selection.focusNode.data,
          bottom: rect.bottom,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          top: rect.top,
          width: rect.width,
          x: rect.x,
          y: rect.y
        };

        if (rect.width !== 0) {
          that.props.showTooltip(params);
        } else {
          that.props.hideTooltip();
        }

      } else {
        that.props.hideTooltip();
      }

    }, false);



  }
  render() {

    return (
      <div className="App">
        <Header/>
        {this.props.alerts.map((item, index) => {
          return (
            <Alert
              type={item.type}
              key={index}
              removeAlert={this.props.removeAlert}
              id={item._id}
              message={item.message}
            />
          )
        })}
        <div className="content">
          <Route exact path="/" render={props => <Redirect to="dashboard" />} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/cards/" component={Cards} />
          <Route path="/cards/:_id" component={Card} />
          <Route path="/orders" component={Orders} />
          <Route path="/load-history" component={LoadHistory} />
          <Route path="/manage-profile" component={ManageProfile} />
          <Route path="/topics" component={Topics} />
        </div>

        <Tooltip />


        <div className="modalContainer">
          <Route component={Modal} />
        </div>

      </div>
    )
  }
}

App.propTypes = {
  fetchAlerts: PropTypes.func.isRequired,
  removeAlert: PropTypes.func.isRequired,
  fetchCards:  PropTypes.func.isRequired,
  fetchLoads:  PropTypes.func.isRequired,
  showTooltip: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
};

export default withRouter( connect(mapStateToProps, {
  fetchAlerts,
  removeAlert,
  fetchCards,
  fetchLoads,
  showTooltip,
  hideTooltip
})(App));
