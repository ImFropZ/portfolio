import classes from "./Project.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useProjectContext } from "../../context/ProjectContext";

function Project() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const project = useProjectContext();

  function handleNavigate(projectName: string) {
    nav(`/project/${projectName}`);
  }

  const Project = project;

  return (
    <div className={classes.projContainer}>
      <h1>{t("workExperience")}</h1>
      {Project.map((project) => {
        return (
          <div className={classes.container} key={project.id}>
            <h3 className={classes.name}>{project.name}</h3>
            <img
              src={project.image[0] || ""}
              alt={project.id}
              className={classes.refImg}
              onClick={() => handleNavigate(project.id)}
            />
            <div
              className={`${classes.btn} noselect`}
              onClick={() => handleNavigate(project.id)}
            >
              {t("seeMore")}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
