import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <ul className="navigation">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      <li><Link to="#modal">Empty Modal</Link></li>
      <li><Link to="#modal-dialog">Modal Dialog</Link></li>
      <li><Link to="#modal-options">Modal Options</Link></li>
    </ul>
  )
}

export default Header;
