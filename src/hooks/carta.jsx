import '../prueba.css'
import React from 'react';

const Carta = ({ card }) => {
  return (
    <div className=" card">
      {/* <h3>{card.value} </h3> */}
      <img src={card.image} alt={card.code} />
    </div>
  );
};

export default Carta;