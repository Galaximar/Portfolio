import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../../atoms/AppIcon';
import styles from './index.module.scss';
import { ProjectCaseStudy as ProjectCaseStudyData } from '../../../data/projectCaseStudies';

type ProjectCaseStudyProps = {
  project: ProjectCaseStudyData;
};

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const { t } = useTranslation();
  const hasPreview = project.previews.length > 0;
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);
  const text = (value: string) => t(value, { defaultValue: value });
  const expandImageLabel = String(t('case_expand_image'));
  const expandedImageLabel = String(t('case_expanded_image'));
  const closeImageLabel = String(t('case_close_image'));

  useEffect(() => {
    if (!expandedImage) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [expandedImage]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link to="/">{t('breadcrumb_home')}</Link>
          <span>/</span>
          <Link to="/projects">{t('breadcrumb_projects')}</Link>
          <span>/</span>
          <strong>{t(project.titleKey)}</strong>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>{t('case_study_tag')}</span>
            <h1>{t(project.titleKey)}</h1>
            <p className={styles.subtitle}>{t(project.subtitleKey)}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag}>{text(tag)}</span>
              ))}
            </div>

            <div className={styles.actions}>
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                  <Icon name="arrow-right" />
                  {t('btn_visit_project')}
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                  <Icon name="github" />
                  {t('btn_view_github')}
                </a>
              )}
            </div>
          </div>

          <div className={styles.heroVisual}>
            {project.image ? (
              <button
                type="button"
                className={styles.expandableImageButton}
                aria-label={expandImageLabel}
                onClick={() => setExpandedImage({ src: project.image as string, alt: `${t(project.titleKey)} mockup` })}
              >
                <span className={styles.expandImageCue} aria-hidden="true">
                  <Icon name="zoom-in" />
                </span>
                <img src={project.image} alt={`${t(project.titleKey)} mockup`} />
              </button>
            ) : (
              <div className={styles.visualPlaceholder}>
                <Icon name="layers" />
                <span>{t(project.titleKey)}</span>
              </div>
            )}
          </div>
        </header>

        <section className={styles.summaryCard}>
          <div className={styles.summaryMeta}>
            {project.info.map((item) => (
              <div key={`${item.labelKey}-${item.value}`} className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <Icon name={item.icon} />
                </span>
                <div>
                  <strong>{t(item.labelKey)}</strong>
                  <span>{text(item.value)}</span>
                </div>
              </div>
            ))}
          </div>
          <p>{t(project.descriptionKey)}</p>
        </section>

        <section className={styles.modulesSection}>
          <article className={styles.panel}>
            <h2>
              <Icon name="layers" />
              {t('case_developed_modules')}
            </h2>
            <div className={styles.modulesGrid}>
              {project.modules.map((module) => (
                <div key={module.title} className={styles.featureItem}>
                  <Icon name={module.icon} />
                  <div>
                    <strong>{text(module.title)}</strong>
                    <span>{text(module.description)}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className={styles.twoColumn}>
          <article className={styles.panel}>
            <h2>
              <Icon name="info" />
              {t('challenge_title')}
            </h2>
            <p>{text(project.challenge.description)}</p>
            <ul>
              {project.challenge.items.map((item) => (
                <li key={item}>
                  <Icon name="chevron-right" />
                  {text(item)}
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.panel}>
            <h2>
              <Icon name="sun" />
              {t('solution_title')}
            </h2>
            <p>{text(project.solution.description)}</p>
            <ul>
              {project.solution.items.map((item) => (
                <li key={item}>
                  <Icon name="chevron-right" />
                  {text(item)}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className={styles.detailGrid}>
          <article className={styles.panel}>
            <h2>{t('case_key_features')}</h2>
            <div className={styles.featureList}>
              {project.features.map((feature) => (
                <div key={feature.title} className={styles.featureItem}>
                  <Icon name={feature.icon} />
                  <div>
                    <strong>{text(feature.title)}</strong>
                    <span>{text(feature.description)}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.panel}>
            <h2>{t('case_tech_stack')}</h2>
            <div className={styles.stackGroups}>
              {project.stack.map((group) => (
                <div key={group.title} className={styles.stackGroup}>
                  <strong>{text(group.title)}</strong>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{text(item)}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={`${styles.panel} ${styles.architecturePanel}`}>
            <h2>{t('case_architecture_overview')}</h2>
            <div className={styles.architecture}>
              <div className={styles.archColumn}>
                {project.architecture.inputs.map((item) => (
                  <span key={item}>{text(item)}</span>
                ))}
              </div>
              <div className={styles.archCenter}>
                <Icon name="cloud" />
                <strong>{text(project.architecture.center)}</strong>
              </div>
              <div className={styles.archColumn}>
                {project.architecture.outputs.map((item) => (
                  <span key={item}>{text(item)}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className={styles.bottomGrid}>
          <article className={styles.panel}>
            <h2>{t('case_development_process')}</h2>
            <ol className={styles.processList}>
              {project.process.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{text(step.title)}</strong>
                    <p>{text(step.description)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className={`${styles.panel} ${styles.previewPanel}`}>
            <h2>{t('case_ui_preview')}</h2>
            {hasPreview ? (
              <div className={styles.previewGrid}>
                {project.previews.map((preview) => (
                  <button
                    key={preview}
                    type="button"
                    className={styles.previewImageButton}
                    aria-label={expandImageLabel}
                    onClick={() => setExpandedImage({ src: preview, alt: `${t(project.titleKey)} preview` })}
                  >
                    <span className={styles.expandImageCue} aria-hidden="true">
                      <Icon name="zoom-in" />
                    </span>
                    <img src={preview} alt={`${t(project.titleKey)} preview`} />
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.emptyPreview}>
                <Icon name="layers" />
                <span>{t('case_private_preview')}</span>
              </div>
            )}
          </article>
        </section>
      </div>

      {expandedImage && (
        <div
          className={styles.imageLightboxBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={expandedImageLabel}
          onClick={() => setExpandedImage(null)}
        >
          <div className={styles.imageLightboxFrame} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.imageLightboxClose}
              aria-label={closeImageLabel}
              onClick={() => setExpandedImage(null)}
            >
              ×
            </button>
            <img src={expandedImage.src} alt={expandedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCaseStudy;
