import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import Icon from '../../atoms/AppIcon';

const GlobalStats: React.FC = () => {
  const { t } = useTranslation();
  const stats = [
    { value: '4+', label: t('stat_years_experience'), icon: 'code' as const },
    { value: t('stat_fullstack_value'), label: t('stat_fullstack_scope'), icon: 'layers' as const },
    { value: t('stat_deployment_value'), label: t('stat_deployment'), icon: 'cloud' as const },
    { value: t('stat_work_modes_value'), label: t('stat_work_modes'), icon: 'briefcase' as const },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.stat}>
            <div className={styles.iconWrapper}>
              <Icon name={stat.icon} className={styles.icon} />
            </div>
            <div className={styles.info}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalStats;
