import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CpGrid extends Component {

  render() {

    let data = this.props.data || [];
    let headers = this.props.headers || [];
    let title = this.props.title || '';

    const emptyMessage = (
      <p>There are nothing to show.</p>
    );

    const cardsList = (
      <p>Items List</p>
    );

    return (
      <div className="CpGrid">
        {/* { data.length === 0 ? emptyMessage : cardsList } */}
        <h3 className="grid-title">{title}</h3>

        <div className="table-wrapper">
          <table className="table table-hover">
            <thead>
              <tr className="table-header">
                {headers.map((item, index) => (<th scope="col" key={index}>{item}</th>))}
              </tr>
            </thead>
            <tbody>
              {data.map((dataItem, dataIndex) => {
                return (<tr key={dataIndex}>
                  {headers.map((head, headIndex) => {
                    return (
                      <td key={headIndex}>
                        {dataItem[head]}
                      </td>
                    );
                  })}
                </tr>)
              })}
            </tbody>
          </table>
        </div>

      </div>
    )

  };
}

CpGrid.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};

export default CpGrid;
