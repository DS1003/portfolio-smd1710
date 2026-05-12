'use client'

import { useParams, useRouter } from 'next/navigation'
import { projects } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/providers/language-provider'

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const { language, t } = useLanguage()
  const projectIndex = projects.findIndex((p) => p.id === params.id)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!project && mounted) {
      router.push('/')
    }
  }, [project, router, mounted])

  if (!project) return null

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.work.back}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium uppercase tracking-wider">{project.category[language]}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-8"
            >
              {project.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {project.description[language]}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="grid grid-cols-2 gap-8 lg:block lg:space-y-8">
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.work.role}</span>
                <span className="text-lg font-medium">{project.role[language]}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.work.client}</span>
                <span className="text-lg font-medium">{project.client}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.work.year}</span>
                <span className="text-lg font-medium">{project.date}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-20 surface-card"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Left Column: Context & Stats */}
          <div className="lg:col-span-4 space-y-16">
            {project.stats && (
              <div className="grid grid-cols-1 gap-10">
                {project.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <span className="block text-5xl font-medium mb-2">{stat.value}</span>
                    <span className="text-muted-foreground uppercase tracking-widest text-xs">{stat.label[language]}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 space-y-20">
            <section>
              <h3 className="text-2xl font-medium mb-6">{t.work.challenge}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.longDescription?.[language]}
              </p>
              <div className="space-y-4">
                {project.challenges?.[language].map((challenge, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-3xl surface-card">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-mono text-sm">
                      !
                    </span>
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-medium mb-6">{t.work.solution}</h3>
              <div className="space-y-4">
                {project.solutions?.[language].map((solution, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-3xl bg-accent/5 border border-accent/10">
                    <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-accent" />
                    <p className="text-muted-foreground">{solution}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden surface-card ${
                  i === 2 ? 'md:col-span-2 aspect-[21/9]' : ''
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Next Project */}
        <div className="py-24 border-t border-border/30">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">{t.work.next}</p>
          <Link 
            href={`/projects/${nextProject.id}`}
            className="group block text-center"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-medium tracking-tight text-gradient-mute group-hover:text-foreground transition-all duration-500">
              {nextProject.title}
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-foreground text-background p-12 sm:p-20 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight mb-8 relative z-10">
            {t.work.ctaSimilar}
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-transform relative z-10"
          >
            {t.work.ctaStart}
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
