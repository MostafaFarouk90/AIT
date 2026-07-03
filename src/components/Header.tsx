import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../theme'

const links = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'projects', href: '#/projects' },
  { key: 'contact', href: '#contact' },
] as const

export default function Header({ solid = false }: { solid?: boolean }) {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock page scroll while the mobile menu overlay is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const toggleLang = () => {
    const next = i18n.resolvedLanguage?.startsWith('ar') ? 'en' : 'ar'
    i18n.changeLanguage(next)
  }

  // the header surface is navy over the hero and (in light mode) white once
  // scrolled — pick the logo variant that matches what it actually sits on
  const onLightSurface = (scrolled || solid) && theme === 'light' && !open
  const logoSrc = import.meta.env.BASE_URL + (onLightSurface ? 'logo-light.svg' : 'logo-dark.svg')

  return (
    <header className={`site-header${scrolled || solid ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="wordmark" onClick={() => setOpen(false)}>
          <img className="logo-img" src={logoSrc} alt={t('brand.full')} width="545" height="100" />
        </a>

        <nav className={`main-nav${open ? ' open' : ''}`} aria-label="Main">
          {links.map(({ key, href }) => (
            <a key={key} href={href} onClick={() => setOpen(false)}>
              {t(`nav.${key}`)}
            </a>
          ))}
          <button
            className="icon-toggle"
            onClick={toggle}
            aria-label={theme === 'light' ? t('nav.themeDark') : t('nav.themeLight')}
            title={theme === 'light' ? t('nav.themeDark') : t('nav.themeLight')}
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <path d="M20.4 14.2A8.2 8.2 0 0 1 9.8 3.6a8.2 8.2 0 1 0 10.6 10.6Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
              </svg>
            )}
          </button>
          <button className="lang-toggle" onClick={toggleLang}>
            {t('nav.langLabel')}
          </button>
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
