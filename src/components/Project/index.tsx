import classes from "./Project.module.css";
import LiveChat from "../../asset/project/live_chat/dashboard.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Project() {
  const { t } = useTranslation();
  const nav = useNavigate();

  function handleNavigate() {
    nav(`/project/livechat`);
  }

  return (
    <div className={classes.projContainer}>
      <div className={classes.container}>
        <h1>{t("workExperience")}</h1>
        <h3 className={classes.name}>Live Chat</h3>
        <img
          src={LiveChat}
          alt="LiveChat-Ref"
          className={classes.refImg}
          onClick={handleNavigate}
        />
        <div className={`${classes.btn} noselect`} onClick={handleNavigate}>
          {t("seeMore")}
        </div>
      </div>
    </div>
  );
}

export default Project;
