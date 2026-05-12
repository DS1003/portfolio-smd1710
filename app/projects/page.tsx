'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/providers/language-provider'

export default function ProjectsArchive() {
  const { language, t } = useLanguage()
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category[language])))]
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category[language] === filter)

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-8xl font-medium tracking-tight mb-8"
          >
            Archive <span className="text-muted-foreground">/</span> {t.work.badge}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-foreground text-background' 
                    : 'glass hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.id}`} className="block space-y-6">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden surface-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 max-w-md">
                      {project.description[language]}
                    </p>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                    {project.date}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
