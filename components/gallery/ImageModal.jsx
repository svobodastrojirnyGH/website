'use client'
import { useEffect } from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageModal({ item, index, maxCount, setSelectedIndex, setSelectedItems }) {
  const fullUrl = urlFor(item.image.asset).quality(90).url()

  const onClose = () => {
    setSelectedIndex(null)
    setSelectedItems(null)
  }

  const hasNext = () => index + 1 < maxCount
  const hasPrev = () => index > 0

  const onNext = () => (hasNext() ? setSelectedIndex(index + 1) : onClose())
  const onPrev = () => (hasPrev() ? setSelectedIndex(index - 1) : onClose())

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center overflow-hidden"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="max-h-[90vh] max-w-[90vw] w-auto bg-white p-4 rounded shadow-lg overflow-hidden"
          >
            <Image
              src={fullUrl}
              alt={item.alt}
              width={1000}
              height={600}
              className="rounded object-contain max-h-[80vh] w-auto h-auto mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">{item.alt}</h3>
            <p className="text-sm text-gray-600 text-center">{item.description || item.alt}</p>
          </motion.div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50"
          >
            &times;
          </button>

          {/* Left Arrow */}
          {hasPrev() && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold z-50"
            >
              ‹
            </button>
          )}

          {/* Right Arrow */}
          {hasNext() && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold z-50"
            >
              ›
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
