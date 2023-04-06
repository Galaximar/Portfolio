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
const Tecnologies = () => {
  return (
    <div className={styles.tecnologiesContainer}>
      <div className={styles.title}> &#123; All Tecnologies &#125;</div>
      <div className={styles.tecnologies}>
        <Tecnology href="#" tecnology="html" />
        <Tecnology href="#" tecnology="js" />
        <Tecnology href="#" tecnology="react" />
        <Tecnology href="#" tecnology="redux" />
        <Tecnology href="#" tecnology="react-hook-form" />
        <Tecnology href="#" tecnology="next" />
        <Tecnology href="#" tecnology="css" />
        <Tecnology href="#" tecnology="sass" />
        <Tecnology href="#" tecnology="material-ui" />
        <Tecnology href="#" tecnology="chakra-ui" />
        <Tecnology href="#" tecnology="expressjs" />
        <Tecnology href="#" tecnology="sequelize" />
        <Tecnology href="#" tecnology="prisma" />
        <Tecnology href="#" tecnology="firebase" />
        <Tecnology href="#" tecnology="postgresql" />
      </div>
    </div>
  );
};
export default Tecnologies;
