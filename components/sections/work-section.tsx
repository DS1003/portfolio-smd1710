'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { projects, type Project } from '@/lib/data'
import { useLanguage } from '@/providers/language-provider'
import SplitText from '@/components/split-text'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { language, t } = useLanguage()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
    >
      {/* Info card (left) */}
      <div className="lg:col-span-5 glass-strong rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[560px] transition-all duration-500 hover:shadow-2xl hover:border-white/10 group/card">
        <div>
          {/* Badge & Number */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                {project.icon}
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                0{index + 1}
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">
              {project.category[language]}
            </span>
          </div>

          {/* Title & description */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm opacity-80 group-hover/card:opacity-100 transition-opacity">
            {project.description[language]}
          </p>
        </div>

        <div className="space-y-8">
          {/* Metadata Row */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/5">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Role</p>
              <p className="text-xs font-bold uppercase tracking-tight">{project.role[language]}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Year</p>
              <p className="text-xs font-bold uppercase tracking-tight">{project.date}</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href={`/projects/${project.id}`}
            className="group/btn relative flex items-center justify-between gap-4 pl-8 pr-2 py-2 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-xl"
          >
            <span>{t.work.viewDetails}</span>
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      {/* Image (right) */}
      <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] rounded-[2.5rem] overflow-hidden glass group/img">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
        />
        
        {/* Hover overlay with Tech Tags */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-12">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full glass-strong border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function WorkSection() {
  const { t } = useLanguage()

  return (
    <section id="work" className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20 lg:mb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-strong border border-white/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                Selected Work <span className="text-foreground ml-2">2023 – 2026</span>
              </span>
            </motion.div>

            <div className="flex flex-col gap-4">
              <SplitText
                text={t.work.title}
                className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-gradient-mute leading-[0.9]"
              />
              <SplitText
                text={t.work.subtitle}
                className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground leading-[0.9]"
                delay={200}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/projects"
              className="group relative flex items-center gap-4 pl-8 pr-2 py-2 rounded-full bg-foreground text-background font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-2xl"
            >
              <span>{t.work.allProjects}</span>
              <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Projects list */}
        <div className="space-y-12 sm:space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
