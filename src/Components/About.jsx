import style from "./About.module.scss";
import TimeLine from "./TimeLine";

export default function About({ t }) {
  return (
    <div className={style.container}>
      <div>
        <div className={style.portada}>
          <h1>{t("desarrollador_web")}</h1>
          <img
            className={style.imgPortada}
            src="/assets/portada.png"
            alt="Portada"
          />
        </div>

        <div></div>
      </div>
      <div className={style.aboutContainer}>
        <div className={style.perfilContainer}>
          <div className={style.perfilImg}>
            <img src="/assets/perfil.jpg" alt="Perfil" />
          </div>
          <img
            className={style.nubeImg}
            src="/assets/nube.svg"
            alt="Background"
          />
          <div className={style.about}>
            <p>
              <b>{t("hola")}</b>
              <b style={{ color: "#C5588A" }}> Marcelo Gottardini</b>.
            </p>
            <p>
              {t("sobre_mi")} <br />
              <b>{t("busqueda_activa")}</b>
            </p>
          </div>
        </div>

        <div>
          <TimeLine
            t={t}
            items={[
              <p>
                {t("mentor_fecha")}
                <br />
                {t("mentor_descripcion")}
              </p>,
              <p>
                {t("vaypol_fecha")}
                <br />
                {t("vaypol_descripcion")}
                <br />
                {t("vaypol_descripcion_2")}
              </p>,
              <p>
                {t("henry_fecha")}
                <br />
                {t("henry_descripcion")}
              </p>,
              <p>
                {t("universidad_fecha")}
                <br />
                {t("universidad_descripcion")}
              </p>,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
