import { useTranslation } from "react-i18next";
import classes from "./Education.module.css";

function Education() {
  const { t } = useTranslation();
  return (
    <div className={classes.education}>
      <h2>{t("education")}</h2>
      <ul>
        <li>Sophormore Year of Computer Sience and Engineering</li>
        <li>{t("bachelor")}</li>
      </ul>
    </div>
  );
}

export default Education;
