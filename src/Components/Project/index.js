import Accordion from "../Accordion";
import styles from "./index.module.scss";

const Project = ({
  title,
  description,
  role,
  tecnologies,
  image,
  deploy,
  github,
  video,
}) => {
  return (
    <div className={styles.carProject}>
      <h4>{title}</h4>
      <Accordion title="Descripción">
        <p>{description}</p>
      </Accordion>
      <p>{role}</p>
      <div className={styles.tecnologies}>
        <h3>Stack tecnológico</h3>
        {tecnologies.frontend && (
          <div className={styles.stack}>
            <div className={styles.stackContainer}>
              {tecnologies.frontend.map((t) => (
                <p className={styles.frontend}>{t}</p>
              ))}
            </div>
            <div className={styles.spanFrontend}>Frontend</div>
          </div>
        )}
        {tecnologies.backend && (
          <div className={styles.stack}>
            <div className={styles.stackContainer}>
              {tecnologies.backend.map((t) => (
                <p className={styles.backend}>{t}</p>
              ))}
            </div>

            <div className={styles.spanBackend}>Backend</div>
          </div>
        )}
        {tecnologies.database && (
          <div className={styles.stack}>
            <div className={styles.stackContainer}>
              {tecnologies.database.map((t) => (
                <p className={styles.database}>{t}</p>
              ))}
            </div>

            <div className={styles.spanDatabase}>Database</div>
          </div>
        )}
      </div>
      <img
        className={styles.imgProject}
        src={image}
        alt={title}
        width="300px"
        height="300px"
      />
      {deploy && <a href={deploy}>DEPLOY</a>}
      {github && <a href={github}>GITHUB</a>}
      {video && <a href={video}>VIDEO</a>}
    </div>
  );
};

export default Project;
