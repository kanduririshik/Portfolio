import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react'
import logoImg from '../assets/logo.png'

export default function Footer() {
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
    <footer className="py-12 px-4 sm:px-6 md:px-12 bg-secondary/20 border-t border-border w-full relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Gradient Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-10" />

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <button
              onClick={() => scrollSection('hero')}
              className="flex items-center gap-2.5 focus:outline-none group text-left"
              aria-label="Scroll to top"
            >
              <motion.img
                src={logoImg}
                alt="RK Logo"
                className="h-8 w-8 object-contain rounded-full dark:invert"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs tracking-wide text-foreground leading-none">RISHIK KANDURI</span>
                <span className="text-[7px] text-muted-foreground uppercase tracking-widest leading-none mt-0.5">Designer • Developer • Creator</span>
              </div>
            </button>
            <p className="text-xs text-muted-foreground">
              Modern Luxury Portfolio • B.Tech CSE Student
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { icon: <Github className="w-4 h-4" />, href: 'https://github.com/kanduririshik' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/rishik-kanduri-a50a02370' },
              { icon: <Mail className="w-4 h-4" />, href: 'mailto:kanduririshik@gmail.com' },
              { icon: <Phone className="w-4 h-4" />, href: 'tel:+916309002842' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary flex items-center justify-center text-muted-foreground transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © 2025 Rishik Kanduri. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" />
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
