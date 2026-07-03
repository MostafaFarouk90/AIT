import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const HERO_IMG =
  'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const reduced = useReducedMotion()
  // re-split on language change
  const lines = t('hero.headline').split(' ')
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section className="hero" id="top">
      <div className="hero-photo" aria-hidden="true">
        <img src={HERO_IMG} alt="" loading="eager" fetchPriority="high" />
      </div>
      <div className="hero-scan" aria-hidden="true" />

      <div className="container hero-inner">
        <h1 aria-label={t('hero.headline')} key={i18n.resolvedLanguage}>
          <span className="line" aria-hidden="true">
            {lines.map((word, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: '0.9em' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.055, ease }}
              >
                {word}
                {i < lines.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
        >
          {t('hero.sub')}
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
        >
          <a className="btn btn-accent" href="#contact">
            {t('hero.ctaPrimary')}
          </a>
          <a className="btn btn-outline-dark" href="#services">
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.05, ease }}
        >
          <span>
            <span className="dot" aria-hidden="true" />
            {t('hero.since')}
          </span>
          <span>{t('hero.location')}</span>
        </motion.div>
      </div>
    </section>
  )
}
