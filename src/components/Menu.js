import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
export default Menu;