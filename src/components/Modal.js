import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {

  prevLoc = this.props.location;
  componentWillUpdate() {
    console.log("prev location:", this.prevLoc.pathname);
  }

  render() {

    console.log(this.props.location.pathname);
    let modal = this.props.location.hash === "#modal";

    if (modal) {
      return (
        <div className="Modal">
          <h4>Modal</h4>
          <button onClick={() => this.props.history.push(this.props.location.pathname)}>Close</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Modal;
