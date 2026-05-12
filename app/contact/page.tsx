'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, Send, MapPin, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/providers/language-provider'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate API call
    setTimeout(() => {
      setFormState('success')
    }, 1500)
  }

  const whatsappNumber = "221785993546" 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappDefaultMessage)}`

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-8xl font-medium tracking-tight mb-8"
          >
            {t.contact.title} <span className="text-muted-foreground">/</span> {t.contact.subtitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t.contact.description}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-[2.5rem] surface-card border border-accent/20">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl font-medium mb-4">{t.contact.form.successTitle}</h2>
                <p className="text-muted-foreground mb-8">
                  {t.contact.form.successMessage}
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-all"
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">{t.contact.form.name}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={t.contact.form.placeholderName}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">{t.contact.form.email}</label>
                    <input 
                      required
                      type="email" 
                      placeholder={t.contact.form.placeholderEmail}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">{t.contact.form.subject}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t.contact.form.placeholderSubject}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground ml-1">{t.contact.form.message}</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder={t.contact.form.placeholderMessage}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-medium text-lg hover:bg-accent transition-all duration-300 disabled:opacity-50"
                >
                  {formState === 'submitting' ? t.contact.form.sending : t.contact.form.send}
                  <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${formState === 'submitting' ? 'animate-pulse' : ''}`} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* WhatsApp Card */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#25D366]/10 border border-[#25D366]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-[#25D366] -rotate-12">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4 relative z-10 text-[#25D366]">{t.contact.whatsappTitle}</h3>
              <p className="text-muted-foreground mb-8 relative z-10 max-w-xs">
                {t.contact.whatsappDescription}
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:scale-105 transition-transform relative z-10"
              >
                {t.contact.whatsappCta}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Other Channels */}
            <div className="space-y-8 pl-4">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{t.nav.contact}</h4>
                  <a href="mailto:hello@seydinadiop.com" className="text-xl font-medium hover:text-accent transition-colors">
                    hello@seydinadiop.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{t.contact.location}</h4>
                  <p className="text-xl font-medium">Dakar, Senegal</p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://linkedin.com/in/seydina-diop" target="_blank" className="p-6 rounded-3xl surface-card hover:bg-white/5 transition-colors border border-white/5 text-center">
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/seydina-diop" target="_blank" className="p-6 rounded-3xl surface-card hover:bg-white/5 transition-colors border border-white/5 text-center">
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
