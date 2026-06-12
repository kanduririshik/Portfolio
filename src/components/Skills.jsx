import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code, Database, FileCode, Sliders, Cpu, Layers, GitBranch, Monitor, Globe, Target, Palette } from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 85, icon: <Terminal className="w-4 h-4 text-primary" /> },
      { name: 'JavaScript', level: 75, icon: <FileCode className="w-4 h-4 text-primary" /> },
      { name: 'HTML', level: 92, icon: <Code className="w-4 h-4 text-primary" /> },
      { name: 'CSS', level: 88, icon: <Sliders className="w-4 h-4 text-primary" /> },
      { name: 'SQL', level: 65, icon: <Database className="w-4 h-4 text-primary" /> },
    ]
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'ReactJS', level: 72, icon: <Cpu className="w-4 h-4 text-primary" /> },
      { name: 'Tailwind CSS', level: 80, icon: <Layers className="w-4 h-4 text-primary" /> },
      { name: 'GitHub', level: 82, icon: <GitBranch className="w-4 h-4 text-primary" /> },
      { name: 'Responsive Design', level: 88, icon: <Monitor className="w-4 h-4 text-primary" /> },
      { name: 'REST APIs', level: 62, icon: <Globe className="w-4 h-4 text-primary" /> },
    ]
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'Frontend Dev', level: 82, icon: <Code className="w-4 h-4 text-primary" /> },
      { name: 'Problem Solving', level: 78, icon: <Target className="w-4 h-4 text-primary" /> },
      { name: 'UI/UX Design', level: 70, icon: <Palette className="w-4 h-4 text-primary" /> },
      { name: 'Data Structures', level: 65, icon: <Database className="w-4 h-4 text-primary" /> },
    ]
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
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Groups Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col text-left">
              <h3 className="font-display font-semibold text-sm text-primary uppercase tracking-wider mb-5">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-xl p-4 shadow-sm flex flex-col space-y-3 cursor-default"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: index * 0.05 + groupIdx * 0.1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.1,
                          delay: 0.4 + (index * 0.07),
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
