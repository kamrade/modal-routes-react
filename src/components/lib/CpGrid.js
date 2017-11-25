import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CpGrid extends Component {

  renderCell(head, index, dataItem) {
    switch(head) {

      case 'description':
        return (
          <td key={index} >
            <span
              data-tooltip="true"
              className={`table-cell ${head}`}
            >{dataItem[head]}</span>
          </td>
        );

      case 'firstName':
        return (
          <td key={index}>
            <span className={`table-cell ${head} + text-muted`}>
              {dataItem[head]}
            </span>
          </td>
        );

      case 'curr':
        return (
          <td key={index}>
            <span className={`table-cell ${head} + big-value`}>
              {dataItem[head]}
              <i
                onClick={(e) => { e.stopPropagation(); console.log('dots')}}
                className="fa fa-ellipsis-v text-lighten ml-2 btn-cell-context-menu"
                aria-hidden="true">
              </i>
            </span>
          </td>
        );

      case 'status':
        let classColor = '';
        let classIcon  = 'fa pr-1 ';

        if (dataItem[head].toLowerCase() === 'active') {
          classColor += 'text-success';
          classIcon  += 'fa-check-circle';
        } else if (dataItem[head].toLowerCase() === 'loaded') {
          classColor += 'text-success';
          classIcon  += 'fa-check-circle';
        } else if (dataItem[head].toLowerCase() === 'issuing') {
          classColor += 'text-muted';
          classIcon  += 'fa-circle-o';
        } else if (dataItem[head].toLowerCase() === 'failed') {
          classColor += 'text-danger';
          classIcon  += 'fa-ban';
        }

        return (
          <td key={index}>
            <span className={`table-cell ${head} ${classColor}`}>
              <i className={classIcon} aria-hidden="true"></i>
              {dataItem[head]}
            </span>
          </td>
        );

      default:
        return (
          <td key={index}>
            <span className={`table-cell ${head}`}>
              {dataItem[head]}
            </span>
          </td>
        );
    }
  }

  rowClickHandler(e, s) {
    console.log('row click', s);
    this.props.history.push(`/cards/${s.cardID}`);
  }

  cellContextClickhandler() {

  }

  render() {

    let data = this.props.data.slice(0, 9) || [];
    let headers = this.props.headers || [];
    let title = this.props.title || '';
    let that = this;

    /*
      Из этих переменных лучше сформировать локальный state
    */

    return (
      <div className="CpGrid">
        <h3 className="grid-title">{title}</h3>

        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr className="table-header">

                <th scope="col">
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                </th>

                {headers.map((item, index) => (<th scope="col" key={index}>
                  <i className="fa fa-sort pr-1" aria-hidden="true"></i>{item}
                </th>))}

                <th scope="col">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </th>

              </tr>
            </thead>
            <tbody>
              {data.map((dataItem, dataIndex) => {
                return (
                    <tr key={dataIndex} onClick={ (e) => { this.rowClickHandler.call(this, e, dataItem)} }>
                      <td className="checker">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                      </td>

                      {headers.map((head, headIndex) => {
                        return that.renderCell(head, headIndex, dataItem);
                      })}

                      <td className="menu">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                      </td>
                    </tr>

                )
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
