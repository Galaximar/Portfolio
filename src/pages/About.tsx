import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";
import Icon from "../components/atoms/AppIcon";
import TechStackSection from "../components/organisms/TechStackSection";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [showAllExperience, setShowAllExperience] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.textSide}>
              <span className={styles.sub}>{t('about_me')}</span>
              <h1>{t('about_title')}</h1>
              <p>{t('about_desc')}</p>

              <div className={styles.quickInfo}>
                <div className={styles.infoItem}>
                  <Icon name="map-pin" /> <span>{t('about_location')}</span>
                </div>
                <div className={styles.infoItem}>
                  <Icon name="mail" /> <span>{t('about_email')}</span>
                </div>
                <div className={styles.infoItem}>
                  <Icon name="sun" /> <span>{t('available_for_new_projects')}</span>
                </div>
              </div>
            </div>
            <div className={styles.imageSide}>
              <div className={styles.profileBox}>
                <img src="/perfil.jpg" alt="Marcelo Gottardini" className={styles.profileImage} />
                <div className={styles.status}>{t('available_for_work')}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="experience" className={styles.experienceSection}>
        <div className={styles.container}>
          <div className={styles.expGrid}>
            <div className={styles.timelineSide}>
              <h2>{t('experience_timeline')}</h2>
              <div className={styles.timeline}>
                {/* ASBA */}
                <div className={styles.timelineItem}>
                  <div className={styles.dot}></div>
                  <div className={styles.year}>{t('exp_date_asba')}</div>
                  <div className={styles.expContent}>
                    <div className={styles.expHeader}>
                      <strong>{t('exp_role_asba')}</strong>
                      <span>{t('exp_company_asba')}</span>
                      <span className={styles.badge}>{t('exp_badge_current')}</span>
                    </div>
                    <p>{t('exp_desc_asba_about_1')}</p>
                    <p>{t('exp_desc_asba_about_2')}</p>
                    <p>{t('exp_desc_asba_about_3')}</p>
                    <div className={styles.expStack}>
                      <span>NestJS</span> <span>React</span> <span>React Native</span> <span>Expo</span> <span>TypeScript</span> <span>Node.js</span> <span>JavaScript</span> <span>Tailwind CSS</span> <span>SQL</span> <span>AWS IoT</span> <span>SQS</span> <span>SES</span> <span>Cognito</span> <span>Aurora</span> <span>RDS</span> <span>EC2</span> <span>RabbitMQ</span> <span>Git</span> <span>Autodeploys AWS</span>
                    </div>
                  </div>
                </div>

                {/* Vaypol */}
                <div className={styles.timelineItem}>
                  <div className={styles.dot}></div>
                  <div className={styles.year}>{t('exp_date_vaypol')}</div>
                  <div className={styles.expContent}>
                    <div className={styles.expHeader}>
                      <strong>{t('exp_role_vaypol')}</strong>
                      <span>{t('exp_company_vaypol')}</span>
                      <span className={styles.badge}>{t('exp_badge_current')}</span>
                    </div>
                    <p>{t('exp_desc_vaypol_about_1')}</p>
                    <p>{t('exp_desc_vaypol_about_2')}</p>
                    <div className={styles.expStack}>
                      <span>JavaScript</span> <span>TypeScript</span> <span>Next.js</span> <span>React</span> <span>React Native</span> <span>Redux</span> <span>Ruby</span> <span>Python</span> <span>SQL</span> <span>Google Analytics</span> <span>Meta Pixel</span>
                    </div>
                  </div>
                </div>

                {/* EnTres */}
                <div className={styles.timelineItem}>
                  <div className={styles.dot}></div>
                  <div className={styles.year}>{t('exp_date_entres')}</div>
                  <div className={styles.expContent}>
                    <div className={styles.expHeader}>
                      <strong>{t('exp_role_entres')}</strong>
                      <span>{t('exp_company_entres')}</span>
                      <span className={styles.badge}>{t('exp_badge_current')}</span>
                    </div>
                    <p>{t('exp_desc_entres')}</p>
                    <div className={styles.expStack}>
                      <span>React Native</span> <span>Next.js</span> <span>Express.js</span> <span>Node.js</span> <span>TypeScript</span> <span>JavaScript</span> <span>PostgreSQL</span> <span>Sequelize.js</span> <span>REST APIs</span>
                    </div>
                  </div>
                </div>

                {showAllExperience && (
                  <>
                    {/* Tria */}
                    <div className={styles.timelineItem}>
                      <div className={styles.dot}></div>
                      <div className={styles.year}>{t('exp_date_tria')}</div>
                      <div className={styles.expContent}>
                        <div className={styles.expHeader}>
                          <strong>{t('exp_role_tria')}</strong>
                          <span>{t('exp_company_tria')}</span>
                        </div>
                        <p>{t('exp_desc_tria')}</p>
                        <div className={styles.expStack}>
                          <span>Next.js</span> <span>AWS</span> <span>Meta API</span> <span>PostgreSQL</span> <span>REST APIs</span>
                        </div>
                      </div>
                    </div>

                    {/* Henry */}
                    <div className={styles.timelineItem}>
                      <div className={styles.dot}></div>
                      <div className={styles.year}>{t('exp_date_henry')}</div>
                      <div className={styles.expContent}>
                        <div className={styles.expHeader}>
                          <strong>{t('exp_role_henry')}</strong>
                          <span>{t('exp_company_henry')}</span>
                        </div>
                        <p>{t('exp_desc_henry')}</p>
                        <div className={styles.expStack}>
                          <span>JavaScript</span> <span>React</span> <span>Node.js</span> <span>Express</span> <span>PostgreSQL</span> <span>Redux</span> <span>Sequelize</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <button 
                className={styles.viewMoreBtn} 
                onClick={() => setShowAllExperience(!showAllExperience)}
              >
                {showAllExperience ? t('btn_view_less') : t('btn_view_more')} 
                <Icon name={showAllExperience ? "chevron-up" : "chevron-down"} />
              </button>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.valueSection}>
                <h2>{t('what_i_bring')}</h2>
                <div className={styles.valueGrid}>
                  <div className={styles.valueItem}>
                    <Icon name="cart" className={styles.vIcon} />
                    <div>
                      <strong>{t('value_ecommerce_title')}</strong>
                      <p>{t('value_ecommerce_desc')}</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <Icon name="sun" className={styles.vIcon} />
                    <div>
                      <strong>{t('value_performance_title')}</strong>
                      <p>{t('value_performance_desc')}</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <Icon name="cloud" className={styles.vIcon} />
                    <div>
                      <strong>{t('value_devops_title')}</strong>
                      <p>{t('value_devops_desc')}</p>
                    </div>
                  </div>
                  <div className={styles.valueItem}>
                    <Icon name="users" className={styles.vIcon} />
                    <div>
                      <strong>{t('value_product_title')}</strong>
                      <p>{t('value_product_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.educationSection}>
                <h2>{t('education')}</h2>
                <div className={styles.eduCard}>
                  <Icon name="code" className={styles.eduIcon} />
                  <div>
                    <strong>{t('edu_physics_title')}</strong>
                    <p>{t('edu_physics_school')}</p>
                    <span>{t('edu_physics_date')}</span>
                    <p className={styles.eduDesc}>{t('edu_physics_desc')}</p>
                  </div>
                </div>
                <div className={styles.eduCard}>
                  <Icon name="code" className={styles.eduIcon} />
                  <div>
                    <strong>{t('edu_henry_title')}</strong>
                    <p>{t('edu_henry_school')}</p>
                    <span>{t('edu_henry_date')}</span>
                    <p className={styles.eduDesc}>{t('edu_henry_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStackSection variant="about" />

    </div>
  );
};

export default About;
