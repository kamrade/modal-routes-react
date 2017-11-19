import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">

      <ul className="nav nav-main">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <ul className="nav nav-auxiliary">
        <li><Link to="#modal">Empty Modal</Link></li>
        <li><Link to="#modal-dialog">Modal Dialog</Link></li>
        <li><Link to="#modal-options">Modal Options</Link></li>
      </ul>

    </div>
  )
}

export default Header;
