import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  render() {
    return <Redirect to="/dashboard" />
    // return (
    //   <div className="Home">
    //     <h4>Home</h4>
    //   </div>
    // )
  };
}

export default Home;
