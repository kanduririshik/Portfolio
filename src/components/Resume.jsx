import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Eye, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const RESUME_URL = "https://media.base44.com/files/public/69fdbe7186da288c7ad99d88/eca709980_RKNXT.pdf"
const RESUME_FILENAME = "Rishik_Kanduri_Resume.pdf"

export default function Resume() {
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

  function viewResume() {
    window.open(RESUME_URL, '_blank')
  }

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 md:px-12 bg-secondary/30 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Curriculum Vitae
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
            My Resume
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-8 md:p-12 shadow-sm text-center flex flex-col items-center space-y-8 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Resume Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText className="w-8 h-8" />
            </div>

            {/* Title / Description */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                Professional PDF Resume
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                Download my comprehensive, ATS-optimized developer resume or preview it in a new window. It includes clickable project links and full technical experience details.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {['ATS Optimized', 'Clickable Links', 'Modern Design', 'PDF Export'].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">
              <motion.button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/45 flex items-center justify-center gap-2 transition-all disabled:opacity-50 focus:outline-none"
                whileHover={{ scale: 1.03 }}
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
                    Download Resume PDF
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={viewResume}
                disabled={isDownloading}
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary flex items-center justify-center gap-2 transition-all disabled:opacity-50 focus:outline-none"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Eye className="w-4 h-4 text-muted-foreground" />
                View Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
