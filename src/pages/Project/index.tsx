import { useNavigate, useParams } from "react-router-dom";
import { ImageSection, DescriptionSection } from "../../components";
import { BackIcon } from "../../asset";
import classes from "./Project.module.css";
import { useTranslation } from "react-i18next";
import { useProjectContext } from "../../hook";

function Project() {
  const { t } = useTranslation();
  const { projectName } = useParams();
  const nav = useNavigate();
  const project = useProjectContext().find(
    (project) => project.id === projectName
  ) || {
    name: "Null",
    image: ["404"],
    language: [],
    other: [],
  };

  const description = t(projectName + ".description") || "Null";

  function backHomeHandler() {
    nav("/");
  }

  return (
    <div className={classes.body}>
      <div className={classes.BackIcon} onClick={backHomeHandler}>
        <BackIcon />
      </div>
      <h1 className={classes.name}>{project.name}</h1>
      <div className={classes.container}>
        <ImageSection image={project.image} />
        <DescriptionSection
          desc={description}
          languages={project.language}
          other={project.other}
        />
      </div>
    </div>
  );
}

export default Project;
