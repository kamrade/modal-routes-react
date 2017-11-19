import React, { Component } from 'react';

class Modal extends Component {

  render() {
    console.log(this.props.location.pathname);
    // let modal = this.props.location.hash === "#modal";
    let hash = this.props.location.hash;
    let modal = hash.indexOf("#modal") > -1;
    let modalRoute = hash.substring(7, hash.length);

    let dialog = () => (<h4>Dialog</h4>);

    if (modal) {
      return (
        <div className="Modal">
          <h4>Modal</h4>
          { modalRoute === "dialog" ? (<h4>Dialog</h4>) : '' }
          { modalRoute === "options" ? (<h4>Options</h4>) : '' }
          <button onClick={() => this.props.history.push(this.props.location.pathname)}>Close</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Modal;
