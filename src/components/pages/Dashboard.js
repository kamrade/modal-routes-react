import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import CpGrid from 'components/lib/CpGrid';
import Indicator from 'components/lib/Indicator';

class Dashboard extends Component {

  newSingleCardRoute() {
    console.log(this);
    // this.props.history.push(`${this.props.location.pathname}#modal-order`);
  }

  render() {

    // should be in redux store?
    // should be fetched from a server?
    let cardHeaders = [
      'cardID',
      'cardNumber',
      'status',
      'curr',
      'expDate',
      'firstName',
      'email',
      'phone'
    ];

    let loadHeaders = [
      'loadID',
      'cardNumber',
      'amount',
      'curr',
      'description',
      'status'
    ]

    return (
      <div className="Dashboard">
        <div className="mb-3">
          <div className="row">
            <div className="col-lg-3">
              <Indicator
                title={`Ballance, EUR`}
                value={`844,420`}
              ></Indicator>
            </div>
            <div className="col-lg-3">
              <Indicator
                title={`Cards Ordered`}
                value={`4,128`}
                path={`/dashboard#modal-order`}
              ></Indicator>
            </div>
            <div className="col-lg-3">
              <Indicator
                title={`Multiorders`}
                value={`27`}
                path={`/dashboard#modal-multiorder`}
              ></Indicator>
            </div>
            <div className="col-lg-3">
              <Indicator
                title={`Summary Loaded`}
                value={`1,855,991`}
                path={`/dashboard#modal-massload`}
              ></Indicator>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <CpGrid
            data={this.props.cards}
            headers={cardHeaders}
            history={this.props.history}
            title="Last 10 card orders"
          />
        </div>
        <div className="">
          <CpGrid
            data={this.props.loads}
            headers={loadHeaders}
            history={this.props.history}
            title="Last 10 card loads"
          />
        </div>
      </div>
    )
  };
}

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired,
  loads: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
    loads: state.loads
  };
};

export default withRouter( connect(mapStateToProps, {  })(Dashboard) );
