import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useBodyClass from "../hooks/useBackground"
const InfoPage = () => {
  useBodyClass("infoC")
  const [t, i18n] = useTranslation("global");
  return (
    <section className="flex-col gap-5">
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
      <div className="flex-col gap-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white p-6">
          {t("info.title")}
        </h1>
        <p className="text-white text-lg leading-relaxed">
          {t("info.rule1")} <br></br>
          {t("info.rule2")}
          <br></br>
          {t("info.rule3")}
          <br></br>
          {t("info.text")}
        </p>
        <br></br>
        <Link
          to={"/"}
          className="btn"
        >
          {t("info.back-button")}
        </Link>
      </div>
    </section>
  );
};

export default InfoPage;
