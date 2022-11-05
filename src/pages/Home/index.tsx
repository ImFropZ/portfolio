import { About, Skill, Education, Project } from "../../components";
import classes from "./Home.module.css";

function HomePage() {
  return (
    <div className={classes.body}>
      <About />
      <div className={classes.expContainer}>
        <Skill />
        <Education />
      </div>
      <Project />
    </div>
  );
}

export default HomePage;
