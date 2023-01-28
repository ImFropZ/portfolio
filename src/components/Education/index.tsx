import { useTranslation } from "react-i18next";
import { Tag } from "../../asset";
import classes from "./Education.module.css";

function Education() {
  const { t } = useTranslation();
  return (
    <div className={classes.education}>
      <Tag>
        <h2>{t("education")}</h2>
      </Tag>
      <ul>
        <li>Sophormore Year of Computer Sience and Engineering</li>
        <li>{t("bachelor")}</li>
      </ul>
    </div>
  );
}

export default Education;
