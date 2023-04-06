import style from "./Footer.module.scss";
import Form from "./Form";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <div className={style.container}>
      <h2>Contact me</h2>
      <div className={style.info}>
        <div className={style.contacts}>
          <p>
            <b>Number</b>: 2622533309
          </p>
          <p>
            <b>Mail</b>: marcelogottardini00@gmail.com
          </p>
        </div>
        <div className={style.containerLinks}>
          <a
            className={style.link}
            href="https://www.linkedin.com/in/marcelogottardini/"
            target="blank"
          >
            <SocialButton
              text="Linkedin"
              img="/assets/linkedin.svg"
              link={"https://www.linkedin.com/in/marcelogottardini/"}
            />
          </a>

          <a
            className={style.link}
            href="https://github.com/Galaximar"
            target="blank"
          >
            <SocialButton
              text="Github"
              img="/assets/github.svg"
              link={"https://github.com/Galaximar"}
            />
          </a>
        </div>
      </div>
      <h2>Or write me</h2>
      <Form />
    </div>
  );
}
