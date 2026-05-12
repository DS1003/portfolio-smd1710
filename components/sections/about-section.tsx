'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/providers/language-provider'

function AnimatedValue({ value, delay }: { value: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="block text-6xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-[-0.04em] leading-none"
    >
      {value}
    </motion.span>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    {
      value: '04+',
      label: t.about.stats[0].label,
      description: t.about.description1,
    },
    {
      value: '20+',
      label: t.about.stats[1].label,
      description: t.about.description2,
    },
    {
      value: '15+',
      label: t.about.stats[2].label,
      description: t.contact.description,
    },
    {
      value: '99%',
      label: 'Craft',
      description: t.hero.description,
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full glass mb-6"
        >
          <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            {t.about.badge}
          </span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Intro card (dark, spans 1 column tall) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:row-span-2 surface-dark rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[500px] lg:min-h-[680px] relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-card border border-white/10 flex items-center justify-center mb-8">
                <span className="text-xl font-semibold tracking-tight">SD</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-balance">
                I&apos;m Seydina Diop
              </h3>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                {t.about.description1} {t.about.description2}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Dakar, Senegal — working worldwide</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative group inline-flex items-center justify-center gap-2 w-full mt-10 py-4 rounded-2xl bg-foreground text-background font-medium text-sm hover:bg-accent transition-all duration-300"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* 4 stat cards in 2x2 grid (right) */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="surface-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[330px] card-hover hover:border-white/10 relative overflow-hidden"
            >
              {/* Subtle accent on hover */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/0 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500 pointer-events-none" />

              <div className="flex items-baseline justify-between gap-2">
                <AnimatedValue value={stat.value} delay={0.1 + i * 0.08} />
                <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
              </div>

              <div className="pt-6 border-t border-border/60">
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
