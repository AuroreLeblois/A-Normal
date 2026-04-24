import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from '../i18n'

const LOCALE_STORAGE_KEY = 'a-normal-locale'
const LOCALE_CHANGE_EVENT = 'a-normal-locale-change'

function readLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (storedLocale && isSupportedLocale(storedLocale)) {
    return storedLocale
  }

  const browserLocale = navigator.language.toLowerCase().slice(0, 2)
  return isSupportedLocale(browserLocale) ? browserLocale : DEFAULT_LOCALE
}

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  useEffect(() => {
    const handleLocaleChange = () => {
      setLocaleState(readLocale())
    }

    window.addEventListener('storage', handleLocaleChange)
    window.addEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange)

    return () => {
      window.removeEventListener('storage', handleLocaleChange)
      window.removeEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange)
    }
  }, [])

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT))
    setLocaleState(nextLocale)
  }, [])

  return [locale, setLocale] as const
}
