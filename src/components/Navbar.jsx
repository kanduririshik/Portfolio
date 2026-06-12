import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Certs', id: 'certifications' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Active Section Detection (Scroll Spy)
      const scrollPosition = window.scrollY + 150
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el) {
          const top = el.offsetTop
          if (top <= scrollPosition) {
            setActiveSection(navItems[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Trigger on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const navbarHeight = 64
      const targetOffset = el.offsetTop - navbarHeight + 5
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 md:px-12 ${
        isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Left: Logo */}
      <button
        onClick={() => handleNavClick('hero')}
        className="flex items-center gap-2.5 focus:outline-none group text-left"
        aria-label="Rishik Kanduri Home"
      >
        <motion.img
          src="/logo.png"
          alt="RK Logo"
          className="h-8 w-auto object-contain dark:invert"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <div className="hidden sm:flex flex-col">
          <span className="font-display font-bold text-xs tracking-wide text-foreground leading-none">RISHIK KANDURI</span>
          <span className="text-[7px] text-muted-foreground uppercase tracking-widest leading-none mt-0.5">Designer • Developer • Creator</span>
        </div>
      </button>

      {/* Center: Desktop Nav Items */}
      <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Right: Dark Mode & Hamburger Toggle */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-secondary md:hidden text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 glass-nav shadow-lg p-4 flex flex-col space-y-2 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-2.5 px-4 text-left text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
