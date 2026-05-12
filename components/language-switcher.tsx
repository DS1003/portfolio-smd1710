'use client'

import { useLanguage } from '@/providers/language-provider'
import { motion } from 'framer-motion'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 p-1 rounded-full glass border border-white/5">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full transition-all duration-300 ${
          language === 'en' ? 'bg-foreground text-background shadow-lg' : 'hover:bg-white/5 text-muted-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full transition-all duration-300 ${
          language === 'fr' ? 'bg-foreground text-background shadow-lg' : 'hover:bg-white/5 text-muted-foreground'
        }`}
      >
        FR
      </button>
    </div>
  )
}
