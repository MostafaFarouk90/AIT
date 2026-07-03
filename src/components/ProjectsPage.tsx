import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

type ProjectItem = {
  page: number
  name: string
  place: string
  text: string
}

export default function ProjectsPage() {
  const { t } = useTranslation()
  const items = t('projectsPage.items', { returnObjects: true }) as ProjectItem[]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <a className="page-back" href="#top">
            {t('projectsPage.back')}
          </a>
          <h1>{t('projectsPage.title')}</h1>
          <p>{t('projectsPage.intro')}</p>
        </div>
      </section>

      <section className="projects-list">
        <div className="container">
          <div className="plist-grid">
            {items.map((item, i) => (
              <Reveal key={item.page} delay={0.05 * (i % 3)} className="pcard">
                <img
                  src={`/projects/page-${item.page}.jpg`}
                  alt={item.name}
                  loading={i < 6 ? 'eager' : 'lazy'}
                />
                <div className="pcard-body">
                  <span className="pcard-place">{item.place}</span>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="plist-note">{t('projectsPage.note')}</p>
        </div>
      </section>
    </>
  )
}
