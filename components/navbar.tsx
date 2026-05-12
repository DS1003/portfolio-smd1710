'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Plus } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/providers/language-provider'
import { LanguageSwitcher } from './language-switcher'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.work, href: '/#work' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.skills, href: '/#skills' },
    { label: t.nav.contact, href: '/contact' },
  ]

  const socials = [
    { label: 'GitHub', href: 'https://github.com/seydina-diop' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/seydina-diop' },
    { label: 'WhatsApp', href: 'https://wa.me/221785993546' },
    { label: 'Email', href: 'mailto:hello@seydinadiop.com' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo / Brand pill */}
          <Link href="/" className="group">
            <div className={`flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full transition-all duration-300 ${
              scrolled ? 'glass-strong' : 'glass'
            }`}>
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-card border border-white/10 flex items-center justify-center">
                <span className="text-sm font-semibold tracking-tight">SD</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
              </div>
              <span className="hidden sm:block text-sm font-medium tracking-tight">
                Seydina Diop
              </span>
            </div>
          </Link>

          {/* Center Nav (desktop) */}
          <nav className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
            scrolled ? 'glass-strong' : 'glass'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 pl-4 pr-4 py-2 rounded-full surface-elevated text-sm font-medium hover:border-white/20 transition-all duration-300"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-pulse-dot" />
                <span className="absolute inset-0 rounded-full bg-accent blur-sm opacity-60" />
              </span>
              <span>{t.nav.available}</span>
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-foreground text-background hover:bg-accent transition-all duration-300"
              aria-label={t.nav.menu}
            >
              <span className="text-sm font-medium">{t.nav.menu}</span>
              <span className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-30" />
            
            <div className="relative h-full flex flex-col">
              {/* Top bar */}
              <div className="px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full glass-strong">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-card border border-white/10 flex items-center justify-center">
                    <span className="text-sm font-semibold tracking-tight">SD</span>
                  </div>
                  <span className="text-sm font-medium tracking-tight">Seydina Diop</span>
                </div>

                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-foreground text-background hover:bg-accent transition-all duration-300"
                    aria-label={t.nav.close}
                  >
                    <span className="text-sm font-medium">{t.nav.close}</span>
                    <span className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                      <X className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 gap-12 lg:gap-20">
                {/* Navigation */}
                <nav className="flex-1 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Navigation</p>
                  <ul className="space-y-2">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-center gap-4 py-3 sm:py-4 border-b border-border/50 hover:border-accent/40 transition-colors"
                        >
                          <span className="text-xs font-mono text-muted-foreground w-8">
                            0{i + 1}
                          </span>
                          <span className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gradient-mute group-hover:bg-none group-hover:text-foreground transition-all">
                            {link.label}
                          </span>
                          <ArrowUpRight className="ml-auto w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Sidebar info */}
                <aside className="lg:w-80 flex flex-col gap-8 lg:justify-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</p>
                    <a href="mailto:hello@seydinadiop.com" className="block text-lg font-medium hover:text-accent transition-colors">
                      hello@seydinadiop.com
                    </a>
                    <p className="text-muted-foreground mt-1">Dakar, Senegal — GMT+0</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Social</p>
                    <ul className="space-y-2">
                      {socials.map((s) => (
                        <li key={s.href}>
                          <a 
                            href={s.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group inline-flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
                          >
                            {s.label}
                            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
