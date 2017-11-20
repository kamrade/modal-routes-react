import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CpGrid extends Component {
  render() {
    const emptyMessage = (
      <p>There are nothing to show.</p>
    );
    const cardsList = (
      <p>Items List</p>
    );
    return (
      <div className="CpGrid">
        { this.props.items.length === 0 ? emptyMessage : cardsList }
      </div>
    )
  };
}

CpGrid.propTypes = {
  items: PropTypes.array.isRequired
};

export default CpGrid;
