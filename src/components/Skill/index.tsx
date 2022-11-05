import { useTranslation } from "react-i18next";
import classes from "./Skill.module.css";

function index() {
  const { t } = useTranslation();

  return (
    <div className={classes.skill}>
      <h2>{t("skill")}</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>ReactJS, ExpressJS, NodeJS</li>
        <li>SCSS, TypeScript, Axios</li>
        <li>GIT CLI</li>
        <li>Database : SQL</li>
      </ul>
    </div>
  );
}

export default index;
