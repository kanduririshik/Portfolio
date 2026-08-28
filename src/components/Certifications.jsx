import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, Download, X, Calendar, Building, ExternalLink, ShieldCheck, Award } from 'lucide-react'

import certAiAgents from '../assets/certificates/ai_agents_niat.png'
import certVicodathon from '../assets/certificates/vicodathon_hackathon.png'
import certAws from '../assets/certificates/aws_cloud_fundamentals.png'
import certBase44 from '../assets/certificates/31e3962a1_BASE44.png'
import certMasterclass from '../assets/certificates/7dc1b97a4_Masterclass.png'

const certificates = [
  {
    title: 'AI Agents 201 – Hands-On Workshop',
    org: 'NIAT × NxtWave',
    date: '13/04/2026',
    image: certAiAgents,
    fileName: 'AI_Agents_201_Workshop_NIAT.png',
    tag: 'Workshop',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    description: 'Hands-on practical experience building AI-driven solutions and agentic workflows.'
  },
  {
    title: "ViCoDathon 2026 – India's AI Vibe Coding Hackathon",
    org: 'ABTalks',
    date: '14/08/2026',
    image: certVicodathon,
    fileName: 'ViCoDathon_2026_Certificate_ABTalks.png',
    tag: 'Hackathon',
    credentialId: 'ABT-HK-6V3EP',
    verifyUrl: 'https://www.abtalks.in/verify/ABT-HK-6V3EP',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    description: 'Built The Interview Agent with team Rising Stars using cutting-edge AI tools.'
  },
  {
    title: 'AWS Cloud Computing Fundamentals',
    org: 'UpLearning × iRise',
    date: '2026',
    image: certAws,
    fileName: 'AWS_Cloud_Computing_Fundamentals_Certificate.png',
    tag: 'Webinar',
    gradient: 'from-orange-500/20 to-amber-500/20',
    description: 'Core concepts of cloud computing, Amazon Web Services architecture, and career opportunities.'
  },
  {
    title: 'Base44 – Hands-On App Building Workshop',
    org: 'NIAT × Base44',
    date: '18/11/2025',
    image: certBase44,
    fileName: 'Base44_App_Building_Workshop.png',
    tag: 'Workshop',
    gradient: 'from-amber-400/20 to-orange-400/20',
    description: 'Rapid prototyping and scalable full-stack web application development.'
  },
  {
    title: 'Applying Text Embeddings in LLM Systems',
    org: 'NIAT × Flipkart',
    date: '24/02/2026',
    image: certMasterclass,
    fileName: 'Applying_Text_Embeddings_Flipkart.png',
    tag: 'Masterclass',
    gradient: 'from-yellow-400/20 to-amber-500/20',
    description: 'Masterclass covering vector search, embeddings, and RAG systems architecture.'
  }
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const handleDownload = (imageUrl, fileName) => {
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => {
          return (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden shadow-sm flex flex-col h-full cursor-pointer relative border border-border transition-all duration-300 hover:ring-2 hover:ring-primary/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.015 }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image Area */}
              <div className="h-48 w-full overflow-hidden relative bg-secondary flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 backdrop-blur-sm shadow-sm">
                  {cert.tag}
                </span>

                {/* Zoom Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow text-left space-y-3.5">
                <h3 className="font-display font-bold text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="font-medium text-foreground/90">{cert.org}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>

                {cert.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2 pt-0.5">
                    {cert.description}
                  </p>
                )}

                {/* Card Actions */}
                <div className="pt-2 mt-auto flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-grow py-2 rounded-xl text-center text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus:outline-none flex items-center justify-center gap-1.5"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    View Certificate
                  </button>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-border transition-colors focus:outline-none"
                      title="Verify Certificate Online"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => handleDownload(cert.image, cert.fileName)}
                    className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-border transition-colors focus:outline-none"
                    title="Download certificate"
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
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-border bg-card/70">
                <div className="pr-4">
                  <h3 className="font-display font-bold text-base md:text-lg text-foreground text-left">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground text-left mt-0.5 flex flex-wrap items-center gap-2">
                    <span>{selectedCert.org}</span>
                    <span>•</span>
                    <span>{selectedCert.date}</span>
                    {selectedCert.credentialId && (
                      <>
                        <span>•</span>
                        <span className="font-mono text-emerald-500 font-semibold">
                          ID: {selectedCert.credentialId}
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors focus:outline-none shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="p-4 md:p-6 bg-slate-950/60 flex items-center justify-center overflow-auto flex-grow max-h-[70vh]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Actions */}
              <div className="p-4 flex flex-wrap justify-between items-center gap-3 border-t border-border bg-card/70">
                <div>
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold border border-border rounded-full hover:bg-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify on Official Site
                    </a>
                  )}
                </div>
                <div className="flex gap-2.5">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 text-xs font-semibold border border-border rounded-full hover:bg-secondary transition-colors focus:outline-none"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleDownload(selectedCert.image, selectedCert.fileName)}
                    className="px-5 py-2 text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 rounded-full flex items-center gap-1.5 transition-opacity focus:outline-none shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
