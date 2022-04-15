import React from 'react'
import js from './images/js.png';
import auth0 from './images/auth0.png';
import css from './images/css.png';
import express from './images/expressjs.png';
import firebase from './images/firebase.png';
import formik from './images/formik.png';
import jwt from './images/jwt.png';
import materialui from './images/materialui.png';
import node from './images/node.png';
import nodemailer from './images/nodemailer.png';
import Postgresql from './images/Postgresql.png';
import react from './images/react.png'
import redux from './images/redux.png'
import scss from './images/scss.png';
import sequelize from './images/sequelize.png'
import framer from './images/framer-motion.png'
import style from './Tecnologies.module.scss';
import { motion } from "framer-motion";


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
    {name:scss, link:'https://sass-lang.com/',description:'SCSS'},
    {name:sequelize, link:'https://sequelize.org/ ',description:'Sequelize'},
    {name:framer, link:'https://www.framer.com/motion/',description:'Framer-Motion'},

]

const Tecnologies = () => {
  return (
    <div >
      <div className={style.container}>
        {Tools ? Tools.map((tec,index)=>(
            <motion.div 
            whileHover={{
              scale: [1, 2, 2, 1, 1],
              borderRadius: ["20%", "20%", "40%", "40%", "20%"],
            }}
            whileTap={{ scale: 0.9 }}
            key={Math.random(index)} 
            className={style.item}>
                
                <a href={tec.link} >
                <img src={tec.name} alt='tec' className={style.img}/>
                </a>
                <p className={style.parrafo}>{tec.description}</p>
            </motion.div>
        )):<div>
          </div>}
      </div>
    </div>
  )
}

export default Tecnologies