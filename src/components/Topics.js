import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import Topic from './Topic';

class Topics extends Component {
  render() {
    return (
      <div className="Topics">
        <h4>Topics</h4>
        <ul>
          <li><Link to={`${this.props.match.url}/rendering`}>Rendering</Link></li>
          <li><Link to={`${this.props.match.url}/components`}>Components</Link></li>
        </ul>
        <hr/>
        <div className="subContent">
          <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
        </div>
      </div>
    )
  };
}

export default Topics;
