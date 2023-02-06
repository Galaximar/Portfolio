import NavBar from "./NavBar";
import About from "./About";
import Footer from "./Footer";
import { Button, makeStyles } from "@material-ui/core";
import style from "./Body.module.scss";
import CardProject from "./CardProject";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import everyOne from "../assets/everyOne.jpg";
import Tecnologies from "./TecnologiesNuevo";
import { Typography } from "@mui/material";

const foodApi = {
  video: "https://www.youtube.com/watch?v=ykrehetseuc",
  title: "Food Api",
  date: "January '1",
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
    Frontend: ["React", "Redux", "Css"],
    Backend: ["Express", "Sequelieze", "Node"],
    Database: ["PostgreSQL"],
  },
};
const everyoneStore = {
  deploy: "https://respaldo-everyones-store.vercel.app/",
  title: "Everyone´s Store",
  date: "March '1",
  image: everyOne,
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
    Frontend: ["React", "Redux", "Css", "Material UI", "Sass", "Nodemailer"],
    Backend: ["Express", "Sequelieze", "Node", "JWT", "Firebase"],
    Database: ["PostgreSQL"],
  },
};
const weather = {
  deploy: "https://weatherappclime.vercel.app/",
  title: "Weather App",
  date: "Dec '1-2021",
  image:
    "https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg",
  description: <p>A simple Weather app, with forecast and data graphs</p>,
  role: "Frontend Developer.",
  tecnologies: {
    Frontend: [
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
  date: "July '1-2021",
  image:
    "https://juegos.arkadiumarena.com/arenaxstorage-blob/arenax-games/BlackJack/0.51/build/resources/assets/thumbs/secondary-thumb2x.jpg",
  description: (
    <p>
      A simple Blackjack game.
      <br />
      One of the first projects to develop
    </p>
  ),
  role: "Frontend Developer.",
  tecnologies: { Frontend: ["Javascript", "Uderscore", "Css", "Bootstrap"] },
};
const data = [everyoneStore, foodApi, weather, blackJack];
export default function Body() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const tecnologiesRef = useRef(null);
  const footerRef = useRef(null);
  const [refs, setRefs] = useState([]);
  useEffect(() => {
    setRefs([
      aboutRef.current,
      projectsRef.current,
      tecnologiesRef.current,
      footerRef.current,
    ]);
  }, []);
  return (
    <div>
      {/* <Menu refs={refs}/> */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Typography variant="h3" sx={{ color: "white" }}>
          Projects
        </Typography>
        {/* {data.map((p, i) => (
          <CardProject key={i} {...p} />
        ))} */}
      </div>
      <div ref={tecnologiesRef}>
        <Tecnologies />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
