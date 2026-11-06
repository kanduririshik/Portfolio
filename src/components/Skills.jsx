import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Terminal,
  Code2,
  Database,
  Brain,
  Sparkles,
  Layers,
  Cpu,
  Monitor,
  Globe,
  Sliders,
  Target,
  Palette,
  GitBranch,
  Camera,
  Film,
  TrendingUp,
  Workflow,
  Wrench,
  CheckCircle2
} from 'lucide-react'

// All Categorized Skills (Combining New & Old)
const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Core object-oriented languages, data structures, and algorithmic logic.',
    icon: Terminal,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accentColor: 'text-blue-500 dark:text-blue-400',
    iconBg: 'bg-blue-500/10',
    skills: [
      { name: 'C++', level: 80, badge: 'New', desc: 'OOP, STL & Problem Solving' },
      { name: 'Python', level: 88, badge: 'Core', desc: 'Scripting, AI, Backend' },
      { name: 'JavaScript', level: 82, badge: 'Core', desc: 'ES6+, Async, DOM' },
      { name: 'Data Structures', level: 75, badge: 'Core', desc: 'Arrays, Trees, Graphs' },
    ]
  },
  {
    title: 'Web & Frontend Development',
    description: 'Modern, performant web applications with responsive design and interactive UI.',
    icon: Code2,
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
    accentColor: 'text-cyan-500 dark:text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    skills: [
      { name: 'React.js', level: 85, badge: 'Core', desc: 'Hooks, Components, SPA' },
      { name: 'Tailwind CSS', level: 88, badge: 'Core', desc: 'Utility-First Styling' },
      { name: 'HTML5 & CSS3', level: 92, badge: 'Core', desc: 'Semantic, Modern Web' },
      { name: 'Responsive Web Design', level: 90, badge: 'Core', desc: 'Mobile-First Layouts' },
      { name: 'REST APIs & JSON', level: 78, badge: 'Core', desc: 'Client-Server Integration' },
      { name: 'Vite', level: 82, badge: 'New', desc: 'Fast Frontend Tooling' },
    ]
  },
  {
    title: 'Artificial Intelligence & ML',
    description: 'Foundations of AI, agentic architectures, and prompt engineering.',
    icon: Brain,
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    accentColor: 'text-purple-500 dark:text-purple-400',
    iconBg: 'bg-purple-500/10',
    skills: [
      { name: 'Foundations of AI (FAI)', level: 82, badge: 'New', desc: 'Core AI Concepts' },
      { name: 'AI Application Dev', level: 80, badge: 'New', desc: 'Intelligent Software' },
      { name: 'Prompt Engineering', level: 86, badge: 'New', desc: 'LLM Workflows & Agents' },
      { name: 'Generative AI & LLMs', level: 80, badge: 'New', desc: 'Gemini, OpenAI Integration' },
    ]
  },
  {
    title: 'Database Management',
    description: 'Relational & NoSQL database structures, schema design, and query optimization.',
    icon: Database,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    skills: [
      { name: 'SQL', level: 75, badge: 'Core', desc: 'Relational Queries & Joins' },
      { name: 'Advanced DBMS', level: 78, badge: 'New', desc: 'Normalization & Schema Design' },
      { name: 'MongoDB', level: 70, badge: 'New', desc: 'NoSQL Document Store' },
    ]
  },
  {
    title: 'Tools & Platforms',
    description: 'Distributed version control, developer tools, and cloud deployment pipelines.',
    icon: Layers,
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'text-amber-500 dark:text-amber-400',
    iconBg: 'bg-amber-500/10',
    skills: [
      { name: 'Git & GitHub', level: 85, badge: 'Core', desc: 'Version Control & Collab' },
      { name: 'VS Code', level: 90, badge: 'Core', desc: 'Primary IDE & Extensions' },
      { name: 'Vercel & GitHub Pages', level: 84, badge: 'New', desc: 'CI/CD & Cloud Hosting' },
      { name: 'Linux / CLI Basics', level: 75, badge: 'Core', desc: 'Terminal Navigation' },
    ]
  },
  {
    title: 'Engineering Concepts',
    description: 'Software development methodologies, UI/UX thinking, and problem solving.',
    icon: Target,
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    accentColor: 'text-rose-500 dark:text-rose-400',
    iconBg: 'bg-rose-500/10',
    skills: [
      { name: 'Problem Solving', level: 82, badge: 'Core', desc: 'Algorithmic Thinking' },
      { name: 'UI/UX Design', level: 78, badge: 'Core', desc: 'Intuitive User Journeys' },
      { name: 'Frontend Architecture', level: 80, badge: 'Core', desc: 'Component Reusability' },
      { name: 'Offline-First / PWA', level: 74, badge: 'New', desc: 'Resilient Web Apps' },
    ]
  }
]

