import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './lib/Dropdown';

function Header(props) {
  return (
    <div className="Header">

      <div className="logo-container">
        <img src="./assets/logo.png" alt="" className="logo-image"/>
      </div>

      <ul className="nav nav-main">
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/cards">Cards</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        <li><NavLink to="/load-history">Load History</NavLink></li>
        <li><NavLink to="/manage-profile">Manage Profile</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
      </ul>

      <div className="header-item-container">
        <Dropdown></Dropdown>
      </div>
      <div className="header-item-container">
        <p>Username</p>
      </div>

      {/* <ul className="nav nav-auxiliary">
        <li><Link to="#modal">Empty Modal</Link></li>
        <li><Link to="#modal-order">Order</Link></li>
        <li><Link to="#modal-multiorder">Multiorder</Link></li>
        <li><Link to="#modal-massload">Mass Load</Link></li>
      </ul> */}

    </div>
  )
}

export default Header;
