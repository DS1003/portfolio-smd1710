'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { X, ArrowUpRight, Plus, Globe } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/providers/language-provider'
import { LanguageSwitcher } from './language-switcher'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const { t } = useLanguage()
  const { scrollY } = useScroll()

  // Smoother transition values for the header
  const headerY = useTransform(scrollY, [0, 50], [0, -4])
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98])

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
        style={{ y: headerY, scale: headerScale }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto">
          {/* Logo Pill */}
          <Link href="/" className="group">
            <motion.div 
              className={`flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full transition-all duration-500 border border-transparent ${
                scrolled ? 'glass-strong border-white/5 shadow-2xl' : 'glass'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-foreground border border-white/10 flex items-center justify-center">
                <span className="text-sm font-bold tracking-tighter text-background">SD</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              <div className="flex flex-col">
                <span className="hidden sm:block text-sm font-semibold tracking-tight leading-tight">
                  Seydina Mouhammad Diop
                </span>
                <span className="hidden sm:block text-[10px] text-muted-foreground uppercase tracking-widest leading-tight">
                  Product Designer
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 border border-transparent ${
              scrolled ? 'glass-strong border-white/5 shadow-2xl scale-105' : 'glass'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 z-10"
              >
                <span className={hoveredLink === link.href ? 'text-foreground' : 'text-muted-foreground'}>
                  {link.label}
                </span>
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <div className={`hidden sm:flex items-center px-1.5 rounded-full transition-all duration-500 ${
              scrolled ? 'glass-strong border-white/5 py-1.5' : ''
            }`}>
              <LanguageSwitcher />
            </div>

            <Link
              href="/contact"
              className={`hidden sm:flex items-center gap-3 pl-4 pr-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                scrolled ? 'glass-strong border-white/5 shadow-xl' : 'surface-elevated'
              } hover:bg-accent hover:text-accent-foreground hover:scale-105 group`}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75 group-hover:bg-white" />
                <span className="relative rounded-full bg-accent w-2 h-2 group-hover:bg-white" />
              </span>
              <span>{t.nav.available}</span>
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-lg"
              aria-label={t.nav.menu}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{t.nav.menu}</span>
              <div className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-3xl overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-20 pointer-events-none" />


            <div className="relative h-full flex flex-col container mx-auto px-6 lg:px-12">
              {/* Header inside menu */}
              <div className="pt-8 flex items-center justify-between">
                <Link href="/" onClick={() => setMenuOpen(false)} className="group flex items-center gap-3 glass-strong px-4 py-2 rounded-full border border-white/5">
                  <span className="font-bold tracking-tighter text-xl">SMD<span className="text-accent">.</span></span>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:block">
                    <LanguageSwitcher />
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-2xl"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">{t.nav.close}</span>
                    <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-12">
                {/* Left Side: Nav Links */}
                <nav className="lg:col-span-8 flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-10 opacity-60">Navigation</p>
                  <ul className="space-y-4">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group relative inline-flex items-center gap-8 py-2"
                        >
                          <span className="text-xs font-mono text-muted-foreground/40 w-12 group-hover:text-accent transition-colors">
                            (0{i + 1})
                          </span>
                          <span className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter leading-none transition-all duration-500 group-hover:italic group-hover:translate-x-4">
                            {link.label}
                          </span>
                          <motion.div 
                            className="absolute -right-16 opacity-0 group-hover:opacity-100 group-hover:right-[-4rem] transition-all duration-500"
                          >
                            <ArrowUpRight className="w-12 h-12 text-accent" />
                          </motion.div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Right Side: Contact & Info */}
                <motion.aside 
                  className="lg:col-span-4 flex flex-col gap-16 lg:pt-20"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <div className="space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold">Contact</p>
                    <a href="mailto:hello@seydinadiop.com" className="block text-2xl font-medium hover:text-accent transition-all duration-300 hover:translate-x-2 underline-offset-8 hover:underline">
                      hello@seydinadiop.com
                    </a>
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground text-sm">Dakar, Senegal</p>
                      <div className="flex items-center gap-2 text-xs font-mono text-accent">
                        <Globe className="w-3 h-3 animate-spin-slow" />
                        <span>GMT +0 (Central West Africa)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold">Social Presence</p>
                    <ul className="flex flex-wrap gap-x-8 gap-y-4">
                      {socials.map((s) => (
                        <li key={s.href}>
                          <a 
                            href={s.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center gap-2 text-lg font-medium hover:text-accent transition-all duration-300"
                          >
                            <span className="relative">
                              {s.label}
                              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Availability badge in menu */}
                  <div className="pt-8 border-t border-white/5">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-strong">
                      <span className="flex w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-sm font-medium tracking-tight">Available for new projects</span>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  )
}
