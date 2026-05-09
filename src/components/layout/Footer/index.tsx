import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import Icon from '../../atoms/AppIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.iconBox}>
             <Icon name="send" className={styles.sendIcon} />
          </div>
          
          <div className={styles.ctaText}>
            <h2>{t('footer_title')}</h2>
            <p>{t('footer_subtitle')}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {t('btn_lets_talk')} <Icon name="arrow-right" className={styles.icon} />
            </Link>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <Icon name="mail" className={styles.contactIcon} />
              <span>marcelogottardini00@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <Icon name="map-pin" className={styles.contactIcon} />
              <span>Mendoza, Argentina</span>
            </div>
            <div className={styles.contactItem}>
              <Icon name="linkedin" className={styles.contactIcon} />
              <span>linkedin.com/in/marcelogottardini</span>
            </div>
            <div className={styles.contactItem}>
              <Icon name="github" className={styles.contactIcon} />
              <span>github.com/Galaximar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
