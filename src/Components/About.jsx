import style from './About.module.scss'
import perfil from '../assets/perfil.jpg'
import { useEffect, useRef, useState } from "react";
import TimeLine from './TimeLine';

export default function About() {
  return (
      <div className={style.container}>
              <div className={style.perfil}>
                <img className={style.fondoImg} src="https://c.wallhere.com/photos/bf/e4/minimalism_Gravity_abstract_digital_art-263437.jpg!d" alt="Space" />
                <img className={style.perfilImg} src={perfil} alt="Perfil photo" />
                <img className={style.helloImg} src="https://media-exp1.licdn.com/dms/image/C5112AQFm6aUIMtkQXw/article-inline_image-shrink_1000_1488/0/1586786516190?e=1652313600&v=beta&t=y7dL1wkoEqSQwTLeDieDpWAge6K1TUo-ecw39yXz8u0" alt="Hello world" /> 
                <div className={style.perfilFondo}></div>
                {false&&<div className={style.trapecio}></div>}
                <div className={style.circle}></div>
                <div className={style.ball1}>
                  <div className={style.ball2}>
                    <div className={style.ball3}>
                      <div className={style.ball4}></div>
                    </div>
                  </div>
                </div>
                <div className={style.name}>
                  <h2>Marcelo Gottardini</h2>
                  <h3>Fullstack Developer</h3>
                </div> 
              </div>          
          <div className={style.text}>
                  <p>
                  I attended the bootcamp of Henry (fullstack developer), current student of Bachelor of Physics. Curious, passionate about facing challenges/problems and not stopping until I can solve them, I like to analyze things to improve. I love programming and it is what I spend most of my time doing. I have worked on group projects using agile <b>SCRUM</b> methodology Basic. English, only reading and writing, in the process of learning, Spanish native language.
In active searching of a employment. <br/>
                  <b>In active job search.</b>
                  </p>
                  <div>
                    <TimeLine />
                  </div>
          </div>
      </div>
  );
}
