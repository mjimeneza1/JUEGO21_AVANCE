import { useState, useEffect } from 'react';

const useValidarGanador = (totalMaquina, totalJugador, variable) => {
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    if (totalMaquina<16 || totalJugador<12){
      setResultado(null);
    }else if (totalJugador > variable && totalMaquina > variable) {
        setResultado('empate');
    }else if (totalMaquina === variable) {
        setResultado('maquina');
    } else if (totalMaquina > variable) {
        setResultado('jugador');
    } else if (totalJugador === variable) {
        setResultado('jugador');
    } else if (totalJugador > variable) {
        setResultado('maquina');
    } else {
      setResultado(null);
    }
  }, [totalMaquina, totalJugador, variable]);

  return resultado;
};

export default useValidarGanador;
