import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import pt from '../content/pt'
import en from '../content/en'

const copies = { pt, en }
const STORAGE_KEY = 'guia-lang'

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

  const setLang = useCallback((newLang) => {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = copies[lang].meta.title

    const setMeta = (selector, content) => {
      const element = document.querySelector(selector)
      if (element) element.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', copies[lang].meta.description)
    setMeta('meta[property="og:title"]', copies[lang].meta.socialTitle)
    setMeta('meta[property="og:description"]', copies[lang].meta.socialDescription)
    setMeta('meta[name="twitter:title"]', copies[lang].meta.socialTitle)
    setMeta('meta[name="twitter:description"]', copies[lang].meta.socialDescription)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: copies[lang],
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
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
