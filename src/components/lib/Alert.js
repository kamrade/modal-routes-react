import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className="Alert">
        <p><small>{this.props.message}</small></p>
      </div>
    )
  };
}

export default Alert;
