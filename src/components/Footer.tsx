import { useTranslation } from 'react-i18next'

const links = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'projects', href: '#/projects' },
  { key: 'contact', href: '#contact' },
] as const

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="wordmark">
              <img
                className="logo-img"
                src={`${import.meta.env.BASE_URL}logo-dark.svg`}
                alt={t('brand.full')}
                width="545"
                height="100"
              />
            </a>
            <p className="footer-blurb">{t('footer.blurb')}</p>
          </div>
          <div>
            <h4>{t('footer.links')}</h4>
            <ul>
              {links.map(({ key, href }) => (
                <li key={key}>
                  <a href={href}>{t(`nav.${key}`)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t('footer.reach')}</h4>
            <ul>
              <li>
                <a href="tel:+97142959609" dir="ltr">
                  {t('contact.phone')}
                </a>
              </li>
              <li>
                <a href="mailto:info@aittechs.com">info@aittechs.com</a>
              </li>
              <li>{t('hero.location')}</li>
            </ul>
          </div>
        </div>
        <p className="footer-rights">{t('footer.rights', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}
