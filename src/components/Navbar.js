import React, { useState } from 'react';
import './ShowTitle.css'; // Crea este archivo CSS si deseas estilos personalizados

const ShowTitle = () => {
  // Estado para controlar si el segundo título debe mostrarse
  const [showSecondTitle, setShowSecondTitle] = useState(false);

  // Función para cambiar el estado al hacer clic en el botón
  const handleButtonClick = () => {
    setShowSecondTitle(true);
  };

  return (
    <div className="show-title-container">
      <h1>Título Inicial</h1>
      <button onClick={handleButtonClick}>Mostrar otro título</button>
      {showSecondTitle && <h2>Este es el segundo título</h2>}
    </div>
  );
};

export default ShowTitle;
