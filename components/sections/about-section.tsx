'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/providers/language-provider'
import SplitText from '@/components/split-text'

function AnimatedValue({ value, delay }: { value: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
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
      label: 'Craftsmanship',
      description: t.hero.description,
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">


      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-strong border border-white/5 mb-8"
          >
            <Sparkles className="w-3 h-3 text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
              {t.about.badge}
            </span>
          </motion.div>

          <SplitText
            text="Designing with Purpose, Coding with Precision"
            className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tighter text-gradient-mute leading-[0.9]"
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Main profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-strong rounded-[3rem] p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] lg:min-h-[720px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-3xl overflow-hidden bg-foreground flex items-center justify-center border border-white/10 shadow-2xl">
                  <span className="text-2xl font-black tracking-tighter text-background">SD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">Seydina Mouhammad Diop</span>
                  <span className="text-xs text-accent uppercase tracking-widest font-bold">Based in Dakar, Senegal</span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-8 text-pretty">
                Blending creativity and technical expertise to build products that matter.
              </h3>

              <div className="space-y-6 max-w-xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.description1}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.description2}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-12 flex flex-col sm:flex-row items-center gap-6 pt-12 border-t border-white/5">
              <Link
                href="/contact"
                className="group relative flex items-center gap-4 pl-8 pr-2 py-2 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-2xl w-full sm:w-auto"
              >
                <span>Let's collaborate</span>
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Working worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Stats column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between min-h-[220px] transition-all duration-500 hover:bg-white/[0.03] group border border-white/5 hover:border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <AnimatedValue value={stat.value} delay={0.4 + i * 0.1} />
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
