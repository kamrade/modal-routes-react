import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CpGrid from 'components/lib/CpGrid';


class Orders extends Component {
  render() {
    let orderHeaders = []
    if(this.props.orders[0]) {
      orderHeaders = Object.keys(this.props.orders[0]);
    } else {
      orderHeaders = [];
    }
    return (
      <div className="Orders">
        <CpGrid
          data={this.props.orders}
          headers={orderHeaders}
          title="Total Multiorders"
          history={this.props.history}
        />
      </div>    )
  };
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
};

export default withRouter(connect(mapStateToProps, {})(Orders));
