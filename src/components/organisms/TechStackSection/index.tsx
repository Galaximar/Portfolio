import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon, { IconName } from '../../atoms/AppIcon';
import styles from './index.module.scss';

type TechGroup = {
  title: string;
  icon: IconName;
  tone: 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'slate';
  items: string[];
};

type TechStackSectionProps = {
  variant: 'home' | 'about';
};

const homeGroups: TechGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    tone: 'orange',
    items: ['React', 'Next.js', 'Tailwind CSS', 'CSS', 'Redux'],
  },
  {
    title: 'Mobile',
    icon: 'phone',
    tone: 'orange',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Backend',
    icon: 'box',
    tone: 'green',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
  },
  {
    title: 'Cloud / Infra',
    icon: 'cloud',
    tone: 'purple',
    items: ['AWS', 'EC2', 'RDS', 'SQS', 'SES', 'Cognito', 'CI/CD'],
  },
  {
    title: 'Data / Messaging',
    icon: 'layers',
    tone: 'orange',
    items: ['SQL', 'PostgreSQL', 'MongoDB', 'RabbitMQ'],
  },
];

const aboutGroups: TechGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    tone: 'orange',
    items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'CSS', 'SASS', 'Material UI', 'Redux'],
  },
  {
    title: 'Mobile',
    icon: 'phone',
    tone: 'orange',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Backend',
    icon: 'box',
    tone: 'green',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Autenticación', 'Workers', 'Ruby', 'Ruby on Rails'],
  },
  {
    title: 'Bases de datos',
    icon: 'layers',
    tone: 'purple',
    items: ['PostgreSQL', 'MongoDB', 'Aurora', 'RDS'],
  },
  {
    title: 'Cloud e infraestructura',
    icon: 'cloud',
    tone: 'blue',
    items: ['AWS IoT', 'AWS', 'S3', 'SQS', 'SES', 'Cognito', 'EC2', 'CI/CD', 'Autodeploys'],
  },
  {
    title: 'Analytics y producto',
    icon: 'sun',
    tone: 'pink',
    items: ['Google Analytics', 'Meta Pixel', 'Core Web Vitals', 'SEO', 'Monitoreo de errores (Sentry)'],
  },
  {
    title: 'Otros',
    icon: 'layers',
    tone: 'slate',
    items: ['TypeScript', 'Python', 'RabbitMQ', 'C++'],
  },
];

const TechStackSection: React.FC<TechStackSectionProps> = ({ variant }) => {
  const { t } = useTranslation();
  const groups = variant === 'home' ? homeGroups : aboutGroups;

  return (
    <section
      id={variant === 'about' ? 'tech-stack' : undefined}
      className={`${styles.section} ${variant === 'about' ? styles.about : styles.home}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span>{t(variant === 'home' ? 'home_stack_eyebrow' : 'about_stack_eyebrow')}</span>
          <h2>{t(variant === 'home' ? 'home_stack_title' : 'about_stack_title')}</h2>
          <p>{t(variant === 'home' ? 'home_stack_desc' : 'about_stack_desc')}</p>
          {variant === 'home' && (
            <Link to="/about#tech-stack" className={styles.stackLink}>
              {t('home_stack_cta')} <Icon name="arrow-right" />
            </Link>
          )}
        </div>

        <div className={styles.grid}>
          {groups.map((group) => (
            <article key={group.title} className={`${styles.card} ${styles[group.tone]}`}>
              <div className={styles.iconBox}>
                <Icon name={group.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3>{group.title}</h3>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
