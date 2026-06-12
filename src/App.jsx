import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import LoadingScreen from './components/LoadingScreen'
import BackgroundBlobs from './components/BackgroundBlobs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import './App.css'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      return saved ? JSON.parse(saved) : true // Default to dark mode
    }
    return true
  })

  // Theme synchronization
  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className="relative min-h-screen text-foreground transition-colors duration-300">
      {/* Background Decorative Layer */}
      <BackgroundBlobs />

      {/* Toast Notification Container */}
      <Toaster position="bottom-right" richColors />

      {/* Loading Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onDone={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content Layout */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          {/* Header Navigation */}
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          {/* Sections Stack */}
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Achievements />
            <Resume />
            <Contact />
          </main>

          {/* Page Footer */}
          <Footer />

          {/* Floating Actions */}
          <WhatsAppFAB />
        </div>
      )}
    </div>
  )
}
