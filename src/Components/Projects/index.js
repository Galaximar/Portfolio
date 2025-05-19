import Project from "../Project";
import styles from "./index.module.scss";
import listOfProjects from "../../utils/listOfProjects";

const Projects = ({ t }) => {
  return (
    <section className={styles.projectsSection}>
      <h3 className={styles.title}>{t("proyectos")}</h3>
      <ul className={styles.projects}>
        {listOfProjects(t).map((project, i) => (
          <Project key={i} t={t} {...project} />
        ))}
      </ul>
    </section>
  );
};
export default Projects;
