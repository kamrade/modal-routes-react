import React, { Component } from 'react';

class Modal extends Component {

  render() {
    console.log(this.props.location.pathname);
    // let modal = this.props.location.hash === "#modal";
    let hash = this.props.location.hash;
    let modal = hash.indexOf("#modal") > -1;
    let modalRoute = hash.substring(7, hash.length);

    if (modal) {
      return (
        <div className="Modal">

          <h4 className="text-muted">Modal</h4>

          { modalRoute === "order" ? (<h2>Order</h2>) : '' }
          { modalRoute === "multiorder" ? (<h2>Multiorder</h2>) : '' }
          { modalRoute === "massload" ? (<h2>Mass Load</h2>) : '' }

          <button onClick={() => this.props.history.push(this.props.location.pathname)}>Close</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Modal;
