import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

type Project = {
  name: string
  place: string
  text: string
  scope: string[]
}

export default function Projects() {
  const { t } = useTranslation()
  const featured = t('projects.featured', { returnObjects: true }) as Project[]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <Reveal>
          <div className="projects-head">
            <div>
              <h2>{t('projects.title')}</h2>
              <p>{t('projects.intro')}</p>
            </div>
            <a className="btn btn-outline-dark" href="#/projects">
              {t('projects.viewAll')}
            </a>
          </div>
        </Reveal>

        <div className="projects-grid">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={0.06 * (i % 3)} className="project-cell">
              <span className="project-place">{project.place}</span>
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <ul className="project-scope" aria-label={t('projects.scopeLabel')}>
                {project.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
