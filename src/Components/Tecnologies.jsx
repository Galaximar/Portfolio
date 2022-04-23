import React from 'react'
import js from './Tecnologies/images/js.png';
import css from './Tecnologies/images/css.png';
import express from './Tecnologies/images/expressjs.png';
import firebase from './Tecnologies/images/firebase.png';
import formik from './Tecnologies/images/formik.png';
import jwt from './Tecnologies/images/jwt.png';
import materialui from './Tecnologies/images/materialui.png';
import node from './Tecnologies/images/node.png';
import nodemailer from './Tecnologies/images/nodemailer.png';
import Postgresql from './Tecnologies/images/Postgresql.png';
import react from './Tecnologies/images/react.png'
import redux from './Tecnologies/images/redux.png'
import scss from './Tecnologies/images/scss.png';
import sequelize from './Tecnologies/images/sequelize.png'
import emailJs from './Tecnologies/images/emailJs.png'
import style from './Tecnologies.module.scss'
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography'



const Tools=[
    {name:js, link:'https://www.javascript.com/',description:'Javascript'},
    {name:css, link:'#',description:'CSS3'},
    {name:express, link:'https://expressjs.com/es/',description:'Express Js'},
    {name:firebase, link:'https://firebase.google.com/?hl=es-419',description:'Firebase'},
    {name:jwt, link:'https://jwt.io/',description:'JWT'},
    {name:materialui, link:'https://mui.com/',description:'Material-UI'},
    {name:node, link:'https://nodejs.org/es/',description:'Node Js'},
    {name:Postgresql, link:'https://www.postgresql.org/',description:'PostgreSQL'},
    {name:react, link:'https://es.reactjs.org/',description:'React'},
    {name:redux, link:'https://es.redux.js.org/',description:'Redux'},
    {name:scss, link:'https://sass-lang.com/',description:'SASS'},
    {name:sequelize, link:'https://sequelize.org/',description:'Sequelize'},
    {name:emailJs, link:'https://www.emailjs.com/',description:'EmailJS'},
]

const Tecnologies = () => {
  return (
    <div >
      <Typography variant="h3" sx={{color:"white"}}>Tecnologies</Typography>
      <div className={style.container}>
        {Tools ? Tools.map((tec,index)=>(
            <motion.div 
            whileHover={{
              scale: [1, 1.2, 1.3,1.2, 1],
              borderRadius: ["20%", "20%", "40%", "40%", "20%"],
            }}
            whileTap={{ scale: 0.9 }}
            key={Math.random(index)} 
            className={style.item}>
                
                <div className={style.pointer} onClick={()=>window.open(tec.link)}>
                <img src={tec.name} alt='tec' className={style.img}/>
                </div>
                <p className={style.parrafo}>{tec.description}</p>
            </motion.div>
        )):<div>
          </div>}
      </div>
    </div>
  )
}

export default Tecnologies
