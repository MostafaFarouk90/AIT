import { useTranslation } from 'react-i18next'

export default function ClientsBand() {
  const { t } = useTranslation()
  const names = t('clients.names', { returnObjects: true }) as string[]
  // duplicated track for a seamless loop
  const track = [...names, ...names]

  return (
    <aside className="clients" id="clients" aria-label={t('clients.kicker')}>
      <div className="container clients-row">
        <span className="clients-kicker">{t('clients.kicker')}</span>
        <div className="marquee">
          <div className="marquee-track">
            {track.map((name, i) => (
              <span key={i} aria-hidden={i >= names.length}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
