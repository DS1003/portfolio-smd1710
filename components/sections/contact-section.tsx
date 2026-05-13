'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Mail, Linkedin, Github, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'
import SplitText from '@/components/split-text'

export function ContactSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/seydina-diop', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/seydina-diop', icon: Github },
    { label: 'Email', href: 'mailto:hello@seydinadiop.com', icon: Mail },
    { label: 'WhatsApp', href: 'https://wa.me/221785993546', icon: MessageSquare },
  ]

  return (
    <section id="contact" ref={containerRef} className="relative py-32 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-pattern grid-pattern-fade opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-strong border border-white/5 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
            {t.contact.badge}
          </span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col gap-4 mb-10">
          <SplitText
            text={t.contact.title}
            className="text-4xl sm:text-7xl lg:text-9xl font-medium tracking-tighter text-foreground leading-[0.85]"
          />
          <SplitText
            text={t.contact.titleGradient}
            className="text-4xl sm:text-7xl lg:text-9xl font-medium tracking-tighter text-gradient-mute leading-[0.85]"
            delay={400}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-16"
        >
          {t.contact.description}
        </motion.p>

        {/* CTA & Socials */}
        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="/contact"
              className="group relative flex items-center gap-4 pl-10 pr-3 py-4 rounded-full bg-foreground text-background font-bold text-sm sm:text-base uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 shadow-[0_20px_50px_rgba(212,255,58,0.15)]"
            >
              <span>{t.contact.cta}</span>
              <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass-strong border border-white/5 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-110 transition-all duration-500 shadow-xl group"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer info inside contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 pt-12 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest">Seydina Mouhammad Diop &copy; 2026</p>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <span>Dakar, SN</span>
            <span>GMT +0</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
