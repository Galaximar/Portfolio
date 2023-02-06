import style from "./About.module.scss";
import perfil from "../assets/perfil.jpg";
import portada from "../assets/portada.png";
import nube from "../assets/nube.svg";
import TimeLineNuevo from "./TimeLineNuevo";

export default function About() {
  return (
    <div className={style.container}>
      <div>
        <div className={style.portada}>
          <h1>Desarrollador web, amante de los desafíos</h1>
          <img className={style.imgPortada} src={portada} alt="Portada" />
        </div>

        <div></div>
      </div>
      <div className={style.aboutContainer}>
        <div className={style.perfilContainer}>
          <img className={style.perfilImg} src={perfil} alt="Perfil photo" />
          <img className={style.nubeImg} src={nube} alt="Background photo" />
          <div className={style.about}>
            <p>
              <b>Hi! My name is</b>
              <b style={{ color: "#f4e04e" }}> Marcelo Gottardini</b>.
            </p>
            <p>
              Curious, passionate about facing challenges/problems and not
              stopping until I can solve them, I like to analyze things to
              improve. I love programming and it is what I spend most of my time
              doing. English, only reading and writing, in the process of
              learning, Spanish native language. In active searching of a
              employment. <br />
              <b>In active job search.</b>
            </p>
          </div>
        </div>

        <div>
          <TimeLineNuevo
            items={[
              "Mentor in Henry.",
              "Frontend Developer in Vaypol (full time).",
              "Bootcamp Henry | Nov-2021 to April-2022 It consists of 4 learning modules: 1° Advanced Javascript (Data Structure and Algorithms) 2° Css, preprocessors (Sass), React and Redux 3° NodeJs, Promises, Express 4° Sql, Postgres, Sequelize Then the next part consisted of carrying out 2 projects, one individual and one group following an agile methodology. (SCRUM)",
              "Physics | Universidad Nacional de Cuyo | March-2018 to present I learned Mathematics, Physics, Chemistry, Biology, Statistics and Probability. Currently in the 4th year of my degree, in which I also had the opportunity to work with programming languages ​​such as Python, C and Octave.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
