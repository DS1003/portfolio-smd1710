'use client'

import { motion, Variants } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  tag = 'span'
}: SplitTextProps) {
  const words = text.split(' ')
  const Tag = tag as any

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: (delay / 1000) * i },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <Tag className={`block w-full ${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
