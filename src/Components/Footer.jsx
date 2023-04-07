import style from "./Footer.module.scss";
import Form from "./Form";
import SocialButton from "./SocialButton";

export default function Footer({ t }) {
  return (
    <div className={style.container}>
      <h2>{t("contactame")}</h2>
      <div className={style.info}>
        <div className={style.contacts}>
          <p>
            <b>{t("numero")}</b>: 2622533309
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
      <h2>{t("escribeme")}</h2>
      <Form t={t} />
    </div>
  );
}
