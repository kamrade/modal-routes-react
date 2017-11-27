import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './lib/Dropdown';
import LogoContainer from './lib/LogoContainer';

function Header(props) {

  let dropdownItems = {
    showDropdown: false,
    items: [{
      id: 1,
      path: '#modal-order',
      title: 'Single Card'
    }, {
      id: 2,
      path: '#modal-multiorder',
      title: 'Multiorder'
    }, {
      id: 3,
      path: '#modal-massload',
      title: 'Mass Load'
    }, {
      id: 4,
      path: '#modal',
      title: 'Empty Modal'
    }]
  };

  return (
    <div className="Header">

      {/* <div className="logo-container">
        <img src="./assets/logo.png" alt="" className="logo-image"/>
      </div> */}
      <LogoContainer></LogoContainer>

      <div className="header--block nav-wrapper">
        <ul className="nav nav-main">
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/cards">Cards</NavLink></li>
          <li><NavLink to="/orders">Orders</NavLink></li>
          <li><NavLink to="/load-history">Load History</NavLink></li>
          <li><NavLink to="/manage-profile">Manage Profile</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
        </ul>
      </div>

      <div className="header--block">
        <Dropdown
          items={dropdownItems}
        ></Dropdown>
      </div>
      <div className="header--block">
        <p className="p-2"><i className="fa fa-user pr-2" aria-hidden="true"></i>Dennis Roadman</p>
      </div>

    </div>
  )
}

export default Header;
