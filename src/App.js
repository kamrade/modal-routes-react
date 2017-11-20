import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';

import { fetchAlerts } from './actions';

import Dashboard from "./components/pages/Dashboard";
import Cards from "./components/pages/Cards";
import Card from "./components/pages/Card";
import Orders from "./components/pages/Orders";
import LoadHistory from "./components/pages/LoadHistory";
import ManageProfile from "./components/pages/ManageProfile";

import Topics from "./components/Topics";
import Header from "./components/Header";
import Modal from "./components/Modal";

import Alert from "./components/lib/Alert";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        {this.props.alerts.map((item, index) => <Alert key={item._id} message={item.message} />)}
        <div className="content">
          <Route exact path="/" render={props => <Redirect to="dashboard" />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/cards/" component={Cards} />
          <Route path="/cards/:_id" component={Card} />
          <Route path="/orders" component={Orders} />
          <Route path="/load-history" component={LoadHistory} />
          <Route path="/manage-profile" component={ManageProfile} />
          <Route path="/topics" component={Topics} />
        </div>

        <div className="modalContainer">
          <Route component={Modal} />
        </div>

      </div>
    )
  }
}

App.propTypes = {
  fetchAlerts: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
};


export default withRouter( connect(mapStateToProps, { fetchAlerts })(App));
// export default withRouter( connect(mapStateToProps, { fetchAlerts })(Dashboard) );
