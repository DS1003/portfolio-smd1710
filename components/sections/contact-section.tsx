'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react'

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
    label: 'Email',
    href: 'mailto:seydina@example.com',
    icon: Mail,
  },
]

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

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
              Get In Touch
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
            Let&apos;s Build The{' '}
            <span className="text-gradient">Digital Future</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or just want to chat? I&apos;m always excited to 
            discuss new opportunities and creative collaborations.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="mailto:seydina@example.com"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
            >
              <span className="relative z-10">Start a Conversation</span>
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
            {socialLinks.map((link) => (
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
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
