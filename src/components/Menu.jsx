import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faQuestion,
  faIndent,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export function Menu() {
  const [t, i18n] = useTranslation("global");


  const [hoverStates, setHoverStates] = useState({
    play: false,
    info: false,
    config: false,
    credit: false,
  });

  const handleMouseEnter = (button) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [button]: true,
    }));
  };

  const handleMouseLeave = (button) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [button]: false,
    }));
  };

  const playIcon = <FontAwesomeIcon icon={faPlay} size="xl"  color="white"/>;
  const infoIcon = <FontAwesomeIcon icon={faQuestion} size="xl" color="white" />;
  const creditIcon = <FontAwesomeIcon icon={faIndent} size="xl"  color="white"/>;

  return (
    <div className="cnt">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
          {t("buttons.title")}
        </h1>
      <div className="contenedor">
        
        <Link
          className="btn"
          onMouseEnter={() => handleMouseEnter("play")}
          onMouseLeave={() => handleMouseLeave("play")}
          to={"/game"}
        >
          {hoverStates.play ? (
            <span>{t("buttons.play-button")}</span>
          ) : (
            playIcon
          )}
        </Link>
        <Link
          className="btn" 
          onMouseEnter={() => handleMouseEnter("info")}
          onMouseLeave={() => handleMouseLeave("info")}
          to={"/info"}
        >
          {" "}
          {hoverStates.info ? (
            <span>{t("buttons.info-button")}</span>
          ) : (
            infoIcon
          )}
        </Link>
        <Link
          className="btn"
          onMouseEnter={() => handleMouseEnter("credit")}
          onMouseLeave={() => handleMouseLeave("credit")}
          to={"/credits"}
        >
          {hoverStates.credit ? (
            <span>{t("buttons.credits-button")}</span>
          ) : (
            creditIcon
          )}
        </Link>
        <div className="flex gap-4 justify-end mb-4">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="btn2"
          >
            En
          </button>
          <button
            onClick={() => i18n.changeLanguage("es")}
            className="btn2"
          >
            Es
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
