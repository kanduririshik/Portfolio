import React from 'react'
import { motion } from 'framer-motion'
import { Code2, ExternalLink, Terminal } from 'lucide-react'

const projects = [
  {
    title: 'Hope Hospitals',
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://hospitalhope.niat.tech',
    gradient: 'from-blue-500/20 to-cyan-400/20',
    accentColor: 'bg-blue-500',
    description: 'A healthcare web app featuring online doctor consultations, appointment booking, patient portal, and interactive service information.'
  },
  {
    title: 'FlexHarbour',
    tech: ['HTML', 'CSS', 'Responsive'],
    link: 'https://flexharbour.niat.tech',
    gradient: 'from-purple-500/20 to-pink-400/20',
    accentColor: 'bg-purple-500',
    description: 'A modern responsive landing page for a logistics company, highlighting service routes, price calculator, and user testimonial carousels.'
  },
  {
    title: 'SynVoyanix',
    tech: ['ReactJS', 'JS'],
    link: 'https://synvoyanix4.base44.app',
    gradient: 'from-indigo-500/20 to-blue-400/20',
    accentColor: 'bg-indigo-500',
    description: 'A React web platform providing real-time file and notes sharing, active collaborative boards, and dynamic workspace synchronization.'
  },
  {
    title: 'TravelSync',
    tech: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'Responsive Web Design'],
    link: 'https://travelsync-navy.vercel.app/',
    gradient: 'from-sky-500/20 to-teal-400/20',
    accentColor: 'bg-sky-500',
    description: [
      'Built a travel planning and booking platform using ReactJS, JavaScript, and CSS.',
      'Implemented destination exploration, trip management, and booking features.',
      'Designed a responsive and user-friendly interface optimized for desktop and mobile devices.'
    ]
  },
  {
    title: 'Cine Verse',
    tech: ['Python'],
    link: null,
    gradient: 'from-amber-500/20 to-orange-400/20',
    accentColor: 'bg-amber-500',
    description: 'A CLI Python terminal program to recommend movies, search genre database, and track viewed cinema items with rating metrics.'
  },
  {
    title: 'Tower of Hanoi',
    tech: ['Python'],
    link: null,
    gradient: 'from-green-500/20 to-emerald-400/20',
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
          return (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden shadow-sm flex flex-col h-full relative cursor-default border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Top Banner */}
              <div className={`h-36 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
                <Code2 className="w-12 h-12 text-foreground/20 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent z-10" />
                {/* Accent Color Dot */}
                <div className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full ${project.accentColor}`} />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow text-left space-y-4">
                {/* Title */}
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-1">
                    {project.title}
                  </h3>
                  {isExternal && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 duration-200" />
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
                      className="px-2.5 py-0.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA button */}
                <div className="pt-2">
                  {isExternal ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-xl text-center text-sm font-semibold border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none"
                    >
                      Visit Project Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full py-2 rounded-xl text-center text-xs font-medium bg-secondary text-muted-foreground flex items-center justify-center gap-2">
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
