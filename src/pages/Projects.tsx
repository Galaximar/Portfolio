import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Projects.module.scss';
import Icon from '../components/atoms/AppIcon';
import { Link } from 'react-router-dom';

const categories = [
  'all_projects',
  'cat_web_apps',
  'cat_mobile_apps',
  'cat_ecommerce',
  'cat_automation',
  'cat_dashboards'
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all_projects');
  const { t } = useTranslation();

  const projectList = [
    {
      id: 'entres',
      title: t('project_entres_title'),
      desc: t('project_entres_desc'),
      tag: t('project_tag_ecommerce'),
      stack: ['Next.js', 'Express', 'Sequelize', 'PostgreSQL', 'React Native', 'Firebase', 'Cloudinary'],
      link: 'https://entres.com.ar/',
      category: 'cat_ecommerce',
      type: 'own',
      image: '/images/entres.png'
    },
    {
      id: 'broda',
      title: t('project_broda_title'),
      desc: t('project_broda_desc'),
      tag: t('project_tag_automation'),
      stack: ['Next.js 14', 'Express', 'PostgreSQL', 'Sequelize', 'Puppeteer', 'OCR', 'Gemini API', 'ExcelJS'],
      category: 'cat_automation',
      type: 'private',
      image: '/images/broda.png'
    },
    {
      id: 'checker',
      title: t('project_checker_title'),
      desc: t('project_checker_desc'),
      tag: t('project_tag_automation'),
      stack: ['Express', 'better-sqlite3', 'Cheerio', 'Chart.js', 'Telegram API'],
      link: 'https://cauciones-checker.onrender.com/',
      category: 'cat_automation',
      type: 'personal',
      image: '/images/cauciones-checker.png'
    },
    {
      id: 'iptvar',
      title: t('project_iptvar_title'),
      desc: t('project_iptvar_desc'),
      tag: t('project_tag_tv'),
      stack: ['Expo', 'React Native', 'expo-video', 'M3U Parser', 'AsyncStorage', 'WebView'],
      link: 'https://github.com/Galaximar/IPTV_AR',
      category: 'cat_mobile_apps',
      type: 'personal',
      image: '/images/iptvar.png'
    },
    {
      id: 'servitur',
      title: t('project_servitur_title'),
      desc: t('project_servitur_desc'),
      tag: 'Web + API + Admin',
      stack: ['Next.js', 'Sequelize', 'PostgreSQL', 'Cloudinary', 'Nodemailer'],
      link: 'https://servitur.tur.ar/',
      category: 'cat_web_apps',
      image: '/images/servitur.png'
    },
    {
      id: 'vinitur',
      title: t('project_vinitur_title'),
      desc: t('project_vinitur_desc'),
      tag: 'Web + API + Admin',
      stack: ['Next.js 14', 'i18next', 'Axios', 'Express Proxy', 'Nodemailer', 'SASS'],
      link: 'https://vinitur-frontend.vercel.app/',
      category: 'cat_web_apps',
      type: 'demo',
      image: '/images/vinitur.png'
    },
    {
      id: 'agronuts',
      title: t('project_agronuts_title'),
      desc: t('project_agronuts_desc'),
      tag: t('project_tag_webapp'),
      stack: ['Next.js 14', 'Sequelize', 'PostgreSQL', 'Firebase Storage', 'React Quill', 'LocalStorage Cart'],
      link: 'https://agronuts-frontend.vercel.app/',
      category: 'cat_web_apps',
      type: 'demo',
      image: '/images/agronuts.png'
    },
    {
      id: 'transportes',
      title: t('project_transportes_title'),
      desc: t('project_transportes_desc'),
      tag: t('project_tag_landing'),
      stack: ['Preact', 'Vite', 'Express', 'Nodemailer', 'Multer', 'SASS'],
      link: 'https://transportes-olv.vercel.app/',
      category: 'cat_web_apps',
      type: 'demo',
      image: '/images/transportes-olv.png'
    },
    {
      id: 'exppel',
      title: t('project_exppel_title'),
      desc: t('project_exppel_desc'),
      tag: t('project_tag_landing'),
      stack: ['Preact', 'Vite', 'Express', 'Instagram API', 'Vercel Postgres', 'Nodemailer'],
      link: 'https://exppel.vercel.app/',
      category: 'cat_web_apps',
      type: 'demo',
      image: '/images/exppel.png'
    },
    {
      id: 'nogal',
      title: t('project_nogal_title'),
      desc: t('project_nogal_desc'),
      tag: t('project_tag_landing'),
      stack: ['Next.js 14', 'SASS Modules', 'Axios Email API', 'React Toastify', 'WhatsApp CTA'],
      link: 'https://nogal-de-cuyo-frontend.vercel.app/',
      category: 'cat_web_apps',
      type: 'demo',
      image: '/images/nogal-de-cuyo.png'
    },
    {
      id: 'convalor',
      title: t('project_convalor_title'),
      desc: t('project_convalor_desc'),
      tag: t('project_tag_landing'),
      stack: ['Next.js 14', 'SASS Modules', 'Axios Email API', 'React Toastify', 'Project Routes'],
      link: 'https://convalor-frontend.vercel.app',
      category: 'cat_web_apps',
      type: 'demo',
      image: '/images/convalor.png'
    },
    {
      id: 'act',
      title: t('project_act_title'),
      desc: t('project_act_desc'),
      tag: t('project_tag_dashboard'),
      stack: ['Next.js 16', 'React 19', 'Prisma', 'Tiptap', 'NextAuth', 'AI', 'Zod'],
      link: 'https://www.actrainers.ar/',
      category: 'cat_dashboards',
      type: 'own',
      image: '/images/act.png'
    }
  ];

  const filteredProjects = activeCategory === 'all_projects' 
    ? projectList 
    : projectList.filter(p => p.category === activeCategory);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <span className={styles.sub}>{t('my_projects')}</span>
          <h1>{t('selected_work')}</h1>
          <p>{t('projects_desc')}</p>
          
          <div className={styles.statsRow}>
            <div className={styles.miniStat}>
              <Icon name="layers" className={styles.miniIcon} />
              <div>
                <strong>{t('stat_end_to_end_title')}</strong>
                <span>{t('stat_end_to_end_desc')}</span>
              </div>
            </div>
            <div className={styles.miniStat}>
              <Icon name="sun" className={styles.miniIcon} />
              <div>
                <strong>{t('stat_performance_title')}</strong>
                <span>{t('stat_performance_desc')}</span>
              </div>
            </div>
            <div className={styles.miniStat}>
              <Icon name="users" className={styles.miniIcon} />
              <div>
                <strong>{t('stat_business_title')}</strong>
                <span>{t('stat_business_desc')}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.featuredCard}>
             <div className={styles.featuredContent}>
                <div className={styles.headerTags}>
                   <span className={styles.tag}>{t('tag_featured')}</span>
                   <span className={`${styles.statusLabel} ${styles.own}`}>
                      <span className={styles.dot}></span> {t('label_own_product')}
                   </span>
                </div>
                <h2>EnTres</h2>
                <p>{t('project_entres_subtitle')}</p>
                <p className={styles.desc}>{t('project_entres_desc')}</p>
                <div className={styles.stack}>
                  <span>Next.js</span> <span>Express</span> <span>React Native</span> <span>PostgreSQL</span> <span>Firebase</span> <span>Cloudinary</span>
                </div>
                <div className={styles.links}>
                   <Link to="/projects/entres">{t('btn_view_case_study')} <Icon name="arrow-right" /></Link>
                   <a href="https://entres.com.ar" target="_blank" rel="noopener noreferrer">{t('btn_visit_project')} <Icon name="external" /></a>
                </div>
             </div>
             <div className={styles.featuredVisual}>
                <img src="/images/entres.png" alt="EnTres platform mockup" />
             </div>
          </div>

          <div className={styles.metricsBar}>
              <div className={styles.metric}>
                 <Icon name="sun" className={styles.mIcon} />
                 <div className={styles.mInfo}>
                    <strong>Admin</strong>
                    <span>{t('metric_admin_panel')}</span>
                 </div>
              </div>
              <div className={styles.metric}>
                 <Icon name="phone" className={styles.mIcon} />
                 <div className={styles.mInfo}>
                    <strong>Mobile</strong>
                    <span>{t('metric_mobile_app')}</span>
                 </div>
              </div>
              <div className={styles.metric}>
                 <Icon name="cloud" className={styles.mIcon} />
                 <div className={styles.mInfo}>
                    <strong>API</strong>
                    <span>{t('metric_shared_api')}</span>
                 </div>
              </div>
              <div className={styles.metric}>
                 <Icon name="layers" className={styles.mIcon} />
                 <div className={styles.mInfo}>
                    <strong>Full</strong>
                    <span>{t('metric_end_to_end_product')}</span>
                 </div>
              </div>
          </div>
        </div>
      </section>

      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
             {filteredProjects.map(project => (
               <div key={project.id} className={styles.projectCard}>
                  <div className={styles.cardImage}>
                    {'image' in project && project.image && (
                      <img src={project.image} alt={`${project.title} mockup`} />
                    )}
                  </div>
                  <div className={styles.cardInfo}>
                     <div className={styles.cardHeader}>
                        <h3>{project.title}</h3>
                        <div className={styles.headerTags}>
                           {project.type === 'own' && (
                             <span className={`${styles.statusLabel} ${styles.own}`}>
                               <span className={styles.dot}></span> {t('label_own_product')}
                             </span>
                           )}
                           {project.type === 'personal' && (
                             <span className={`${styles.statusLabel} ${styles.personal}`}>
                               <span className={styles.dot}></span> {t('label_personal_project')}
                             </span>
                           )}
                           {project.type === 'demo' && (
                             <span className={`${styles.statusLabel} ${styles.demo}`}>
                               <span className={styles.dot}></span> {t('label_demo')}
                             </span>
                           )}
                           {project.type === 'private' && (
                             <span className={`${styles.statusLabel} ${styles.private}`}>
                               <Icon name="lock" /> {t('label_private')}
                             </span>
                           )}
                           <span className={styles.cardTag}>{project.tag}</span>
                        </div>
                     </div>
                     <p>{project.desc}</p>
                     
                     <div className={styles.cardStack}>
                        {project.stack.map(s => <span key={s}>{s}</span>)}
                     </div>
                     <div className={styles.cardActions}>
                       <Link to={`/projects/${project.id}`} className={styles.cardLink}>
                         {t('btn_view_case_study')} <Icon name="arrow-right" />
                       </Link>
                       {project.link && (
                         <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                           {t('btn_visit_project')} <Icon name="external" />
                         </a>
                       )}
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
