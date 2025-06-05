import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useBodyClass from "../hooks/useBackground"
export const Credits = () => {
    const [t,i18n] = useTranslation("global")
    useBodyClass("infoC")
  return (
    <div  className="flex-col gap-5">
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
        <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-white p-6">{t("credits.title")}</h1>
        <ul>
            <li className="text-white text-lg leading-relaxed">Alex Enrique Astudillo Rodriguez</li>
            <li className="text-white text-lg leading-relaxed">Jeankevin Andrés Chevasco Vera</li>
            <li className="text-white text-lg leading-relaxed">Eicker Alejandro Villamar Romero</li>
            <li className="text-white text-lg leading-relaxed">Anadia Davinia Olvera Barzola</li>
            <li className="text-white text-lg leading-relaxed">Luis David Carranza Flores</li>
        </ul>
        <br></br>
        <Link
          to={"/"}
          className="btn"
        >
          {t("info.back-button")}
        </Link>
    </div>
  )
}
