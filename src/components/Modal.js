import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setModal } from '../actions';
import SingleOrder from './modals/SingleOrder';
import MultiOrder from './modals/MultiOrder';
import MassLoad from './modals/MassLoad';
import LogoContainer from './lib/LogoContainer';

class Modal extends Component {

  goBack() {
    this.props.setModal(false);
    this.props.history.push(this.props.location.pathname);
  }

  /*
    Тут по хорошему нужно в стейт перенести все переменные
  */
  componentDidUpdate() {
    let hash = this.props.location.hash;
    let modal = hash.indexOf("#modal") > -1;
    if (modal) this.props.setModal(true);
  }

  render() {
    let hash = this.props.location.hash;
    let modal = hash.indexOf("#modal") > -1;
    let modalRoute = hash.substring(7, hash.length);

    if (modal) {
      // this.props.setModal(true);
      return (
        <div className="Modal">
          <LogoContainer></LogoContainer>
          <div className="container mt-5">
            {/* <h4 className="text-muted">Modal</h4> */}
            { modalRoute === "order" ? (<SingleOrder></SingleOrder>) : '' }
            { modalRoute === "multiorder" ? (<MultiOrder></MultiOrder>) : '' }
            { modalRoute === "massload" ? (<MassLoad></MassLoad>) : '' }
            <button className="btn btn-primary" onClick={this.goBack.bind(this)}>Close</button>
          </div>
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
