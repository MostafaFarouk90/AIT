import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'

type ValueItem = { name: string; text: string }

export default function About() {
  const { t } = useTranslation()
  const values = t('about.values.items', { returnObjects: true }) as ValueItem[]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <Reveal>
              <p className="about-pull">{t('about.pull')}</p>
              <p className="about-pull-note">{t('about.pullNote')}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="about-body">
                <p>{t('about.body1')}</p>
                <p>{t('about.body2')}</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <figure className="about-figure">
              <img src={ABOUT_IMG} alt={t('about.imageAlt')} loading="lazy" />
            </figure>
          </Reveal>
        </div>

        <div className="values">
          <Reveal>
            <h3>{t('about.values.title')}</h3>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={0.08 * i}>
                <div className="value-item">
                  <strong>{v.name}</strong>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
