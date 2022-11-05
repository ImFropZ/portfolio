import classes from "./About.module.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <h2>{t("aboutme")}</h2>
      <p>
        {t("aboutmeDesc.firstHalf")}{" "}
        <a href="https://fb.com/rupp.edu.kh" target="_blank">
          {t("rupp")}
        </a>{" "}
        {t("aboutmeDesc.lastHalf")}
      </p>
    </div>
  );
}

export default About;
