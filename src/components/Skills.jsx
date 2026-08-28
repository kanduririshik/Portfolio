import React from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Sparkles,
  Terminal,
  Code2,
  Camera,
  Film,
  TrendingUp
} from 'lucide-react'

const mainSkills = [
  {
    title: 'AI & Machine Learning',
    description: 'AI/ML concepts & intelligent solutions',
    icon: Brain,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accentColor: 'text-blue-500 dark:text-blue-400',
    iconBg: 'bg-blue-500/10'
  },
  {
    title: 'Generative AI',
    description: 'LLMs, AI tools & creative applications',
    icon: Sparkles,
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    accentColor: 'text-purple-500 dark:text-purple-400',
    iconBg: 'bg-purple-500/10'
  },
  {
    title: 'Prompt Engineering',
    description: 'Advanced prompting & AI workflows',
    icon: Terminal,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10'
  },
  {
    title: 'Web Development',
    description: 'Modern & responsive web applications',
    icon: Code2,
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    accentColor: 'text-cyan-500 dark:text-cyan-400',
    iconBg: 'bg-cyan-500/10'
  }
]

const specialSkills = [
  {
    name: 'PHOTOGRAPHY',
    icon: Camera,
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20'
  },
  {
    name: 'VIDEO & PHOTO EDITING',
    icon: Film,
    color: 'text-rose-500 dark:text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20'
  },
  {
    name: 'BUSINESS ENTHUSIAST',
    icon: TrendingUp,
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 bg-secondary/30 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Abilities
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
            Skills & Knowledge
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
        </div>

        {/* 4 Main Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                className="group glass rounded-2xl p-6 shadow-sm flex flex-col justify-between cursor-default border border-border transition-all duration-300 relative overflow-hidden text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Subtle top-corner gradient accent */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${skill.gradient} rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl ${skill.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-border/50`}>
                    <Icon className={`w-6 h-6 ${skill.accentColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Special Skills Section */}
        <div className="mt-16 pt-8 border-t border-border/60">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
              Special Skills
            </h3>
            <p className="text-xs text-muted-foreground mt-1 tracking-wide">
              Creative & strategic multidisciplinary interests
            </p>
          </div>

          {/* 3 Horizontal Special Skill Badges/Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {specialSkills.map((special, idx) => {
              const Icon = special.icon
              return (
                <motion.div
                  key={idx}
                  className="glass rounded-xl px-5 py-4 border border-border/80 flex items-center justify-center gap-3.5 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 cursor-default group shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className={`w-9 h-9 rounded-lg ${special.bg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-4 h-4 ${special.color}`} />
                  </div>
                  <span className="font-display font-bold text-xs md:text-sm tracking-wider uppercase text-foreground group-hover:text-primary transition-colors">
                    {special.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
