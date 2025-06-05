// Tablero.js
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import Carta from '../hooks/carta'
import Carta2 from '../hooks/carta2'
import '../prueba.css'
import useValidarGanador from '../hooks/ganador';
import { WinnerModal } from "../components/modal"
import useBodyClass from "../hooks/useBackground"
import { useTranslation } from "react-i18next";
const Tablero = () => {
  useBodyClass("hola")
  const [t] = useTranslation("global");
  const [deckId, setDeckId] = useState(""); //INTERNA
  const [cartas, setCartas] = useState([]); //EXPORTADA
  const [cartas2, setCartas2] = useState([]); //EXPORTADA
  const [totalMaquina, setTotalMaquina] = useState(0); //INTERNA
  const [totalJugador, setTotalJugador] = useState(0); //INTERNA
  const [variable, setVariable] = useState(21); //INTERNA
  const resultado = useValidarGanador(totalMaquina, totalJugador, variable);

 console.log(setVariable)

  function obtenerValorCarta(card) {
    const valor = card.value;
    if (valor === "KING" || valor === "QUEEN" || valor === "JACK") {
      return 10;
    } else if (valor === "ACE") {
      return 1;
    } else {
      return parseInt(valor);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    async function obtenerCartasIniciales() {
      try {
        const response = await fetch(
          "https://www.deckofcardsapi.com/api/deck/new/draw/?count=4"
        );
        const data = await response.json();
        setDeckId(data.deck_id);
        setCartas(data.cards.slice(0, 2));
        setCartas2(data.cards.slice(2, 4));
        setTotalJugador(calcularValorMano(data.cards.slice(0, 2)));
        setTotalMaquina(calcularValorMano(data.cards.slice(2, 4)))
      } catch (error) {
        console.error("Error al obtener las cartas:", error);
      }
    }
    obtenerCartasIniciales();
  }, [ ]);
  ////////////////////////////////////////////////////////////////////////////
  const calcularValorMano = (mano) => {
    return mano.reduce((total, carta) => total + obtenerValorCarta(carta), 0);
  };


  ////////////////////////////////////////////////////////////////////////////
  const agregarCarta = async () => {
    try {
      const response = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );
      const data = await response.json();
      setCartas([...cartas, data.cards[0]]);
      setTotalJugador(calcularValorMano([...cartas, data.cards[0]]));
      if (totalMaquina<16){
        agregarCarta2();}

    } catch (error) {
      console.error("Error al obtener una nueva carta:", error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////
  const agregarCarta2 = async () => {
    try {
      const response = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );
      const data = await response.json();
      setCartas2([...cartas2, data.cards[0]]);
      setTotalMaquina(calcularValorMano([...cartas2, data.cards[0]]));
    } catch (error) {
      console.error("Error al obtener una nueva carta:", error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////
  const reiniciarPartida = async () => {
    try {
      const response = await fetch(
        "https://www.deckofcardsapi.com/api/deck/new/draw/?count=4"
      );
      const data = await response.json();
      setDeckId(data.deck_id);
      setCartas(data.cards.slice(0, 2));
      setCartas2(data.cards.slice(2, 4));
      setTotalJugador(calcularValorMano(data.cards.slice(0, 2)));
      setTotalMaquina(calcularValorMano(data.cards.slice(2, 4)));
    } catch (error) {
      console.error("Error al obtener las cartas:", error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////
  const resetGame = () => {
    
    setCartas([]); //EXPORTADA
    setCartas2([]); //EXPORTADA
    setTotalMaquina(0); //INTERNA
    setTotalJugador(0); //INTERNA
    reiniciarPartida();

  }
////////////////////////////////////////////////////////////////////////////
  return (
    <div >
      <div className="jk">
        <p className="p">{t("game.pc-score")}{totalMaquina}</p>
        <div className="jka2">
          {cartas2.map((carta, index) => (
            <Carta key={index} card={carta} />
          ))}
        </div>
        <div className="jka">
          {cartas.map((carta, index) => (
            <Carta2 key={index} card={carta} />
          ))}
        </div>
        <p className="p1">{t("game.player-score")}{totalJugador}</p>
      </div>
      <di className="footer">
        <div className=" container ">
          <button className=" btn-success" onClick={agregarCarta}>
            {t("game.pick-up-button")}
          </button>
          <Link className=" btn-success"  to= {"/"}>{t("game.go-to-menu")}</Link>
          <button className=" btn-success" onClick={agregarCarta2}>
           {t("game.pass-turn")}{" "}
          </button>
        </div>
      </di> 
      <WinnerModal resetGame={resetGame} winner={resultado} puntosJ={totalJugador} puntosM={totalMaquina}/>
    </div>
  );
};

export default Tablero;

