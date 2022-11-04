import classes from "./DescriptionSection.module.css";
import { useTranslation } from "react-i18next";

type InformationSectionProps = {
  desc: string;
  languages: Array<string>;
  other: Array<string>;
};

function InformationSection(props: InformationSectionProps) {
  const { t } = useTranslation();
  const { desc, languages, other } = props;

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{t("description")}</h4>
      <p className={classes.context}>{desc}</p>
      <div className={classes.wrapper}>
        <p>{t("language")}</p>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div className={classes.wrapper}>
        <p>{t("other")}</p>
        <ul>
          {other.map((_other) => (
            <li key={_other}>{_other}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InformationSection;
