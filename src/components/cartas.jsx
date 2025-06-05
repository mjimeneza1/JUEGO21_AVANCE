import { useTranslation } from "react-i18next";
function header() {
  const [t] = useTranslation("global");
  return (
   <div>
     <div className="title">
      <div>
        <h1 className="font-extrabold text-red-500 text-6xl md: w-auto mx-auto">
          {" "}
          {t("game.title")} {""}
          <span className="text-indigo-700  tablet:text-center ">
            {t("game.number")}
          </span>
        </h1>
      </div>
    </div>
   </div>
  );
}

export default header;
