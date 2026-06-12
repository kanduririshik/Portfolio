import React from 'react'
import { motion } from 'framer-motion'

export default function WhatsAppFAB() {
  const whatsappUrl = "https://wa.me/916309002842?text=Hello%20Rishik%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity%2Fproject."

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl shadow-green-500/40 text-white cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 2,
        type: 'spring',
        stiffness: 260,
        damping: 20,
        bounce: 0.4
      }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Red notification dot */}
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-background"></span>
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.285 1.479 4.886 1.48 5.534-.003 10.03-4.5 10.033-10.04.002-2.684-1.038-5.207-2.93-7.098C16.664 1.606 14.14 1.565 12.01 1.565c-5.533 0-10.026 4.49-10.03 10.034-.001 1.765.485 3.486 1.408 5.01L2.43 21.464l4.217-1.11zM16.92 14.54c-.267-.133-1.58-.78-1.824-.868-.243-.09-.419-.133-.596.133-.177.265-.685.868-.84 1.044-.154.177-.308.2-.575.066-.267-.133-1.127-.415-2.148-1.327-.79-.705-1.325-1.577-1.48-1.842-.155-.266-.017-.408.116-.54.12-.12.267-.309.4-.464.135-.155.18-.266.27-.443.09-.177.046-.332-.022-.465-.069-.133-.596-1.435-.817-1.968-.214-.518-.452-.447-.62-.456-.16-.008-.344-.01-.528-.01-.184 0-.485.07-.74.354-.253.28-1.01.988-1.01 2.41 0 1.42 1.033 2.793 1.177 2.992.145.199 2.032 3.102 4.921 4.35.688.297 1.224.474 1.643.607.69.22 1.32.19 1.816.116.553-.082 1.58-.646 1.802-1.238.223-.593.223-1.102.155-1.21-.068-.108-.244-.176-.51-.309z" />
      </svg>
    </motion.a>
  )
}
