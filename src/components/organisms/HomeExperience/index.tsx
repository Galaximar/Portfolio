import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon from '../../atoms/AppIcon';
import styles from './index.module.scss';

const HomeExperience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = [
    {
      company: t('exp_company_asba'),
      role: t('exp_role_asba'),
      date: t('exp_date_asba'),
      desc: t('exp_desc_asba_home'),
      icon: 'cloud' as const,
      tags: ['NestJS', 'React', 'React Native', 'AWS', 'SQL', 'RabbitMQ', 'Next.js', 'TypeScript'],
    },
    {
      company: t('exp_company_vaypol'),
      role: t('exp_role_vaypol'),
      date: t('exp_date_vaypol'),
      desc: t('exp_desc_vaypol_home'),
      icon: 'cart' as const,
      tags: ['Next.js', 'React Native', 'TypeScript', 'Redux', 'Ruby', 'Python', 'SQL'],
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>{t('experience_highlights')}</span>
          <h2>{t('home_experience_title')}</h2>
          <p>{t('home_experience_subtitle')}</p>
        </div>

        <div className={styles.cards}>
          {experiences.map((experience) => (
            <article key={experience.company} className={styles.card}>
              <div className={styles.iconBox}>
                <Icon name={experience.icon} />
              </div>
              <div className={styles.content}>
                <h3>{experience.role}</h3>
                <div className={styles.meta}>
                  <strong>{experience.company}</strong>
                  <span>{experience.date}</span>
                  <em>{t('exp_badge_current')}</em>
                </div>
                <p>{experience.desc}</p>
              </div>
              <div className={styles.tags}>
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Link to="/about#experience" className={styles.viewMore}>
          {t('btn_view_full_experience')}
          <Icon name="arrow-right" />
        </Link>
      </div>
    </section>
  );
};

export default HomeExperience;
