import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de crear este archivo CSS

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/users">Usuarios</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
};

export default Navbar;