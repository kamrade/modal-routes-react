import React, { Component } from 'react';

class Topic extends Component {
  render() {
    return (
      <div className="Topic">
        <h4>Topic: { this.props.match.params.topicId }</h4>
      </div>
    )
  };
}

export default Topic;
