'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  role: string
  client: string
  category: string
  description: string
  date: string
  technologies: string[]
  image: string
  icon: string
}

const projects: Project[] = [
  {
    id: 'yoni-africa',
    title: 'Yoni Africa',
    role: 'Lead UI/UX Designer & DesignOps',
    client: 'Yoni Africa SAS',
    category: 'Product Ecosystem',
    description: 'Designed the complete digital ecosystem — web backoffice, client mobile app, delivery app, business app, landing page, and an end-to-end design system unifying every touchpoint.',
    date: 'Mar 2024',
    technologies: ['Figma', 'DesignOps', 'Design System', 'React Native'],
    image: '/projects/yoni-africa.jpg',
    icon: 'Y',
  },
  {
    id: 'sonatel-academy',
    title: 'Sonatel Academy',
    role: 'Lead UI/UX & FullStack',
    client: 'Sonatel Group',
    category: 'EdTech Platform',
    description: 'End-to-end educational management platform driving sourcing, online assessments, learner management, and professional placement at national scale.',
    date: 'Aug 2024',
    technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    image: '/projects/sonatel-academy.jpg',
    icon: 'S',
  },
  {
    id: 'dmt-qhse',
    title: 'DMT QHSE Platform',
    role: 'Lead UI/UX & Frontend Developer',
    client: 'Dakar Mobility & Transit',
    category: 'Enterprise Solution',
    description: 'Redesigned and rebuilt internal enterprise platforms — including a full QHSE management suite — with modern interfaces and streamlined workflows.',
    date: 'Nov 2023',
    technologies: ['NuxtJS', 'Figma', 'Design System'],
    image: '/projects/dmt-qhse.jpg',
    icon: 'D',
  },
  {
    id: 'neosync',
    title: 'NeoSync',
    role: 'FullStack Developer',
    client: 'NeoSync SaaS',
    category: 'SaaS Platform',
    description: 'A WooCommerce synchronization platform enabling seamless data flow, automation, and inventory orchestration across multiple stores.',
    date: 'Jul 2023',
    technologies: ['Next.js', 'ExpressJS', 'Prisma', 'PostgreSQL'],
    image: '/projects/neosync.jpg',
    icon: 'N',
  },
  {
    id: 'ecole-221',
    title: 'École 221',
    role: 'Lead UI/UX Designer',
    client: 'École 221',
    category: 'EdTech Design',
    description: 'School management 360 platform — a comprehensive UX system covering enrollment, academics, administration and parent communication.',
    date: 'Feb 2023',
    technologies: ['Figma', 'UX Research', 'Prototyping'],
    image: '/projects/ecole-221.jpg',
    icon: 'É',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6"
    >
      {/* Info card (left) */}
      <div className="lg:col-span-5 surface-card rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[520px] card-hover hover:border-white/10">
        <div>
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-semibold text-lg mb-6 sm:mb-8">
            {project.icon}
          </div>

          {/* Title & description */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-balance">
            {project.title}
          </h3>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty max-w-md">
            {project.description}
          </p>
        </div>

        {/* Meta */}
        <div className="mt-8 space-y-3 text-sm">
          <div className="flex items-center justify-between py-3 border-t border-border/60">
            <span className="text-muted-foreground">Category</span>
            <span className="font-medium">{project.category}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-border/60">
            <span className="text-muted-foreground">Client</span>
            <span className="font-medium">{project.client}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-border/60">
            <span className="text-muted-foreground">Date</span>
            <span className="font-medium">{project.date}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="mt-6 group/btn inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:bg-accent transition-all duration-300"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Image (right) */}
      <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] rounded-3xl overflow-hidden surface-card group/img">
        {/* Background tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent z-10 pointer-events-none" />

        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.04]"
        />

        {/* Top labels */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <span className="text-xs font-mono text-foreground/70 bg-background/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            0{index + 1} / 0{projects.length}
          </span>
          <span className="text-xs font-medium text-foreground/70 bg-background/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {project.role}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 z-20 flex items-end p-6 lg:p-8 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-background/80 via-background/20 to-transparent">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full glass-strong"
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
  return (
    <section id="work" className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full glass mb-6"
            >
              <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Projects
              </span>
              <span className="text-xs text-muted-foreground">2023 – 2026</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.05] text-balance max-w-3xl"
            >
              <span className="text-gradient-mute">A curated selection of</span>{' '}
              <span className="text-foreground">products built with care</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full surface-elevated text-sm font-medium hover:border-white/20 transition-all duration-300"
            >
              <span>All Projects</span>
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Projects list */}
        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
