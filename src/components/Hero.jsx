import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone, ArrowRight, Download, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const RESUME_URL = "https://media.base44.com/files/public/69fdbe7186da288c7ad99d88/eca709980_RKNXT.pdf"
const RESUME_FILENAME = "Rishik_Kanduri_Resume.pdf"

const roles = ['B.Tech Student', 'Python Developer', 'Frontend Enthusiast', 'UI/UX Explorer']

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  async function handleDownload() {
    setIsDownloading(true)
    try {
      const res = await fetch(RESUME_URL)
      if (!res.ok) throw new Error('unavailable')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = RESUME_FILENAME
      a.click()
      URL.revokeObjectURL(url)
      toast.success('Resume downloaded!', { description: RESUME_FILENAME })
    } catch {
      toast.error('Resume currently unavailable. Please try again later.')
    } finally {
      setIsDownloading(false)
    }
  }

  // Typewriter effect
  useEffect(() => {
    let timer
    const role = roles[currentRoleIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1))
      }, 35)
    } else {
      timer = setTimeout(() => {
        setCurrentText(role.slice(0, currentText.length + 1))
      }, 75)
    }

    if (!isDeleting && currentText === role) {
      timer = setTimeout(() => setIsDeleting(true), 1600)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentRoleIndex])

  const scrollSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const navbarHeight = 64
      window.scrollTo({
        top: el.offsetTop - navbarHeight + 5,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 md:px-12 flex flex-col justify-center max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column - Text Block */}
        <motion.div
          className="order-2 lg:order-1 flex flex-col items-start text-left space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Availability Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs px-4 py-1.5 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to Internships & Opportunities
          </motion.div>

          {/* Name Block */}
          <div className="space-y-1">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-none">
              KANDURI
            </h1>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-hero tracking-tight leading-none">
              RISHIK
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="flex items-center h-8">
            <span className="text-base sm:text-lg font-medium text-muted-foreground">
              {currentText}
            </span>
            <span className="w-[2px] h-5 bg-primary ml-1 animate-pulse" style={{ animationDuration: '0.5s' }} />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
            I am a passionate developer focused on building functional, responsive web interfaces and solving complex logical challenges. Currently exploring full-stack engineering and AI integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 w-full">
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2 focus:outline-none disabled:opacity-75"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Downloading…
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download Resume
                </>
              )}
            </motion.button>
            <motion.button
              onClick={() => scrollSection('contact')}
              className="rounded-full border border-border bg-card text-foreground px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors focus:outline-none"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
            <motion.button
              onClick={() => scrollSection('projects')}
              className="rounded-full border border-border bg-card text-foreground px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors focus:outline-none"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="pt-3 flex items-center gap-2">
            {[
              { icon: <Github className="w-5 h-5" />, href: 'https://github.com/kanduririshik' },
              { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/rishik-kanduri-a50a02370' },
              { icon: <Mail className="w-5 h-5" />, href: 'mailto:kanduririshik@gmail.com' },
              { icon: <Phone className="w-5 h-5" />, href: 'tel:+916309002842' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary hover:shadow-md text-muted-foreground transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Avatar */}
        <motion.div
          className="order-1 lg:order-2 flex flex-col items-center justify-center relative py-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Spinning Ring */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-primary/25 animate-spin-slow flex items-center justify-center absolute z-0" />

          {/* Glow Blob */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/25 to-indigo-500/20 blur-2xl -z-10" />

          {/* Photo Circle */}
          <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl shadow-primary/20 animate-pulse-slow">
            <img
              src="https://media.base44.com/images/public/69fdbe7186da288c7ad99d88/21fce2104_252U1R6117.JPG"
              alt="Kanduri Rishik"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Badge */}
          <motion.div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 glass border rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap shadow-sm"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            B.Tech First Year ✨
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer flex flex-col items-center gap-1"
        onClick={() => scrollSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}
