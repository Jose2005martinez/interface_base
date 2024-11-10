import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/CardList';
import '../styles/Main.css';

const Main = () => {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  return (
    <div className="main-container">
      <h1>Main Page</h1>
      <Link to="/users">Ver Usuarios</Link>
      <CardList items={items} />
    </div>
  );
};

export default Main;