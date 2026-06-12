import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blob 1 */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute top-[30%] right-[-100px] w-[420px] h-[420px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/12 blur-3xl"
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -70, 0],
          scale: [1, 0.85, 1.1, 1]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-blue-400/8 dark:bg-blue-400/10 blur-3xl"
        animate={{
          x: [0, 50, -70, 0],
          y: [0, -50, 80, 0]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
