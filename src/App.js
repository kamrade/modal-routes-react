import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from "./components/pages/Dashboard";
import Cards from "./components/pages/Cards";
import Card from "./components/pages/Card";
import Orders from "./components/pages/Orders";
import LoadHistory from "./components/pages/LoadHistory";
import ManageProfile from "./components/pages/ManageProfile";

import Topics from "./components/Topics";
import Header from "./components/Header";

import Modal from "./components/Modal";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <hr/>

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
    );
  }
}

export default App;
