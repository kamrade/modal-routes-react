import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CpGrid from 'components/lib/CpGrid';

class LoadHistory extends Component {
  render() {
    let loadHeaders = []
    if(this.props.loads[0]) {
      loadHeaders = Object.keys(this.props.loads[0]);
    } else {
      loadHeaders = [];
    }

    return (
      <div className="LoadHistory">
        <CpGrid
          data={this.props.loads}
          headers={loadHeaders}
          title="Load History"
          history={this.props.history}
        />
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    loads: state.loads
  };
};

export default withRouter(connect(mapStateToProps, {})(LoadHistory));
