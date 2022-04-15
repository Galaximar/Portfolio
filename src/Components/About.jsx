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
                <div className={style.trapecio}></div>
                <div className={style.ball1}></div>
                <div className={style.ball2}></div>
                <div className={style.name}>
                  <h2>Marcelo Gottardini</h2>
                  <h3>Fullstack Developer</h3>
                </div> 
              </div>          
          <div className={style.text}>
                  <p>
                   Cursé en el bootcamp de Henry (fullstack developer), actual estudiante de Licenciatura en Física.
                   Curioso, apasionado por enfrentarme a desafíos/problemas y no parar 
                   hasta poder resolverlos, me gusta analizar las cosas para poder mejorar. 
                   Me encanta la programación y es a lo que le dedico la mayor parte del tiempo.
                  </p>
                  <div>
                    <TimeLine />
                  </div>
          </div>
      </div>
  );
}