// Creative & Multidisciplinary Skills
const specialSkills = [
  {
    name: 'PHOTOGRAPHY',
    tag: 'Visual Arts',
    icon: Camera,
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    desc: 'Composition, Lighting & Framing'
  },
  {
    name: 'VIDEO & PHOTO EDITING',
    tag: 'Post-Production',
    icon: Film,
    color: 'text-rose-500 dark:text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
    desc: 'Color Grading & Motion Cuts'
  },
  {
    name: 'BUSINESS ENTHUSIAST',
    tag: 'Strategy',
    icon: TrendingUp,
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    desc: 'Startup Metrics, Models & Market Growth'
  }
]

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'Programming Languages', label: 'Programming' },
    { id: 'Web & Frontend Development', label: 'Web & Frontend' },
    { id: 'Artificial Intelligence & ML', label: 'AI & ML' },
    { id: 'Database Management', label: 'Databases' },
    { id: 'Tools & Platforms', label: 'Tools' },
  ]

  const displayedCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.title === activeFilter)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 bg-secondary/30 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Abilities
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
            Skills & Knowledge
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            A comprehensive overview of my technical stack — spanning foundational programming, full-stack web engineering, artificial intelligence, and databases.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                    : 'glass text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/60'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  layout
                  key={category.title}
                  className="group glass rounded-2xl p-6 shadow-sm flex flex-col justify-between cursor-default border border-border transition-all duration-300 relative overflow-hidden text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                  whileHover={{ y: -6, scale: 1.015 }}
                >
                  {/* Top-corner gradient accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity`} />

                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className={`w-11 h-11 rounded-xl ${category.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-border/50`}>
                        <Icon className={`w-5 h-5 ${category.accentColor}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <span className="text-[11px] text-muted-foreground font-medium">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    {/* Category Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                      {category.description}
                    </p>

                    {/* Skills with Progress & Descriptions */}
                    <div className="space-y-3.5">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-foreground flex items-center gap-1.5">
                              {skill.name}
                              {skill.badge === 'New' && (
                                <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-primary/15 text-primary border border-primary/30">
                                  New
                                </span>
                              )}
                            </span>
                            <span className="text-[11px] font-semibold text-primary">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-1.5 w-full bg-secondary/80 rounded-full overflow-hidden border border-border/30">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.15 + (sIdx * 0.05),
                                ease: 'easeOut'
                              }}
                            />
                          </div>

                          <div className="text-[10px] text-muted-foreground">
                            {skill.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Special Skills Section */}
        <div className="mt-16 pt-10 border-t border-border/60">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
              Special & Creative Interests
            </h3>
            <p className="text-xs text-muted-foreground mt-1 tracking-wide">
              Creative & strategic multidisciplinary pursuits beyond code
            </p>
          </div>

          {/* 3 Special Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {specialSkills.map((special, idx) => {
              const Icon = special.icon
              return (
                <motion.div
                  key={idx}
                  className="glass rounded-xl p-5 border border-border/80 flex flex-col items-center text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 cursor-default group shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className={`w-11 h-11 rounded-xl ${special.bg} border flex items-center justify-center shrink-0 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${special.color}`} />
                  </div>
                  <span className="font-display font-bold text-xs tracking-wider uppercase text-foreground group-hover:text-primary transition-colors">
                    {special.name}
                  </span>
                  <span className="text-[10px] text-primary/80 font-semibold uppercase tracking-wider mt-0.5">
                    {special.tag}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {special.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
