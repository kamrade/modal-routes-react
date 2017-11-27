import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Indicator extends Component {
  render() {

    return (
      <div className={`Indicator mb-3`} >
        <p className="Indicator--title">{this.props.title}</p>
        <p className="Indicator--value">{this.props.value}</p>

        {!!this.props.path === true &&
          <div className="Indicator--control">
            <Link to={this.props.path ? this.props.path : '/'} className="btn btn-link btn-dds">+</Link>
          </div>
        }
        
      </div>
    )
  };
}

export default Indicator;
