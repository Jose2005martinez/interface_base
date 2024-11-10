import React, { useState } from 'react';
import '../styles/ShowTitle.css';

const ShowTitle = () => {
  const [showSecondTitle, setShowSecondTitle] = useState(false);

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