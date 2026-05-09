import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';
import styles from './index.module.scss';
import Icon from '../../atoms/AppIcon';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_projects'), path: '/projects' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <span className={styles.m}>M</span>
            <span className={styles.g}>G</span>
            <div className={styles.logoText}>
              <span className={styles.name}>MARCELO GOTTARDINI</span>
              <span className={styles.role}>{t('hero_title')} {t('hero_title_accent')}</span>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button 
              onClick={() => {
                const newLang = i18n.language.startsWith('en') ? 'es' : 'en';
                i18n.changeLanguage(newLang);
                localStorage.setItem('app_language', newLang);
              }}
              className={styles.langToggle}
            >
              {i18n.language.startsWith('en') ? 'EN' : 'ES'}
            </button>
            
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'light' ? <Icon name="moon" /> : <Icon name="sun" />}
            </button>

            <Link to="/contact" className={styles.cta}>
              {t('btn_lets_talk')}
            </Link>

            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <ul className={`${styles.mobileMenuPanel} ${isMenuOpen ? styles.menuOpen : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link 
              to={link.path} 
              className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/contact" className={styles.mobileCta}>
            {t('btn_lets_talk')}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
