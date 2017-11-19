import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";
import Header from "./components/Header";

import Modal from "./components/Modal";

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h2>App</h2>
        <Header/>
        <hr/>

      <div className="content">
          <Route path="/" component={Home} />
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
