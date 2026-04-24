import { en } from './en'
import { fr } from './fr'

export const translations = {
  fr,
  en,
} as const

export type Locale = keyof typeof translations

export const DEFAULT_LOCALE: Locale = 'fr'

export function isSupportedLocale(value: string): value is Locale {
  return value in translations
}

export function getTranslations(locale?: string) {
  if (locale && isSupportedLocale(locale)) {
    return translations[locale]
  }

  return translations[DEFAULT_LOCALE]
}

export function formatTemplate(template: string, vars: Record<string, string | number>) {
  return Object.entries(vars).reduce((result, [key, value]) => {
    return result.split(`{${key}}`).join(String(value))
  }, template)
}
