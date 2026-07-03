import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

export default function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Project inquiry — ${data.get('name')}`)
    const body = encodeURIComponent(
      `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`,
    )
    window.location.href = `mailto:info@aittechs.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <div>
            <h2>{t('contact.title')}</h2>
            <p className="contact-intro">{t('contact.intro')}</p>
            <dl className="contact-details">
              <div className="contact-detail">
                <dt>{t('contact.addressLabel')}</dt>
                <dd>{t('contact.address')}</dd>
              </div>
              <div className="contact-detail">
                <dt>{t('contact.phoneLabel')}</dt>
                <dd>
                  <a href="tel:+97142959609" dir="ltr">
                    {t('contact.phone')}
                  </a>
                </dd>
              </div>
              <div className="contact-detail">
                <dt>{t('contact.emailLabel')}</dt>
                <dd>
                  <a href="mailto:info@aittechs.com">{t('contact.email')}</a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="cf-name">{t('contact.form.name')}</label>
              <input id="cf-name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="cf-email">{t('contact.form.email')}</label>
              <input id="cf-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="cf-message">{t('contact.form.message')}</label>
              <textarea
                id="cf-message"
                name="message"
                required
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>
            <button className="btn btn-brand" type="submit">
              {t('contact.form.submit')}
            </button>
            {sent && (
              <p className="form-note" role="status">
                {t('contact.form.sent')}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
