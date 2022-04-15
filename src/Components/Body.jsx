import NavBar from "./NavBar";
import About from "./About";
import Footer from "./Footer";
import {Button,makeStyles} from '@material-ui/core';
import style from './Body.module.scss'
import CardProject from "./CardProject"
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import everyOne from "../assets/everyOne.jpg"

const foodApi={video:"https://www.youtube.com/watch?v=ykrehetseuc",title:"Food Api",date:"January '1",image:"https://apilist.fun/images/social/api/food-api.png",description:"FoodApi utilizando..",role:"FullStack Developer.",tecnologies:{Frontend:["React","Redux","Css"],Backend:["Express","Sequelieze","Node",],Database:["PostgreSQL"]}}
const everyoneStore={deploy:"https://respaldo-everyones-store.vercel.app/",title:"Everyone´s Store",date:"March '1",image:everyOne,description:"Eccomerce utilizando..",role:"FullStack Developer.",tecnologies:{Frontend:["React","Redux","Css"],Backend:["Express","Sequelieze","Node",],Database:["PostgreSQL"]}}
const data=[
  everyoneStore,foodApi,foodApi,foodApi
]
export default function Body() {
  const aboutRef=useRef(null);
  const projectsRef=useRef(null);
  const footerRef=useRef(null);
  const [refs,setRefs]=useState([]);
  useEffect(()=>{
    setRefs([aboutRef.current,projectsRef.current,footerRef.current])
  },[])
  return (
		<div className={style.container}>
      <Menu refs={refs}/>
      <div ref={aboutRef}>
        <About /> 
      </div>
      <div ref={projectsRef}>
        <h2>Projects</h2>
        {data.map((p,i)=><CardProject key={i} {...p}/>)}
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
		</div>
  );
}
