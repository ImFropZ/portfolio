import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  avatar,
  HeaderBackground,
  FacebookIcon,
  GithubIcon,
  TelegramIcon,
  EmailIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../asset";
import classes from "./Header.module.css";
import { ToggleLang } from "..";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [isActive, setActive] = useState(true);
  const socialMediaStyle = !isActive
    ? {}
    : {
        facebook: {
          transform: "translate(-6.5em, -3em)",
        },
        youtube: {
          transform: "translate(-8.5em, 0)",
        },
        github: {
          transform: "translate(-6.5em, 3em)",
        },
        instagram: {
          transform: "translate(6.5em, -3em)",
        },
        telegram: {
          transform: "translate(8.5em, 0)",
        },
        email: {
          transform: "translate(6.5em, 3em)",
        },
      };
  const nav = useNavigate();

  function avatarHandler() {
    setActive((prev) => !prev);
  }

  function socialMediaHandler(name: string) {
    switch (name) {
      case "facebook":
        window.open(import.meta.env.VITE_FACEBOOK_URL, "_blank");
        break;
      case "linkedin":
        window.open(import.meta.env.VITE_LINKEDIN_URL, "_blank");
        break;
      case "github":
        window.open(import.meta.env.VITE_GITHUB_URL, "_blank");
        break;
      case "instagram":
        window.open(import.meta.env.VITE_INSTAGRAM_URL, "_blank");
        break;
      case "telegram":
        window.open(import.meta.env.VITE_TELEGRAM_URL, "_blank");
        break;
      case "email":
        nav("/contact");
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.header}>
      <div className={classes.headerBg}>
        <HeaderBackground />
      </div>
      <div className={classes.personal}>
        <div className={classes.profile}>
          <img
            src={avatar}
            alt="avatar"
            className={`${classes.picture} noselect`}
            onClick={avatarHandler}
          />
          <ToggleLang />
          <div
            className={`${classes.socialMedia} ${classes.facebook}`}
            style={socialMediaStyle.facebook}
            onClick={() => {
              socialMediaHandler("facebook");
            }}
          >
            <FacebookIcon />
          </div>
          <div
            className={`${classes.socialMedia} ${classes.youtube}`}
            style={socialMediaStyle.youtube}
            onClick={() => {
              socialMediaHandler("linkedin");
            }}
          >
            <LinkedinIcon />
          </div>
          <div
            className={`${classes.socialMedia} ${classes.github}`}
            style={socialMediaStyle.github}
            onClick={() => {
              socialMediaHandler("github");
            }}
          >
            <GithubIcon />
          </div>
          <div
            className={`${classes.socialMedia} ${classes.instagram}`}
            style={socialMediaStyle.instagram}
            onClick={() => {
              socialMediaHandler("instagram");
            }}
          >
            <InstagramIcon />
          </div>
          <div
            className={`${classes.socialMedia} ${classes.telegram}`}
            style={socialMediaStyle.telegram}
            onClick={() => {
              socialMediaHandler("telegram");
            }}
          >
            <TelegramIcon />
          </div>
          <div
            className={`${classes.socialMedia} ${classes.email}`}
            style={socialMediaStyle.email}
            onClick={() => {
              socialMediaHandler("email");
            }}
          >
            <EmailIcon />
          </div>
        </div>
        <div className={`${classes.info}`}>
          <h2>{t("name")} </h2>
          <h3>Email : LimTangmeng100@gmail.com</h3>
        </div>
      </div>
      <div className={classes.address}>
        {t("address")} :
        <p>
          {t("houseNumber")} JVI0357
          <br />
          {`${t("district")} ${t("prekEng")}`} <br />
          {`${t("khan")} ${t("chbarAmpov")}`} <br />
          {`${t("city")} ${t("phnomPenh")}`}
        </p>
      </div>
    </div>
  );
}

export default Header;
