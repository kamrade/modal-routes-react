import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";

import Modal from "./components/Modal";

import './App.css';

class App extends Component {

  componentDidUpdate(prevProps) {
    // console.log(this.props.location);
  }

  render() {

    return (
      <div className="App">
        <h2>App</h2>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="#modal">Show Modal</Link></li>
        </ul>
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
