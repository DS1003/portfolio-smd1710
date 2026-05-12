'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Github, Mail } from 'lucide-react'
import { useLanguage } from '@/providers/language-provider'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { label: t.nav.work, href: '/#work' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.contact, href: '/contact' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/seydina-diop', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/seydina-diop', icon: Github },
    { label: 'Email', href: 'mailto:hello@seydinadiop.com', icon: Mail },
  ]

  return (
    <footer className="relative py-12 lg:py-16 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-foreground">
                SMD<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.brand}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              {t.contact.subtitle}
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/50 text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Seydina Mouhammad Diop. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.builtWith}{' '}
            <span className="text-accent">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
