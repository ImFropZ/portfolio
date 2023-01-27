import { useNavigate, useParams } from "react-router-dom";
import { ImageContainer, InformationSection } from "../../components";
import { BackIcon } from "../../asset";
import classes from "./Project.module.css";
import { useTranslation } from "react-i18next";
import { useProjectContext } from "../../context/ProjectContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function Project() {
  const { t } = useTranslation();
  const { projectName } = useParams();
  const nav = useNavigate();
  const project =
    useProjectContext().find((project) => project.id === projectName) || null;

  if (project === null) {
    alert("Project is not in the database");
    return <Navigate to="/" />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <ImageContainer image={project.image} />
        <InformationSection
          desc={description}
          languages={project.language}
          other={project.other}
        />
      </div>
    </div>
  );
}

export default Project;
