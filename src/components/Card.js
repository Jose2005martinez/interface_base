import React from 'react';
import './Card.css'; // Asegúrate de crear este archivo CSS

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
