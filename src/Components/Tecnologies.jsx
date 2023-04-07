import styles from "./Tecnologies.module.scss";
import Tecnology from "./Tecnology";

// const Tools = [
//   { name: js, link: "https://www.javascript.com/", description: "Javascript" },
//   { name: css, link: "#", description: "CSS3" },
//   {
//     name: express,
//     link: "https://expressjs.com/es/",
//     description: "Express Js",
//   },
//   {
//     name: firebase,
//     link: "https://firebase.google.com/?hl=es-419",
//     description: "Firebase",
//   },
//   { name: jwt, link: "https://jwt.io/", description: "JWT" },
//   { name: materialui, link: "https://mui.com/", description: "Material-UI" },
//   { name: node, link: "https://nodejs.org/es/", description: "Node Js" },
//   {
//     name: Postgresql,
//     link: "https://www.postgresql.org/",
//     description: "PostgreSQL",
//   },
//   { name: react, link: "https://es.reactjs.org/", description: "React" },
//   { name: redux, link: "https://es.redux.js.org/", description: "Redux" },
//   { name: scss, link: "https://sass-lang.com/", description: "SASS" },
//   { name: sequelize, link: "https://sequelize.org/", description: "Sequelize" },
//   { name: emailJs, link: "https://www.emailjs.com/", description: "EmailJS" },
// ];
const Tecnologies = ({ t }) => {
  return (
    <div className={styles.tecnologiesContainer}>
      <h3 className={styles.title}>&#123; {t("todas_tecnologias")} &#125;</h3>
      <div className={styles.tecnologies}>
        <Tecnology
          href="https://developer.mozilla.org/es/docs/Web/HTML"
          tecnology="html"
        />
        <Tecnology
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          tecnology="js"
        />
        <Tecnology href="https://es.reactjs.org/" tecnology="react" />
        <Tecnology href="https://redux.js.org/" tecnology="redux" />
        <Tecnology
          href="https://react-hook-form.com/"
          tecnology="react-hook-form"
        />
        <Tecnology href="https://nextjs.org/" tecnology="next" />
        <Tecnology
          href="https://developer.mozilla.org/es/docs/Web/CSS"
          tecnology="css"
        />
        <Tecnology href="https://sass-lang.com/" tecnology="sass" />
        <Tecnology href="https://mui.com/" tecnology="material-ui" />
        <Tecnology href="https://chakra-ui.com/" tecnology="chakra-ui" />
        <Tecnology href="https://expressjs.com/es/" tecnology="expressjs" />
        <Tecnology href="https://sequelize.org/" tecnology="sequelize" />
        <Tecnology href="https://www.prisma.io/" tecnology="prisma" />
        <Tecnology href="https://firebase.google.com/" tecnology="firebase" />
        <Tecnology href="https://www.postgresql.org/" tecnology="postgresql" />
      </div>
    </div>
  );
};
export default Tecnologies;
