import classes from "./Footer.module.css";
import { CopyrightIcon } from "../../asset";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={classes.footer}>
      <div className={classes.copyright}>
        <CopyrightIcon />
        <span className={classes.year}>2022</span>
        <span className={classes.name}>{t("name")}</span>
      </div>
      <div className={classes.typename}>Portfolio</div>
    </div>
  );
}

export default Footer;
