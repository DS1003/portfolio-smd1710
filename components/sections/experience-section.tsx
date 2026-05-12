'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'

interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: 'sparline',
    company: 'Sparline',
    role: 'Lead UI/UX Designer & Frontend Developer',
    period: '2024 — Present',
    location: 'Dakar, Senegal',
    description: 'Leading product design and frontend development for enterprise solutions, building scalable design systems and modern web applications.',
    current: true,
  },
  {
    id: 'yoni-africa',
    company: 'Yoni Africa',
    role: 'Lead UI/UX Designer & DesignOps',
    period: '2023 — 2024',
    location: 'Dakar, Senegal',
    description: 'Designed the full digital ecosystem — mobile apps, web platforms, and end-to-end design system — for a logistics & delivery startup.',
  },
  {
    id: 'sonatel-academy',
    company: 'Sonatel Academy',
    role: 'Lead UI/UX & FullStack Developer',
    period: '2023 — 2024',
    location: 'Dakar, Senegal',
    description: 'Built an end-to-end educational management platform handling the full learner lifecycle from recruitment to professional placement.',
  },
  {
    id: 'dmt',
    company: 'DMT',
    role: 'Lead UI/UX & Frontend Developer',
    period: '2022 — 2023',
    location: 'Dakar, Senegal',
    description: 'Redesigned enterprise platforms and QHSE management solutions with focus on user experience and modern interfaces.',
  },
  {
    id: 'rh-perspectives',
    company: 'RH Perspectives',
    role: 'UI/UX Designer',
    period: '2021 — 2022',
    location: 'Dakar, Senegal',
    description: 'Designed HR management tools and recruitment platforms with emphasis on accessibility and user-centered design.',
  },
  {
    id: 'moomel',
    company: 'Moomel',
    role: 'UI/UX Designer & Developer',
    period: '2020 — 2021',
    location: 'Dakar, Senegal',
    description: 'Created digital products and web experiences for various clients — from startups to established businesses.',
  },
]

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="surface-card rounded-3xl p-6 sm:p-8 lg:p-10 card-hover hover:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Left: Period & metadata */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2">
            {experience.current && (
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-pulse-dot" />
                <span className="absolute inset-0 rounded-full bg-accent blur-sm opacity-60" />
              </span>
            )}
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {experience.period}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Middle: Role + description */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-balance">
            {experience.company}
          </h3>
          <p className="mt-2 text-base font-medium text-accent">{experience.role}</p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty max-w-2xl">
            {experience.description}
          </p>
        </div>

        {/* Right: Index */}
        <div className="lg:col-span-2 flex lg:justify-end">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground">
              0{index + 1}
            </span>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" ref={containerRef} className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full glass mb-6"
            >
              <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Experience
              </span>
              <span className="text-xs text-muted-foreground">6 roles since 2020</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.05] text-balance max-w-3xl"
            >
              <span className="text-gradient-mute">A journey of</span>{' '}
              <span className="text-foreground">growth and craft</span>
            </motion.h2>
          </div>
        </div>

        {/* Cards list with subtle progress line */}
        <div className="relative">
          {/* Decorative vertical progress line (desktop) */}
          <div className="hidden lg:block absolute left-[16.66%] -translate-x-1/2 top-0 bottom-0 w-px bg-border/50 pointer-events-none">
            <motion.div
              style={{ height: lineY }}
              className="w-full bg-gradient-to-b from-accent via-accent/50 to-transparent"
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
