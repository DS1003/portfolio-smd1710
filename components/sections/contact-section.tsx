'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'

export function ContactSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/seydina-diop',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/seydina-diop',
      icon: Github,
    },
    {
      label: 'Behance',
      href: 'https://behance.net/seydina-diop',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.211.989 1.76 2.102 1.76.824 0 1.46-.297 1.891-.858h2.763zM15.97 12.66h4.972c-.092-1.063-.779-1.685-2.066-1.685-1.183 0-2.035.509-2.463 1.685h-.443zM9.5 19H2V5h7.5c2.485 0 4.5 1.567 4.5 4.143 0 1.761-.96 2.899-2.25 3.393C13.317 13.054 14 14.273 14 15.714 14 18.299 11.985 19 9.5 19zM5.25 10.642h3.75c1.172 0 1.75-.642 1.75-1.571 0-.929-.578-1.571-1.75-1.571H5.25v3.142zm0 5.858h4.25c1.172 0 1.75-.714 1.75-1.714 0-1-.578-1.714-1.75-1.714H5.25v3.428z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/221785993546',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:hello@seydinadiop.com',
      icon: Mail,
    },
  ]

  return (
    <section id="contact" ref={containerRef} className="relative py-32 lg:py-48 overflow-hidden noise">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              {t.contact.badge}
            </span>
            <div className="w-12 h-[1px] bg-accent" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t.contact.title}{' '}
            <span className="text-gradient">{t.contact.titleGradient}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.contact.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
            >
              <span className="relative z-10">{t.contact.cta}</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card/50 text-muted-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}

          </motion.div>
        </div>
      </div>
    </section>
  )
}
