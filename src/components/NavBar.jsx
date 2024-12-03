import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
