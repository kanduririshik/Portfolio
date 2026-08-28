import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logoImg from '../assets/logo.png'

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onDone()
          }, 300)
          return 100
        }
        return prev + 4
      })
    }, 40)

    return () => clearInterval(interval)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Brand mark */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={logoImg}
            alt="Rishik Kanduri Logo"
            className="h-20 w-20 object-contain rounded-full dark:invert"
          />
          <div className="text-center">
            <h2 className="font-display font-bold text-lg md:text-xl tracking-wide text-foreground leading-none">RISHIK KANDURI</h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none mt-1.5">Designer • Developer • Creator</p>
          </div>
        </motion.div>

        {/* Subtitle */}
        <p className="text-sm tracking-widest uppercase text-muted-foreground font-medium animate-pulse">
          Loading Portfolio
        </p>

        {/* Progress bar container */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>
          {/* Percentage */}
          <span className="text-xs text-muted-foreground font-mono">
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  )
}
