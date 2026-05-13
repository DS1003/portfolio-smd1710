'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MapPin, ArrowUpRight, Calendar } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import SplitText from '@/components/split-text'

interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  current?: boolean
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="glass-strong rounded-[2rem] p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl border border-white/5 hover:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group/card">
        {/* Left: Metadata */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="inline-flex items-center gap-3">
            {experience.current ? (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-accent animate-pulse-glow" />
                  <span className="relative rounded-full bg-accent w-2 h-2" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Current</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Previous</span>
              </div>
            )}
          </div>
          <div className="space-y-1">
            <p className="text-xl font-bold tracking-tight text-foreground">{experience.period}</p>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              <MapPin className="w-3 h-3 text-accent" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Middle: Company & Role */}
        <div className="lg:col-span-7">
          <h3 className="text-3xl lg:text-4xl font-medium tracking-tighter mb-2 group-hover/card:text-accent transition-colors duration-500">
            {experience.company}
          </h3>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">{experience.role}</p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg opacity-80 group-hover/card:opacity-100 transition-opacity">
            {experience.description}
          </p>
        </div>

        {/* Right: Interaction */}
        <div className="lg:col-span-2 flex lg:justify-end">
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover/card:bg-accent group-hover/card:text-accent-foreground transition-all duration-500">
            <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover/card:scale-110" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const experiences: Experience[] = [
    {
      id: 'sparline',
      company: 'Sparline',
      role: language === 'fr' ? 'Lead UI/UX Designer & Développeur Frontend' : 'Lead UI/UX Designer & Frontend Developer',
      period: '2024 — Present',
      location: 'Dakar, Senegal',
      description: language === 'fr' ? 'Direction du design produit et du développement frontend pour des solutions d\'entreprise.' : 'Leading product design and frontend development for enterprise solutions.',
      current: true,
    },
    {
      id: 'yoni-africa',
      company: 'Yoni Africa',
      role: language === 'fr' ? 'Lead UI/UX Designer & DesignOps' : 'Lead UI/UX Designer & DesignOps',
      period: '2023 — 2024',
      location: 'Dakar, Senegal',
      description: language === 'fr' ? 'Conception de l\'écosystème numérique complet — applications mobiles et plateformes web.' : 'Designed the full digital ecosystem — mobile apps, web platforms, and design system.',
    },
    {
      id: 'sonatel-academy',
      company: 'Sonatel Academy',
      role: language === 'fr' ? 'Lead UI/UX & Développeur FullStack' : 'Lead UI/UX & FullStack Developer',
      period: '2023 — 2024',
      location: 'Dakar, Senegal',
      description: language === 'fr' ? 'Construction d\'une plateforme de gestion éducative gérant tout le cycle de vie de l\'apprenant.' : 'Built an end-to-end educational management platform handling the full learner lifecycle.',
    },
  ]

  return (
    <section id="experience" ref={containerRef} className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-start mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-strong border border-white/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
              {t.experience.badge} <span className="text-foreground ml-2">Progressive Journey</span>
            </span>
          </motion.div>

          <div className="flex flex-col gap-4">
            <SplitText
              text={language === 'fr' ? 'Un parcours de croissance' : 'A journey of growth'}
              className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-gradient-mute leading-[0.9]"
            />
            <SplitText
              text={language === 'fr' ? 'et d\'artisanat numérique' : 'and digital craftsmanship'}
              className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground leading-[0.9]"
              delay={300}
            />
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6 lg:space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
