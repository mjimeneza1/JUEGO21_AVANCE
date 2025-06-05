import '../prueba.css'
import React from 'react';

const Carta2 = ({ card }) => {
  return (
    <div className=" card">
      {/* <h3>{card.value} of {card.suit}</h3> */}
      <img src={card.image} alt={card.code} />
    </div>
  );
};

export default Carta2;