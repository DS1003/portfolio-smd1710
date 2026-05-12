'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Wrench, Sparkles } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    label: 'Frontend & Web',
    skills: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vue / Nuxt', 'GSAP'],
  },
  {
    icon: Wrench,
    label: 'Backend & Data',
    skills: ['Node.js', 'NestJS', 'Express', 'Prisma', 'PostgreSQL', 'Supabase', 'REST / GraphQL'],
  },
  {
    icon: Palette,
    label: 'Design & DesignOps',
    skills: ['Figma', 'Framer', 'Design Systems', 'Prototyping', 'UX Research', 'Motion Design', 'Accessibility'],
  },
  {
    icon: Sparkles,
    label: 'Tooling & Workflow',
    skills: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'Linear', 'Notion', 'Storybook'],
  },
]

const allSkills = skillGroups.flatMap((g) => g.skills)

function Marquee({ items, direction = 'left' }: { items: string[]; direction?: 'left' | 'right' }) {
  const duplicated = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {duplicated.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex-shrink-0 px-5 py-2.5 rounded-full surface-card text-sm font-medium hover:border-white/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full glass mb-6"
            >
              <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Skills
              </span>
              <span className="text-xs text-muted-foreground">Tools of the trade</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.05] text-balance max-w-3xl"
            >
              <span className="text-gradient-mute">Technologies I work with</span>{' '}
              <span className="text-foreground">— from idea to ship</span>
            </motion.h2>
          </div>
        </div>

        {/* Marquees */}
        <div className="space-y-2 mb-16">
          <Marquee items={allSkills.slice(0, 14)} direction="left" />
          <Marquee items={allSkills.slice(14)} direction="right" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="surface-card rounded-3xl p-6 sm:p-7 card-hover hover:border-white/10 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>

                <div>
                  <h3 className="text-lg font-medium tracking-tight">{group.label}</h3>
                </div>

                <ul className="flex flex-col gap-1.5 mt-auto">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
