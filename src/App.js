import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
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
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
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
