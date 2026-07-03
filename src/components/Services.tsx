import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=1200&q=80',
]

type ServiceItem = {
  name: string
  summary: string
  tags: string[]
  imageAlt: string
}

export default function Services() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const items = t('services.items', { returnObjects: true }) as ServiceItem[]
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal>
          <div className="services-head">
            <h2>{t('services.title')}</h2>
            <p>{t('services.intro')}</p>
          </div>
        </Reveal>

        <div>
          {items.map((item, i) => {
            const open = openIndex === i
            return (
              <Reveal key={item.name} delay={0.05 * i}>
                <div className={`service-row${open ? ' open' : ''}`}>
                  <button
                    className="service-trigger"
                    aria-expanded={open}
                    aria-controls={`service-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <span className="service-name">{item.name}</span>
                    <span className="service-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M7 1v12M1 7h12" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`service-panel-${i}`}
                        className="service-panel"
                        initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="service-panel-inner">
                          <div>
                            <p className="service-summary">{item.summary}</p>
                            <ul className="service-tags">
                              {item.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                              ))}
                            </ul>
                          </div>
                          <img src={SERVICE_IMAGES[i]} alt={item.imageAlt} loading="lazy" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
