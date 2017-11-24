import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setModal } from '../actions';

class Modal extends Component {

  goBack() {
    this.props.setModal(false);
    this.props.history.push(this.props.location.pathname);
  }

  render() {
    let hash = this.props.location.hash;
    let modal = hash.indexOf("#modal") > -1;
    let modalRoute = hash.substring(7, hash.length);

    if (modal) {
      this.props.setModal(true);
      return (
        <div className="Modal">

          <h4 className="text-muted">Modal</h4>

          { modalRoute === "order" ? (<h2>Order</h2>) : '' }
          { modalRoute === "multiorder" ? (<h2>Multiorder</h2>) : '' }
          { modalRoute === "massload" ? (<h2>Mass Load</h2>) : '' }

          <button onClick={this.goBack.bind(this)}>Close</button>
        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    modal: state.ui.modal
  };
};

export default withRouter( connect(mapStateToProps, { setModal })(Modal) );
