import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, CheckCircle, AlertCircle, Send, MessageSquare, Loader2 } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'kanduririshik@gmail.com',
    href: 'mailto:kanduririshik@gmail.com'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 6309002842',
    href: 'tel:+916309002842'
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/kanduririshik',
    href: 'https://github.com/kanduririshik'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'rishik-kanduri',
    href: 'https://linkedin.com/in/rishik-kanduri-a50a02370'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | sent

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSendGmail = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Connection from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      const mailtoUrl = `mailto:kanduririshik@gmail.com?subject=${subject}&body=${body}`
      
      window.location.href = mailtoUrl
      setStatus('sent')

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setStatus('idle')
      }, 4000)
    }, 1000)
  }

  const handleSendWhatsApp = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setTimeout(() => {
      const text = encodeURIComponent(`Hello Rishik, my name is ${formData.name} (${formData.email}).\n\n${formData.message}`)
      const waUrl = `https://wa.me/916309002842?text=${text}`
      
      window.open(waUrl, '_blank')
      setStatus('sent')

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setStatus('idle')
      }, 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Reach Out
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-foreground">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left - Info Card */}
        <div className="glass rounded-2xl p-8 text-left shadow-sm flex flex-col space-y-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xl text-foreground">Let's Connect!</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am open to internships, project collaborations, and discussion about technology. Feel free to contact me directly or use the chat button below to open a conversation.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/15 transition-all duration-200"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center shrink-0 transition-colors">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://wa.me/916309002842?text=Hello%20Rishik%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity%2Fproject."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg shadow-green-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            Chat on WhatsApp
          </motion.a>
        </div>

        {/* Right - Contact Form */}
        <div className="glass rounded-2xl p-8 text-left shadow-sm relative overflow-hidden h-full min-h-[420px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-foreground">Message Dispatched</h4>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Thank you! Your action has been recorded. Redirecting composition client.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: null })
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-secondary/50 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition-all ${
                      errors.name ? 'border-red-400 focus:ring-red-400/30' : 'border-border focus:border-primary/50'
                    }`}
                    placeholder="John Doe"
                    disabled={status === 'loading'}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: null })
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-secondary/50 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition-all ${
                      errors.email ? 'border-red-400 focus:ring-red-400/30' : 'border-border focus:border-primary/50'
                    }`}
                    placeholder="john@example.com"
                    disabled={status === 'loading'}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: null })
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-secondary/50 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none ${
                      errors.message ? 'border-red-400 focus:ring-red-400/30' : 'border-border focus:border-primary/50'
                    }`}
                    placeholder="Hi Rishik, I'd like to talk about..."
                    disabled={status === 'loading'}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Action Buttons Row */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    onClick={handleSendGmail}
                    disabled={status === 'loading'}
                    className="flex-grow py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-50 focus:outline-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send via Gmail
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    onClick={handleSendWhatsApp}
                    disabled={status === 'loading'}
                    className="px-5 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 disabled:opacity-50 focus:outline-none"
                    title="Send message via WhatsApp"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
