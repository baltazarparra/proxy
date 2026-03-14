import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import pt from '../content/pt'
import en from '../content/en'

const copies = { pt, en }
const STORAGE_KEY = 'proxy-lang'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'pt'
  return localStorage.getItem(STORAGE_KEY) || 'pt'
}

/**
 * Wraps the app to provide bilingual copy via context.
 * @param {{ children: React.ReactNode }} props
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = (newLang) => {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
    document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : 'en'
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [])

  const value = useMemo(() => ({
    lang,
    setLang,
    t: copies[lang],
  }), [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Access the current language copy and switcher.
 * @returns {{ lang: 'pt' | 'en', setLang: (lang: 'pt' | 'en') => void, t: object }}
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
