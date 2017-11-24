import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Dropdown extends Component {

  constructor(props) {
    super(props);

    this.state = this.props.items;

  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick.bind(this), false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick.bind(this), false)
  }

  handleClick(e) {
    if (this.ddNode.contains(e.target)) {
      return;
    }
    this.closeDropdown();
  }

  toggleDropdown() {
    this.setState((prevState, props) => {
      return { showDropdown: !prevState.showDropdown }
    });
  }

  closeDropdown() {
    this.setState({
      showDropdown: false
    })
  }

  render() {
    const classes = classNames({
      'dds-items-container': true,
      'show': this.state.showDropdown
    });

    return (
      <div ref={node => this.ddNode = node} className="DropdownSmooth">
        <button onClick={ this.toggleDropdown.bind(this) } className="btn btn-link btn-dds">+</button>

        <div ref={node => this.ddCont = node} className={classes}>
          <ul className="dds--items-list">
            {this.state.items.map(item => (
              <li key={item.id} className="dds--item">
                <Link className="dds--item-link" to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  };
}

export default Dropdown;
