import classes from "./HomeBody.module.css";
import LiveChat from "../../asset/project/live_chat/dashboard.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Body() {
  const { t } = useTranslation();
  const nav = useNavigate();
  function seemoreHandler() {
    nav(`/project/livechat`);
  }

  return (
    <div className={classes.body}>
      <div className={classes.expContainer}>
        <div className={classes.skill}>
          <h2>{t("skill")}</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>ReactJS, ExpressJS, NodeJS</li>
            <li>Database : SQL</li>
          </ul>
        </div>
        <div className={classes.education}>
          <h2>{t("education")}</h2>
          <ul>
            <li>Sophormore Year of Computer Sience and Engineering</li>
            <li>{t("bachelor")}</li>
          </ul>
        </div>
      </div>

      <div className={classes.projContainer}>
        <div className={classes.container}>
          <h1>{t("workExperience")}</h1>
          <h3 className={classes.name}>Live Chat</h3>
          <img src={LiveChat} alt="LiveChat-Ref" className={classes.refImg} />
          <div className={`${classes.btn} noselect`} onClick={seemoreHandler}>
            {t("seeMore")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
