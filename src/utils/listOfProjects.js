const dataTranslated = (t) => {
  const foodApi = {
    video: "https://www.youtube.com/watch?v=ykrehetseuc",
    github: "https://github.com/Galaximar/FoodApi",
    title: "Food Api",
    description: (
      <>
        {" "}
        {t("foodApi_descripcion_1")}
        <br />
        {t("foodApi_descripcion_2")}
        <br />
        {t("foodApi_descripcion_3")}
        <br />
        {t("foodApi_descripcion_4")}
        <br />
        {t("foodApi_descripcion_5")}
      </>
    ),
    role: "FullStack Developer.",
    tecnologies: {
      frontend: ["React", "Redux", "Css"],
      ackend: ["Express", "Sequelieze", "Node"],
      database: ["PostgreSQL"],
    },
  };
  const everyoneStore = {
    github: "https://github.com/E-commerce-pf",
    deploy: "https://respaldo-everyones-store.vercel.app/",
    title: "Everyone´s Store",
    description: (
      <>
        {t("everyone_descripcion_1")}
        <br />
        {t("everyone_descripcion_2")}
        <br />
        {t("everyone_descripcion_3")}
        <br />
        {t("everyone_descripcion_4")}
        <br />
        {t("everyone_descripcion_5")}
        <br />
        {t("everyone_descripcion_6")}
        <br />
        {t("everyone_descripcion_7")}
        <br />
        {t("everyone_descripcion_8")}
      </>
    ),
    role: "FullStack Developer.",
    tecnologies: {
      frontend: ["React", "Redux", "Css", "Material UI", "Sass", "Nodemailer"],
      backend: ["Express", "Sequelieze", "Node", "JWT", "Firebase"],
      database: ["PostgreSQL"],
    },
  };
  const weather = {
    github: "https://github.com/Galaximar/Weather-App",
    deploy: "https://weatherappclime.vercel.app/",
    title: "Weather App",
    description: <>{t("weather_descripcion_1")}</>,
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
    github: "https://github.com/Galaximar/BlackJack",
    deploy: "https://blackjackapp.vercel.app",
    title: "Blackjack",
    description: (
      <>
        {t("blackJack_descripcion_1")}
        <br />
        {t("blackJack_descripcion_2")}
      </>
    ),
    role: "Frontend Developer.",
    tecnologies: { frontend: ["Javascript", "Uderscore", "Css", "Bootstrap"] },
  };
  const survey = {
    github: "https://github.com/Galaximar/Encuesta",
    deploy: "https://encuesta-form.vercel.app/",
    title: "Encuesta simple",
    challenge:
      "https://docs.google.com/document/d/11eFsg9PlqO-MhEA4k14Jg--BJ6ATdyDAdZ6BfPpXpzQ",
    description: (
      <>
        {t("survey_descripcion_1")}
        <br />
        {t("survey_descripcion_2")}
      </>
    ),
    role: "Fullstack Developer.",
    tecnologies: {
      frontend: ["Javascript", "React", "Sass"],
      backend: ["Firebase"],
    },
  };
  const tvArgentina = {
    github: "https://github.com/Galaximar/Tv-Argentina",
    deploy: "https://tv-argentina.vercel.app/",
    title: "Tv Argentina",
    description: (
      <>
        {t("tvArgentina_descripcion_1")}
        <br />
        {t("tvArgentina_descripcion_2")}
      </>
    ),
    role: "Fullstack Developer.",
    tecnologies: {
      frontend: ["Javascript", "Nextjs", "React", "Sass"],
      backend: ["Firebase"],
    },
  };
  const bookApi = {
    github: "https://github.com/Galaximar/BookApi",
    title: "Book Api",
    challenge:
      "https://groovy-dahlia-91d.notion.site/Backend-Engineer-863ace708e5b440d9063e3d9d0b8b58f",
    description: (
      <>
        {t("bookApi_descripcion_1")}
        <br />
        {t("bookApi_descripcion_2")}
      </>
    ),
    role: "Backend Developer.",
    tecnologies: { backend: ["Express", "Prisma", "Postgresql", "Nodejs"] },
  };
  const data = [
    everyoneStore,
    survey,
    bookApi,
    tvArgentina,
    foodApi,
    weather,
    blackJack,
  ];
  return data;
};
export default dataTranslated;
