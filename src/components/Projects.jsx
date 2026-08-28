import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Activity,
  HeartPulse,
  Ship,
  Share2,
  Compass,
  Film,
  Layers,
  ExternalLink,
  Terminal
} from 'lucide-react'

const projects = [
  {
    title: 'Glory Simon Interiors CRM',
    tag: 'CRM & Client Hub',
    icon: Building2,
    brandInitials: 'GS',
    tech: ['React', 'Tailwind CSS', 'CRM Pipeline', 'Full Stack'],
    link: 'https://glory-simon.vercel.app/',
    gradient: 'from-amber-500/25 via-orange-500/15 to-amber-900/20',
    iconColor: 'text-amber-500 dark:text-amber-400',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    accentColor: 'bg-amber-500',
    description: [
      'Luxury interior design CRM and client operations platform.',
      'Manages leads, site visit logs, quotations, and team workflows.',
      'Features high-end luxury aesthetics with responsive dashboards.'
    ]
  },
  {
    title: 'NAB Connect',
    tag: 'Biotech & Logistics',
    icon: Activity,
    brandInitials: 'NAB',
    tech: ['React', 'Leaflet Maps', 'Geospatial Tracking', 'Full Stack'],
    link: 'https://nab-connect.vercel.app',
    gradient: 'from-emerald-500/25 via-teal-500/15 to-emerald-900/20',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
    accentColor: 'bg-emerald-500',
    description: [
      'Full-stack management portal for New Age Biologics (NAB).',
      'Integrates interactive Leaflet maps for field operations and logistics.',
      'Real-time supply tracking, distribution metrics, and modern analytics.'
    ]
  },
  {
    title: 'Hope Hospitals',
    tag: 'Healthcare Portal',
    icon: HeartPulse,
    brandInitials: 'HH',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://hospitalhope.niat.tech',
    gradient: 'from-blue-500/25 via-cyan-500/15 to-blue-900/20',
    iconColor: 'text-blue-500 dark:text-blue-400',
    badgeBg: 'bg-blue-500/10 border-blue-500/30',
    accentColor: 'bg-blue-500',
    description: 'A healthcare web app featuring online doctor consultations, appointment booking, patient portal, and interactive service information.'
  },
  {
    title: 'FlexHarbour',
    tag: 'Freight & Logistics',
    icon: Ship,
    brandInitials: 'FH',
    tech: ['HTML', 'CSS', 'Responsive'],
    link: 'https://flexharbour.niat.tech',
    gradient: 'from-purple-500/25 via-pink-500/15 to-purple-900/20',
    iconColor: 'text-purple-500 dark:text-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/30',
    accentColor: 'bg-purple-500',
    description: 'A modern responsive landing page for a logistics company, highlighting service routes, price calculator, and user testimonial carousels.'
  },
  {
    title: 'SynVoyanix',
    tag: 'Workspace Collab',
    icon: Share2,
    brandInitials: 'SV',
    tech: ['ReactJS', 'JS'],
    link: 'https://synvoyanix4.base44.app',
    gradient: 'from-indigo-500/25 via-blue-500/15 to-indigo-900/20',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/30',
    accentColor: 'bg-indigo-500',
    description: 'A React web platform providing real-time file and notes sharing, active collaborative boards, and dynamic workspace synchronization.'
  },
  {
    title: 'TravelSync',
    tag: 'Trip Planning',
    icon: Compass,
    brandInitials: 'TS',
    tech: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'Responsive Web Design'],
    link: 'https://travelsync-navy.vercel.app/',
    gradient: 'from-sky-500/25 via-teal-500/15 to-sky-900/20',
    iconColor: 'text-sky-500 dark:text-sky-400',
    badgeBg: 'bg-sky-500/10 border-sky-500/30',
    accentColor: 'bg-sky-500',
    description: [
      'Built a travel planning and booking platform using ReactJS, JavaScript, and CSS.',
      'Implemented destination exploration, trip management, and booking features.',
      'Designed a responsive and user-friendly interface optimized for desktop and mobile devices.'
    ]
  },
  {
    title: 'Cine Verse',
    tag: 'Cinema CLI',
    icon: Film,
    brandInitials: 'CV',
    tech: ['Python'],
    link: null,
    gradient: 'from-amber-500/25 via-orange-500/15 to-amber-900/20',
    iconColor: 'text-orange-500 dark:text-orange-400',
    badgeBg: 'bg-orange-500/10 border-orange-500/30',
    accentColor: 'bg-amber-500',
    description: 'A CLI Python terminal program to recommend movies, search genre database, and track viewed cinema items with rating metrics.'
  },
  {
    title: 'Tower of Hanoi',
    tag: 'Algorithm Puzzle',
    icon: Layers,
    brandInitials: 'TH',
    tech: ['Python'],
    link: null,
    gradient: 'from-green-500/25 via-emerald-500/15 to-green-900/20',
    iconColor: 'text-emerald-500 dark:text-emerald-400',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
    accentColor: 'bg-green-500',
    description: 'An interactive terminal and graphical puzzle solver, executing algorithms recursively to move discs between columns step-by-step.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          My Creations
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
          Recent Projects
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              {/* Top Banner with Brand Emblem Logo */}
              <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden border-b border-border/40`}>
                {/* Background Watermark Icon */}
                <ProjectIcon className="absolute -right-3 -bottom-3 w-28 h-28 text-foreground/5 dark:text-white/5 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:opacity-10 z-0 pointer-events-none" />

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
                    className={`w-16 h-16 rounded-2xl bg-card/85 dark:bg-card/90 backdrop-blur-md shadow-md border border-border/80 flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <ProjectIcon className={`w-8 h-8 ${project.iconColor} transition-transform duration-300 group-hover:scale-105`} />
                  </motion.div>
                </div>

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent z-0 pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow text-left space-y-4">
                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {isExternal && (
                    <ExternalLink className="w-4 h-4 mt-1 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  )}
                </div>

                {/* Description */}
                {Array.isArray(project.description) ? (
                  <ul className="text-muted-foreground text-xs leading-relaxed flex-grow space-y-1 list-disc pl-4 text-left">
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

                {/* CTA button */}
                <div className="pt-2 mt-auto">
                  {isExternal ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl text-center text-sm font-semibold border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none shadow-sm"
                    >
                      Visit Project Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl text-center text-xs font-medium bg-secondary text-muted-foreground flex items-center justify-center gap-2 border border-border/40">
                      <Terminal className="w-3.5 h-3.5" />
                      Local / CLI Project
                    </div>
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
