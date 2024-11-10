import React from 'react';
import './CardList.css'; // Asegúrate de crear este archivo CSS para los estilos

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      <h2>Lista de elementos</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
