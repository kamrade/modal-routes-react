import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tooltip extends Component {

  render() {
    if(this.props.tooltip.show && this.props.tooltip.message) {
      return (
        <div
          style={{
            top:(this.props.tooltip.top - 40) + 'px',
            left:(this.props.tooltip.left + this.props.tooltip.width/2) + 'px'
          }}
          className="Tooltip">
          {this.props.tooltip.message}
        </div>
      )
    } else {
      return null;
    }
  };
}

function mapStateToProps(state) {
  return {
    tooltip: state.tooltip
  };
};

export default connect(mapStateToProps)(Tooltip);
