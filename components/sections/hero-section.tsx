'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

import { useLanguage } from '@/providers/language-provider'

export function HeroSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-50 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-accent/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative max-w-6xl mx-auto w-full flex flex-col items-center text-center"
      >
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center"
        >
          <div className="flex items-center gap-2 pl-2 pr-4 py-2 rounded-full glass">
            <span className="inline-flex items-center gap-1.5 pl-2 pr-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse-dot" />
              2 {t.hero.slots}
            </span>
            <span className="text-sm text-muted-foreground">
              {t.hero.availability} <span className="text-foreground font-medium">June 2026</span>
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-medium tracking-[-0.04em] leading-[0.95] text-balance"
        >
          <span className="text-gradient-mute">{t.hero.role}</span>
          <br />
          <span className="text-foreground">{t.hero.line1}</span>
          <br />
          <span className="text-foreground">{t.hero.line2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-foreground text-background font-medium text-sm hover:bg-accent transition-all duration-300"
          >
            <span>{t.hero.ctaTalk}</span>
            <span className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
          <Link
            href="mailto:hello@seydinadiop.com"
            className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full surface-elevated font-medium text-sm hover:border-white/20 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>{t.hero.ctaEmail}</span>
          </Link>
        </motion.div>


        {/* Floating preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 lg:mt-24 w-full relative"
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { tilt: -8, y: 20, label: 'YONI', sub: 'logistics', hideOnMobile: false },
              { tilt: -4, y: 10, label: 'NEOSYNC', sub: 'saas', hideOnMobile: true },
              { tilt: 0, y: 0, label: 'SONATEL', sub: 'edu', highlight: true, hideOnMobile: false },
              { tilt: 4, y: 10, label: 'DMT', sub: 'qhse', hideOnMobile: true },
              { tilt: 8, y: 20, label: 'ÉCOLE', sub: '221', hideOnMobile: false },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: 1, 
                  y: card.y, 
                  rotate: card.tilt 
                }}
                transition={{ 
                  duration: 1, 
                  delay: 0.9 + i * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: card.y - 8, rotate: 0, scale: 1.05 }}
                className={`aspect-[3/4] rounded-2xl overflow-hidden ${
                  card.highlight ? 'surface-elevated glow-accent' : 'surface-card'
                } ${card.hideOnMobile ? 'hidden sm:flex' : 'flex'} p-3 sm:p-4 flex-col justify-between relative group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs sm:text-sm font-semibold tracking-tight">{card.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  )
}
