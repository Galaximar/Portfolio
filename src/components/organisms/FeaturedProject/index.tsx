import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import Icon from '../../atoms/AppIcon';
import { Link } from 'react-router-dom';

const FeaturedProject: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span>{t('featured_projects')}</span>
            <h2>{t('featured_projects_title')}</h2>
          </div>
          <Link to="/projects" className={styles.viewAllBtn}>
            {t('btn_view_all_projects')} <Icon name="arrow-right" />
          </Link>
        </div>
        
        <div className={styles.grid}>
          {/* Project 1: EnTres */}
          <div className={styles.card}>
            <div className={styles.imageBox}>
              <img src="/images/entres.png" alt="EnTres Platform" />
            </div>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3>EnTres</h3>
                <span className={styles.tag}>Featured</span>
              </div>
              <p>{t('project_entres_desc')}</p>
              <div className={styles.stack}>
                <span>React Native</span> <span>Express</span> <span>PostgreSQL</span> <span>Firebase</span>
              </div>
              <Link to="/projects/entres" className={styles.link}>
                {t('btn_view_case_study')} <Icon name="arrow-right" />
              </Link>
            </div>
          </div>

          {/* Project 2: Servitur */}
          <div className={styles.card}>
            <div className={styles.imageBox}>
               <img src="/images/servitur.png" alt="Servitur Tourism platform" />
            </div>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3>{t('project_servitur_title')}</h3>
              </div>
              <p>{t('project_servitur_desc')}</p>
              <div className={styles.stack}>
                <span>Next.js</span> <span>Sequelize</span> <span>PostgreSQL</span>
              </div>
              <Link to="/projects/servitur" className={styles.link}>
                {t('btn_view_case_study')} <Icon name="arrow-right" />
              </Link>
            </div>
          </div>

          {/* Project 3: Broda */}
          <div className={styles.card}>
            <div className={styles.imageBox}>
               <img src="/images/broda.png" alt="Broda Project" />
            </div>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3>{t('project_broda_title')}</h3>
              </div>
              <p>{t('project_broda_desc')}</p>
              <div className={styles.stack}>
                <span>Next.js</span> <span>Express</span> <span>PostgreSQL</span>
              </div>
              <Link to="/projects/broda" className={styles.link}>
                {t('btn_view_case_study')} <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
