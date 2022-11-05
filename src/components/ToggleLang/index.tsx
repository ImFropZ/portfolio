import classes from "./ToggleLang.module.css";
import { useTranslation } from "react-i18next";

function ToggleLang() {
  const { t, i18n } = useTranslation();
  const onClickHandler = () => {
    return i18n.language === "en"
      ? i18n.changeLanguage("kh")
      : i18n.changeLanguage("en");
  };

  return (
    <div className={classes.btn}>
      <img onClick={onClickHandler} src={t("flag")} alt="flag" />
    </div>
  );
}

export default ToggleLang;
