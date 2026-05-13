'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Wrench, Sparkles, Cpu } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import SplitText from '@/components/split-text'

function Marquee({ items, direction = 'left' }: { items: string[]; direction?: 'left' | 'right' }) {
  const duplicated = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-4 mask-fade-x">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {duplicated.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex-shrink-0 px-8 py-3 rounded-full glass-strong text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-white/5"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function SkillsSection() {
  const { t, language } = useLanguage()

  const skillGroups = [
    {
      icon: Code2,
      label: t.skills.categories.frontend,
      skills: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vue / Nuxt', 'GSAP'],
    },
    {
      icon: Wrench,
      label: t.skills.categories.backend,
      skills: ['Node.js', 'NestJS', 'Express', 'Prisma', 'PostgreSQL', 'Supabase', 'REST / GraphQL'],
    },
    {
      icon: Palette,
      label: t.skills.categories.design,
      skills: ['Figma', 'Framer', 'Design Systems', 'Prototyping', 'UX Research', 'Motion Design', 'Accessibility'],
    },
    {
      icon: Cpu,
      label: 'DesignOps',
      skills: ['Component Libraries', 'Handoff Workflows', 'Design Tokens', 'Design Linting', 'Dev-Design Bridge'],
    },
  ]

  const allSkills = skillGroups.flatMap((g) => g.skills)

  return (
    <section id="skills" className="relative py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8">


      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
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
              {t.skills.badge}
            </span>
          </motion.div>

          <div className="flex flex-col gap-4">
            <SplitText
              text={language === 'fr' ? 'Technologies Utilisées' : 'Technologies I Work With'}
              className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-gradient-mute leading-[0.9]"
            />
            <SplitText
              text={language === 'fr' ? 'de l\'idée à l\'envoi' : 'from idea to ship'}
              className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground leading-[0.9]"
              delay={300}
            />
          </div>
        </div>

        {/* Marquees */}
        <div className="space-y-4 mb-20">
          <Marquee items={allSkills.slice(0, Math.ceil(allSkills.length / 2))} direction="left" />
          <Marquee items={allSkills.slice(Math.ceil(allSkills.length / 2))} direction="right" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-strong rounded-[2rem] p-8 card-hover flex flex-col gap-8 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground opacity-40">0{i + 1}</span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-tight uppercase tracking-widest">{group.label}</h3>
                  <ul className="flex flex-col gap-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground flex items-center gap-3 transition-colors hover:text-foreground group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover/item:bg-accent transition-colors" />
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
