import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, Laptop } from 'lucide-react'

const educationEntries = [
  {
    institution: 'Aurora Deemed University',
    degree: 'B.Tech in Computer Science',
    period: '2024 – Present',
    description: 'Pursuing foundational studies in computer systems, database design, algorithms, and core software development methodologies. Active participation in technical clubs and hands-on coding challenges.',
    borderColor: 'border-blue-500',
    iconColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    institution: 'NIAT (Nxt Wave Institutions of Advanced Technologies)',
    degree: 'Industry-Ready Software Engineering Certification',
    period: '2024 – Present',
    description: 'Acquiring hands-on industry standards in full-stack web architectures, deployment configurations, database management, and building user-centric interfaces. Built several real-world client prototypes.',
    borderColor: 'border-indigo-500',
    iconColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    institution: 'Self-Learning & Workshops',
    degree: 'Continuous Modern Tech Education',
    period: 'Ongoing',
    description: 'Participating in developer conferences, masterclasses, and building utility command line projects. Focusing on AI agents, LLM integrations, and modern JavaScript layout frameworks.',
    borderColor: 'border-purple-500',
    iconColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    icon: <Laptop className="w-5 h-5" />
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 md:px-12 bg-secondary/30 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Path
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
            Education Timeline
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto text-left">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-2">
            {educationEntries.map((entry, idx) => (
              <div key={idx} className="relative pl-16 md:pl-20 pb-10 last:pb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-3.5 md:left-5 top-4 w-5 h-5 rounded-full bg-card border-2 ${entry.borderColor} flex items-center justify-center z-10`}>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Timeline Card */}
                <motion.div
                  className="glass rounded-2xl p-6 shadow-sm cursor-default flex flex-col md:flex-row md:items-start gap-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  whileHover={{ x: 4 }}
                >
                  {/* Icon Box */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${entry.iconColor}`}>
                    {entry.icon}
                  </div>

                  {/* Content Details */}
                  <div className="flex-grow space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {entry.institution}
                      </h3>
                      <span className="text-xs text-primary font-semibold px-2.5 py-0.5 rounded-full bg-primary/10">
                        {entry.period}
                      </span>
                    </div>

                    <h4 className="text-primary text-sm font-semibold">
                      {entry.degree}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
