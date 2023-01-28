import { useTranslation } from "react-i18next";
import { Tag } from "../../asset";
import classes from "./Skill.module.css";

function index() {
  const { t } = useTranslation();

  return (
    <div className={classes.skill}>
      <Tag>
        <h2>{t("skill")}</h2>
      </Tag>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>ReactJS, ExpressJS, NodeJS</li>
        <li>SCSS, TailwindCSS, TypeScript, Redux</li>
        <li>Code Management: GitHub</li>
        <li>Database : SQL</li>
      </ul>
    </div>
  );
}

export default index;
