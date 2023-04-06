import NavBar from "./NavBar";
import About from "./About";
import Footer from "./Footer";
import { Button, makeStyles } from "@material-ui/core";
import style from "./Body.module.scss";
import CardProject from "./CardProject";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import Tecnologies from "./Tecnologies";
import { Typography } from "@mui/material";
import Project from "./Project";
import Projects from "./Projects";

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
        <Projects />
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
