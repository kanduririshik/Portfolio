import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, Download, X, Calendar, Building } from 'lucide-react'

const imageBaseUrl = 'https://media.base44.com/images/public/69fdbe7186da288c7ad99d88/'

const certificates = [
  {
    title: 'Base44 – Hands-On App Building Workshop',
    org: 'NIAT × Base44',
    date: '18/11/2025',
    imageName: '31e3962a1_BASE44.png',
    tag: 'Workshop',
    gradient: 'from-orange-400/20 to-amber-400/20'
  },
  {
    title: 'AI Agents 201 – Hands-On Workshop',
    org: 'NxtWave Institute',
    date: '13/04/2026',
    imageName: '4851ee411_WORKSHOP.png',
    tag: 'Workshop',
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    title: 'Applying Text Embeddings in LLM Systems',
    org: 'NIAT × Flipkart',
    date: '24/02/2026',
    imageName: '7dc1b97a4_Masterclass.png',
    tag: 'Masterclass',
    gradient: 'from-amber-400/20 to-yellow-400/20'
  }
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const handleDownload = (imageUrl, fileName) => {
    // Standard link download implementation
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = fileName
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Credentials
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
          Certifications & Workshops
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => {
          const imageUrl = `${imageBaseUrl}${cert.imageName}`
          return (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden shadow-sm flex flex-col h-full cursor-pointer relative border border-border transition-all duration-300 hover:ring-2 hover:ring-primary/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Area */}
              <div className="h-44 w-full overflow-hidden relative bg-secondary">
                <img
                  src={imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200">
                  {cert.tag}
                </span>

                {/* Zoom Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow text-left space-y-3.5">
                <h3 className="font-display font-semibold text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{cert.org}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-grow py-2 rounded-xl text-center text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus:outline-none flex items-center justify-center gap-1.5"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    View Certificate
                  </button>
                  <button
                    onClick={() => handleDownload(imageUrl, cert.imageName)}
                    className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-border transition-colors focus:outline-none"
                    title="Download certificate image"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            {/* Backdrop Dismiss click area */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedCert(null)} />

            <motion.div
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative z-10 shadow-2xl border border-white/10"
              initial={{ scale: 0.75, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.75, y: 40, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
            >
              {/* Modal Header */}
              <div className="p-4 flex items-center justify-between border-b border-border bg-card/50">
                <div>
                  <h3 className="font-display font-bold text-sm md:text-base text-foreground text-left">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground text-left mt-0.5">
                    {selectedCert.org} • {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="p-4 md:p-6 bg-slate-950/40 flex items-center justify-center overflow-auto flex-grow max-h-[70vh]">
                <img
                  src={`${imageBaseUrl}${selectedCert.imageName}`}
                  alt={selectedCert.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Modal Actions */}
              <div className="p-4 flex justify-end gap-3 border-t border-border bg-card/50">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold border border-border rounded-full hover:bg-secondary transition-colors focus:outline-none"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownload(`${imageBaseUrl}${selectedCert.imageName}`, selectedCert.imageName)}
                  className="px-5 py-2 text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 rounded-full flex items-center gap-1.5 transition-opacity focus:outline-none shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Image
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
