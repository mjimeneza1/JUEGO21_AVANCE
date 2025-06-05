import '../prueba.css'
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useTranslation } from "react-i18next";
export function WinnerModal ({ winner,puntosJ,puntosM, resetGame }) {
    const [totalPartidasJ, setTotalPartidasJ] = useState(0); //INTERNA
    const [totalPartidasM, setTotalPartidasM] = useState(0); //INTERNA
    const [t] = useTranslation("global");
    useEffect(() => {
        if (winner === 'jugador') {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
          });
          setTotalPartidasJ(totalPartidasJ + 1);
        } else if (winner === 'maquina') {
          setTotalPartidasM(totalPartidasM + 1);
        }
      }, [winner]);
    
    if (winner === null) return null
    const loseMessage =t("modal.lose-msg")
    const winMessage = t("modal.win-msg");
    const winnerText = winner === 'maquina' ? loseMessage : winner === 'jugador' ? winMessage : t("modal.tie-msg");
    const holii= winner === 'jugador' ? "😁" : "😔"

  
    return (
      <section className='winner'>
        <div className='text'>
          <h2 className=' pt-4 font-bold parrafo'>{winnerText}</h2>
          <h3>{holii}</h3>
          <header className='win'>
            <p className= "parrafo"><samp>{t("modal.player-points")}</samp>{totalPartidasJ} </p>
            <p className= "parrafo"><samp>{t("game.player-score")}</samp>{puntosJ} </p>
            <p className= "parrafo"><samp>{t("modal.pc-points")}</samp>{totalPartidasM}</p>
            <p className= "parrafo"><samp>{t("game.pc-score")}</samp>{puntosM} </p>
          </header>
  
          <footer className=" board" >
            <button  onClick={resetGame}>{t("modal.restart")}</button>
          </footer>
        </div>
      </section>
    )
  }