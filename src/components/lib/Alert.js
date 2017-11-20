import React, { Component } from 'react';

class Alert extends Component {
  render() {
    return (
      <div className="component Alert">
        <p><small>{this.props.message}</small></p>
        <i
          className="fa fa-times cp-close"
          onClick={this.props.removeAlert.bind(this, this.props.id)}
          aria-hidden="true">
        </i>
      </div>
    )
  };
}

export default Alert;
