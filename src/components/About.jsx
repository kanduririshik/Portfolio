import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Target, Mail, Phone, MapPin, Calendar } from 'lucide-react'

const capabilities = [
  {
    icon: <Code2 className="w-6 h-6" />,
    label: 'Software Dev',
    description: 'Building real-world web apps',
    colorClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    label: 'UI Design',
    description: 'Clean, modern interfaces',
    colorClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'Full Stack',
    description: 'Frontend & backend skills',
    colorClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
  },
  {
    icon: <Target className="w-6 h-6" />,
    label: 'Problem Solver',
    description: 'Logical, efficient thinking',
    colorClass: 'bg-green-500/10 text-green-600 dark:text-green-400'
  }
]

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Get to know me
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
          About Me
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left - Bio Card */}
        <motion.div
          className="glass rounded-2xl p-8 text-left shadow-sm flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p className="text-base text-muted-foreground leading-relaxed" variants={itemVariants}>
            Hello! I am <span className="text-primary font-semibold">Kanduri Rishik</span>, a student at Aurora Deemed University pursuing a Bachelor of Technology in Computer Science. I enjoy transforming logical structures into functional software and creating visually engaging, highly interactive user experiences.
          </motion.p>
          <motion.p className="text-base text-muted-foreground leading-relaxed" variants={itemVariants}>
            My journey began with automation scripts in <span className="text-primary font-semibold">Python</span> and evolved into designing modern frontend layouts with <span className="text-primary font-semibold">ReactJS</span> and <span className="text-primary font-semibold">Tailwind CSS</span>. I focus on writing maintainable, clean code and expanding my knowledge of algorithmic problem solving.
          </motion.p>

          <motion.div className="border-t border-border pt-6 mt-2" variants={itemVariants}>
            <h3 className="font-display font-bold text-lg mb-4 text-foreground">Contact & Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Mail className="w-4 h-4 text-primary" />, text: 'kanduririshik@gmail.com', href: 'mailto:kanduririshik@gmail.com' },
                { icon: <Phone className="w-4 h-4 text-primary" />, text: '+91 6309002842', href: 'tel:+916309002842' },
                { icon: <MapPin className="w-4 h-4 text-primary" />, text: 'Hyderabad, India', href: null },
                { icon: <Calendar className="w-4 h-4 text-primary" />, text: 'Available for Internships', href: null },
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    {info.icon}
                  </div>
                  {info.href ? (
                    <a href={info.href} className="hover:text-primary transition-colors truncate">
                      {info.text}
                    </a>
                  ) : (
                    <span className="truncate">{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right - 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 w-full">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center space-y-3 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cap.colorClass}`}>
                {cap.icon}
              </div>
              <h3 className="font-display font-semibold text-base text-foreground">
                {cap.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
