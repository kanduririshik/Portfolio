import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket, Layers, Brain, Heart } from 'lucide-react'

function Counter({ value, duration = 1400 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = parseInt(value, 10)
    if (isNaN(end)) return

    const totalSteps = 40
    const increment = end / totalSteps
    const stepTime = Math.max(10, Math.floor(duration / totalSteps))

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

const stats = [
  {
    icon: <Rocket className="w-6 h-6" />,
    value: '6',
    suffix: '+',
    label: 'Projects Built',
    desc: 'Real-world web & Python apps',
    colorClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    value: '3',
    suffix: '+',
    label: 'Workshops Attended',
    desc: 'AI, full-stack & web dev',
    colorClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    value: '9',
    suffix: '+',
    label: 'Technologies Learned',
    desc: 'Python, React, JS, SQL & more',
    colorClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    value: '100',
    suffix: '%',
    label: 'Passion for Tech',
    desc: 'Frontend & AI enthusiast',
    colorClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 md:px-12 bg-secondary/30 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            My Stats
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
            Achievements
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center space-y-3 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.colorClass}`}>
                {stat.icon}
              </div>

              <div className="font-display font-black text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>

              <h3 className="font-display font-semibold text-sm text-foreground">
                {stat.label}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
