import Project from "../Project";
import styles from "./index.module.scss";

const foodApi = {
  video: "https://www.youtube.com/watch?v=ykrehetseuc",
  title: "Food Api",
  image: "https://apilist.fun/images/social/api/food-api.png",
  description: (
    <p>
      Development of a Food/Recipe API.
      <br />
      Which has the ability to search, store, delete and edit
      <br />
      data from a database.
      <br />
      It also consumes data provided by a food API by displaying
      <br /> it with their respective filters and pagination.
    </p>
  ),
  role: "FullStack Developer.",
  tecnologies: {
    frontend: ["React", "Redux", "Css"],
    ackend: ["Express", "Sequelieze", "Node"],
    database: ["PostgreSQL"],
  },
};
const everyoneStore = {
  deploy: "https://respaldo-everyones-store.vercel.app/",
  title: "Everyone´s Store",
  image: "/assets/everyOne.jpg",
  description: (
    <p>
      Ecommerce of technological products, using Paypal as a payment gateway.
      <br />
      The user can: Add a product to a shopping cart, make
      <br /> a purchase, add a product to favorites, make a review, interact
      <br />
      with a chat bot, see the branches on a map and subscribe
      <br />
      to notifications about news of the pages.
      <br />
      It also has an administrative panel, in which you can:
      <br />
      Create/edit/delete a category, product,
      <br />
      ban a user, convert user to admin, view transactions.
    </p>
  ),
  role: "FullStack Developer.",
  tecnologies: {
    frontend: ["React", "Redux", "Css", "Material UI", "Sass", "Nodemailer"],
    backend: ["Express", "Sequelieze", "Node", "JWT", "Firebase"],
    database: ["PostgreSQL"],
  },
};
const weather = {
  deploy: "https://weatherappclime.vercel.app/",
  title: "Weather App",
  image:
    "https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg",
  description: <p>A simple Weather app, with forecast and data graphs</p>,
  role: "frontend Developer.",
  tecnologies: {
    frontend: [
      "Javascript",
      "React",
      "Css",
      "Bootstrap",
      "Google Charts",
      "Material UI",
      "Local Storage",
    ],
  },
};
const blackJack = {
  deploy: "https://blackjackapp.vercel.app",
  title: "Blackjack",
  image:
    "https://juegos.arkadiumarena.com/arenaxstorage-blob/arenax-games/BlackJack/0.51/build/resources/assets/thumbs/secondary-thumb2x.jpg",
  description: (
    <p>
      A simple Blackjack game.
      <br />
      One of the first projects to develop
    </p>
  ),
  role: "frontend Developer.",
  tecnologies: { frontend: ["Javascript", "Uderscore", "Css", "Bootstrap"] },
};
const data = [everyoneStore, foodApi, weather, blackJack];

const Projects = () => {
  return (
    <div className={styles.projects}>
      {data.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
};
export default Projects;
