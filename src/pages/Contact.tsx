import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';
import Icon from '../components/atoms/AppIcon';

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
type ContactFormTouched = Partial<Record<keyof ContactFormValues, boolean>>;

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'notConfigured';

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<ContactFormTouched>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const translate = (key: string) => t(key) as string;

  const faqs = [
    { question: 'faq_stack_question', answer: 'faq_stack_answer' },
    { question: 'faq_preference_question', answer: 'faq_preference_answer' },
    { question: 'faq_availability_question', answer: 'faq_availability_answer' },
    { question: 'faq_freelance_question', answer: 'faq_freelance_answer' },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const validateForm = (formValues: ContactFormValues) => {
    const nextErrors: ContactFormErrors = {};
    const trimmedName = formValues.name.trim();
    const trimmedEmail = formValues.email.trim();
    const trimmedSubject = formValues.subject.trim();
    const trimmedMessage = formValues.message.trim();

    if (!trimmedName) {
      nextErrors.name = translate('contact_error_name_required');
    } else if (trimmedName.length < 2 || trimmedName.length > 80) {
      nextErrors.name = translate('contact_error_name_length');
    }

    if (!trimmedEmail) {
      nextErrors.email = translate('contact_error_email_required');
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = translate('contact_error_email_invalid');
    }

    if (!trimmedSubject) {
      nextErrors.subject = translate('contact_error_subject_required');
    } else if (trimmedSubject.length < 3 || trimmedSubject.length > 120) {
      nextErrors.subject = translate('contact_error_subject_length');
    }

    if (!trimmedMessage) {
      nextErrors.message = translate('contact_error_message_required');
    } else if (trimmedMessage.length < 10 || trimmedMessage.length > 1200) {
      nextErrors.message = translate('contact_error_message_length');
    }

    return nextErrors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    if (touched[name as keyof ContactFormValues]) {
      setErrors(validateForm(nextValues));
    }

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = event.target.name as keyof ContactFormValues;
    setTouched((currentTouched) => ({ ...currentTouched, [fieldName]: true }));
    setErrors(validateForm(values));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          website: values.website.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.code === 'MISSING_SMTP_CONFIG') {
          setSubmitStatus('notConfigured');
          return;
        }

        throw new Error('Email service failed');
      }

      setValues(initialValues);
      setTouched({});
      setErrors({});
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const getFieldError = (fieldName: keyof ContactFormValues) =>
    touched[fieldName] ? errors[fieldName] : undefined;

  const getInputClassName = (fieldName: keyof ContactFormValues) =>
    getFieldError(fieldName) ? styles.inputError : undefined;

  const statusMessage = {
    idle: '',
    submitting: t('contact_status_sending'),
    success: t('contact_status_success'),
    error: t('contact_status_error'),
    notConfigured: t('contact_status_not_configured'),
  }[submitStatus];

  const statusClassName =
    submitStatus === 'success'
      ? styles.formFeedbackSuccess
      : submitStatus === 'notConfigured' || submitStatus === 'submitting'
      ? styles.formFeedbackWarning
      : styles.formFeedbackError;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerGrid}>
            <div className={styles.textSide}>
               <span className={styles.sub}>{t('get_in_touch')}</span>
               <h1>{t('lets_work_together')}</h1>
               <p>{t('contact_desc')}</p>
               <div className={styles.availability}>
                  <div className={styles.dot}></div>
                  <div>
                    <strong>{t('available_for_new_projects')}</strong>
                    <span>{t('contact_modes')}</span>
                  </div>
               </div>
            </div>
            <div className={styles.imageSide}>
              <img src="/images/contact.png" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
             <div className={styles.formSide}>
                <div className={styles.card}>
                   <h3><Icon name="mail" /> {t('send_me_a_message')}</h3>
                   <form className={styles.form} onSubmit={handleSubmit} noValidate>
                      <input
                        type="text"
                        name="website"
                        value={values.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                        className={styles.honeypot}
                        aria-hidden="true"
                      />
                      <div className={styles.row}>
                         <div className={styles.field}>
                            <label htmlFor="contact-name">{t('label_name')}</label>
                            <input
                              id="contact-name"
                              name="name"
                              type="text"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder={t('label_name') as string}
                              className={getInputClassName('name')}
                              aria-invalid={Boolean(getFieldError('name'))}
                              aria-describedby={getFieldError('name') ? 'contact-name-error' : undefined}
                            />
                            {getFieldError('name') && (
                              <span id="contact-name-error" className={styles.errorText}>
                                {getFieldError('name')}
                              </span>
                            )}
                         </div>
                         <div className={styles.field}>
                            <label htmlFor="contact-email">{t('label_email')}</label>
                            <input
                              id="contact-email"
                              name="email"
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder={t('label_email') as string}
                              className={getInputClassName('email')}
                              aria-invalid={Boolean(getFieldError('email'))}
                              aria-describedby={getFieldError('email') ? 'contact-email-error' : undefined}
                            />
                            {getFieldError('email') && (
                              <span id="contact-email-error" className={styles.errorText}>
                                {getFieldError('email')}
                              </span>
                            )}
                         </div>
                      </div>
                      <div className={styles.field}>
                         <label htmlFor="contact-subject">{t('label_subject')}</label>
                         <input
                           id="contact-subject"
                           name="subject"
                           type="text"
                           value={values.subject}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           placeholder={t('label_subject') as string}
                           className={getInputClassName('subject')}
                           aria-invalid={Boolean(getFieldError('subject'))}
                           aria-describedby={getFieldError('subject') ? 'contact-subject-error' : undefined}
                         />
                         {getFieldError('subject') && (
                           <span id="contact-subject-error" className={styles.errorText}>
                             {getFieldError('subject')}
                           </span>
                         )}
                      </div>
                      <div className={styles.field}>
                         <label htmlFor="contact-message">{t('label_message')}</label>
                         <textarea
                           id="contact-message"
                           name="message"
                           value={values.message}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           placeholder={t('placeholder_message') as string}
                           className={getInputClassName('message')}
                           aria-invalid={Boolean(getFieldError('message'))}
                           aria-describedby={getFieldError('message') ? 'contact-message-error' : undefined}
                         ></textarea>
                         {getFieldError('message') && (
                           <span id="contact-message-error" className={styles.errorText}>
                             {getFieldError('message')}
                           </span>
                         )}
                      </div>
                      <button type="submit" className={styles.submitBtn} disabled={submitStatus === 'submitting'}>
                         {submitStatus === 'submitting' ? t('contact_status_sending') : t('btn_send_message')} <Icon name="arrow-right" />
                      </button>
                      {statusMessage && (
                        <span className={`${styles.formFeedback} ${statusClassName}`} role="status">
                          {statusMessage}
                        </span>
                      )}
                      <span className={styles.formNote}><Icon name="sun" /> {t('form_secure_note')}</span>
                   </form>
                </div>
             </div>

             <div className={styles.infoSide}>
                <div className={styles.directContact}>
                   <h3>{t('direct_contact')}</h3>
                   <div className={styles.contactList}>
                      <div className={styles.contactItem}>
                         <Icon name="mail" className={styles.cIcon} />
                         <div>
                            <span>{t('contact_label_email')}</span>
                            <strong>marcelogottardini00@gmail.com</strong>
                         </div>
                         <button className={styles.copyBtn}><Icon name="layers" /></button>
                      </div>
                      <div className={styles.contactItem}>
                         <Icon name="linkedin" className={styles.cIcon} />
                         <div>
                            <span>{t('contact_label_linkedin')}</span>
                            <strong>/in/marcelogottardini/</strong>
                         </div>
                         <a href="https://linkedin.com/in/marcelogottardini/" target="_blank" rel="noopener noreferrer" className={styles.copyBtn}><Icon name="external" /></a>
                      </div>
                      <div className={styles.contactItem}>
                         <Icon name="github" className={styles.cIcon} />
                         <div>
                            <span>GitHub</span>
                            <strong>/Galaximar</strong>
                         </div>
                         <a href="https://github.com/Galaximar" target="_blank" rel="noopener noreferrer" className={styles.copyBtn}><Icon name="external" /></a>
                      </div>
                      <div className={styles.contactItem}>
                         <Icon name="map-pin" className={styles.cIcon} />
                         <div>
                            <span>{t('contact_label_location')}</span>
                            <strong>Mendoza, Argentina</strong>
                         </div>
                      </div>
                   </div>
                </div>

                <div className={styles.cvCard}>
                  <div className={styles.cvContent}>
                    <h3>{t('contact_cv_title')}</h3>
                    <p>{t('contact_cv_desc')}</p>
                    <a href="/CV-Marcelo-Gottardini.pdf" download="Marcelo Gottardini | Desarrollador Full Stack.pdf" className={styles.cvButton}>
                      <Icon name="download" />
                      {t('contact_cv_button')}
                    </a>
                  </div>
                  <div className={styles.cvPreview} aria-hidden="true">
                    <img src="/images/portfolio.png" alt="" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h3><Icon name="sun" /> {t('faq_title')}</h3>
          <div className={styles.faqList}>
             {faqs.map((faq, index) => (
               <div 
                 key={index} 
                 className={`${styles.faqItem} ${openFaq === index ? styles.faqItemOpen : ''}`}
               >
                  <div className={styles.faqHeader} onClick={() => toggleFaq(index)}>
                     <span>{t(faq.question)}</span>
                     <Icon name="chevron-right" />
                  </div>
                  <div className={styles.faqBody}>
                    <p>{t(faq.answer)}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
