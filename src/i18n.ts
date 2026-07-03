import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar.json'
import en from './locales/en.json'

export function applyDirection(lng: string) {
  const isAr = lng.startsWith('ar')
  document.documentElement.lang = isAr ? 'ar' : 'en'
  document.documentElement.dir = isAr ? 'rtl' : 'ltr'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

applyDirection(i18n.resolvedLanguage ?? 'en')
i18n.on('languageChanged', applyDirection)

export default i18n
