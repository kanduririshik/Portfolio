import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  HeartPulse,
  ExternalLink,
  Github
} from 'lucide-react'

const projects = [
  {
    title: 'StartupLens AI',
    tag: 'AI Opportunity Intelligence',
    icon: Sparkles,
    tech: ['Next.js', 'React', 'FastAPI', 'Python', 'Google Gemini', 'Tailwind CSS'],
    link: 'https://frontend-sigma-nine-1sehyiki3f.vercel.app/',
    githubUrl: 'https://github.com/lingampallisaihashwanth/startuplens-ai',
    gradient: 'from-indigo-500/25 via-purple-500/15 to-indigo-900/20',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    accentColor: 'bg-indigo-500',
    description: [
      'AI-powered startup research and market opportunity intelligence platform.',
      'Analyzes startup ideas and market signals using Google Gemini and live web intelligence.',
      'Generates evidence-backed problem-solution validation, competitor insights, and strategic reports.'
    ]
  },
  {
    title: 'LivIQ Offline App',
    tag: 'Offline Health Intelligence',
    icon: HeartPulse,
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Offline-First', 'PWA'],
    link: 'https://liviq-offline-app.vercel.app/',
    gradient: 'from-emerald-500/25 via-teal-500/15 to-emerald-900/20',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
    accentColor: 'bg-emerald-500',
    description: [
      'Offline-focused health intelligence application providing three layers of personal protection.',
      'Provides emergency response assistance, rapid hospital discovery, and medicine safety verification.',
      'Designed for everyday wellness monitoring with a responsive, offline-first interface across desktop and mobile.'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Featured Work
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
          Recent Projects
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
      </div>

      {/* Grid - Exactly 2 Projects */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => {
          const isExternal = !!project.link
          const ProjectIcon = project.icon
          return (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden shadow-sm flex flex-col h-full relative cursor-default border border-border transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              {/* Top Banner with Brand Emblem Logo */}
              <div className={`h-44 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden border-b border-border/40`}>
                {/* Background Watermark Icon */}
                <ProjectIcon className="absolute -right-3 -bottom-3 w-32 h-32 text-foreground/5 dark:text-white/5 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:opacity-10 z-0 pointer-events-none" />

                {/* Category Pill Badge */}
                <div className="absolute top-3.5 left-3.5 z-20">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${project.badgeBg} ${project.iconColor}`}>
                    {project.tag}
                  </span>
                </div>

                {/* Accent Color Status Dot */}
                <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${project.accentColor} shadow-sm animate-pulse`} />
                </div>

                {/* Center Brand Emblem / Logo Box */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-card/85 dark:bg-card/90 backdrop-blur-md shadow-md border border-border/80 flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                  >
                    <ProjectIcon className={`w-8 h-8 ${project.iconColor} transition-transform duration-300 group-hover:scale-105`} />
                  </motion.div>
                </div>

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent z-0 pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {isExternal && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Open ${project.title} live link`}
                    >
                      <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                    </a>
                  )}
                </div>

                {/* Description */}
                {Array.isArray(project.description) ? (
                  <ul className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-grow space-y-1.5 list-disc pl-4 text-left">
                    {project.description.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-0.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="pt-3 mt-auto flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow py-2.5 px-4 rounded-xl text-center text-sm font-semibold border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-xl text-center text-sm font-semibold border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none shadow-sm text-foreground"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

