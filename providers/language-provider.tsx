'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang)
    } else {
      // Default to French since the user's request is in French
      setLanguage('fr')
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
