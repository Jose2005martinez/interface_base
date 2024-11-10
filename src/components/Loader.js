import React from 'react';
import './OrderedList.css'; // Crea este archivo si deseas estilos personalizados

const OrderedList = () => {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  return (
    <div className="ordered-list">
      <h2>Lista Ordenada</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default OrderedList;
