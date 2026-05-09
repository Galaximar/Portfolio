import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import Icon from '../../atoms/AppIcon';

const ExperienceHighlights: React.FC = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: t('value_ecommerce_title'),
      desc: t('value_ecommerce_desc'),
      icon: 'cart' as const
    },
    {
      title: t('value_performance_title'),
      desc: t('value_performance_desc'),
      icon: 'sun' as const
    },
    {
      title: t('value_devops_title'),
      desc: t('value_devops_desc'),
      icon: 'cloud' as const
    },
    {
      title: t('value_product_title'),
      desc: t('value_product_desc'),
      icon: 'users' as const
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>{t('what_i_bring')}</span>
          <h2>{t('stat_end_to_end_title')}</h2>
        </div>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon name={item.icon} className={styles.icon} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
