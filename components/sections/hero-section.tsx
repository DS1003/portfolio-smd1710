'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { useLanguage } from '@/providers/language-provider'
import ShinyText from '@/components/shiny-text'
import SplitText from '@/components/split-text'

export function HeroSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-20 pointer-events-none" />



      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10"
      >
        {/* Top Pill Badge with Shiny Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
            2 {t.hero.slots}
          </span>
          <ShinyText 
            text={`${t.hero.availability} June 2026`}
            disabled={false}
            speed={3}
            className="pr-3 text-[10px] font-medium uppercase tracking-widest"
            color="rgba(255,255,255,0.4)"
            shineColor="#ffffff"
          />
        </motion.div>

        {/* Main Heading with SplitText Animation */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <SplitText
            text={t.hero.role}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gradient-mute"
            delay={100}
          />
          <SplitText
            text={`${t.hero.line1} ${t.hero.line2}`}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground"
            delay={500}
          />
        </div>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative flex items-center gap-3 pl-8 pr-3 py-3 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-2xl"
          >
            <span>{t.hero.ctaTalk}</span>
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
          <Link
            href="mailto:hello@seydinadiop.com"
            className="px-8 py-5 rounded-full glass-strong border border-white/5 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-500"
          >
            {t.hero.ctaEmail}
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Preview Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 w-full max-w-6xl mx-auto px-4 relative flex justify-center"
      >
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 w-full">
          {[
            { tilt: -12, y: 40, label: 'YONI', sub: 'logistics', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
            { tilt: -6, y: 20, label: 'NEOSYNC', sub: 'saas', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
            { tilt: 0, y: 0, label: 'SONATEL', sub: 'edu', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', highlight: true },
            { tilt: 6, y: 20, label: 'DMT', sub: 'qhse', img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800' },
            { tilt: 12, y: 40, label: 'ÉCOLE', sub: '221', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: card.y - 15, rotate: 0, scale: 1.1, zIndex: 50 }}
              initial={{ rotate: card.tilt }}
              style={{ y: card.y }}
              className={`aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative group cursor-pointer shadow-2xl transition-all duration-500 ${
                card.highlight ? 'ring-2 ring-accent/50' : ''
              }`}
            >
              <img 
                src={card.img} 
                alt={card.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-xs font-bold tracking-widest uppercase">{card.label}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}
