import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";
import Icon from "../../atoms/AppIcon";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.greeting}
          >
            {t("hero_greeting")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t("hero_title")} <br />
            <span>{t("hero_title_accent")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/projects" className={styles.primaryBtn}>
              <Icon name="arrow-right" className={styles.icon} />
              {t("btn_view_projects")}
            </Link>
            <a
              href="/CV_Marcelo_Gottardini-Desarrollador_Full_Stack.pdf"
              download="Marcelo Gottardini | Desarrollador Full Stack.pdf"
              className={styles.secondaryBtn}
            >
              <Icon name="download" className={styles.icon} />
              {t("btn_download_cv")}
            </a>
          </motion.div>

          <motion.div
            className={styles.infoTags}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.infoTag}>
              <Icon name="map-pin" className={styles.infoIcon} />
              <span>{t("about_location")}</span>
            </div>
            <div className={styles.infoTag}>
              <span className={styles.statusDot}></span>
              <span>{t("available_for_work")}</span>
            </div>
            <div className={styles.infoTag}>
              <Icon name="users" className={styles.infoIcon} />
              <span>{t("available_for_new_projects")}</span>
            </div>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <motion.div
            className={styles.visualContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="/images/hero-illustration.jpg"
                alt="Marcelo Gottardini - Full Stack Developer"
                className={styles.heroImage}
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className={`${styles.floating} ${styles.f1}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <code>{`{}`}</code>
            </motion.div>
            <motion.div
              className={`${styles.floating} ${styles.f2}`}
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <code>{`</>`}</code>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
