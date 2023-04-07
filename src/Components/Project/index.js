import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodeIcon from "@mui/icons-material/Code";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Accordion from "../Accordion";
import styles from "./index.module.scss";

const Project = ({
  title,
  description,
  role,
  tecnologies,
  challenge,
  deploy,
  github,
  video,
  t,
}) => {
  const renderTecnologies = (role) => {
    return (
      tecnologies[role] && (
        <div className={styles.stack}>
          <div className={styles.stackContainer}>
            {tecnologies[role].map((t, i) => (
              <p key={i} className={styles[role]}>
                {t}
              </p>
            ))}
          </div>
          <div className={styles[`span-${role}`]}>{role}</div>
        </div>
      )
    );
  };

  return (
    <li className={styles.carProject}>
      <div className={styles.projectLinks}>
        {video && (
          <a target="_blank" href={video} rel="noreferrer">
            <YouTubeIcon />
          </a>
        )}
        {github && (
          <a target="_blank" href={github} rel="noreferrer">
            <GitHubIcon />
          </a>
        )}
        {deploy && (
          <a target="_blank" href={deploy} rel="noreferrer">
            <LaunchIcon />
          </a>
        )}
      </div>
      <Accordion title={title}>
        <p className={styles.description}>{description}</p>
      </Accordion>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <CodeIcon />
        <p>{role}</p>
      </div>

      <div className={styles.tecnologies}>
        <p style={{ fontWeight: 600 }}>Stack {t("tecnologico")}</p>
        {renderTecnologies("frontend")}
        {renderTecnologies("backend")}
        {renderTecnologies("database")}
      </div>
      {challenge && (
        <a
          target="_blank"
          className={styles.challenge}
          href={challenge}
          rel="noreferrer"
        >
          <LocalActivityIcon /> Challenge <LaunchIcon />
        </a>
      )}
    </li>
  );
};

export default Project;
