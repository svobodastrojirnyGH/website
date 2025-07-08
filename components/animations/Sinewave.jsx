'use client'

import { motion } from 'framer-motion'

export default function Sinewave() {
  return (
    <svg
      viewBox="0 0 500 100"
      fill="none"
      stroke="black"
      strokeWidth={2}
      className="w-full h-32"
    >
      <motion.path
        d="M10 80 Q 95 10 180 80 T 350 80"
        initial={{
          strokeDasharray: 500,
          strokeDashoffset: 500,
          fillOpacity: 0
        }}
        animate={{
          strokeDashoffset: 0,
          fillOpacity: 1
        }}
        transition={{
          strokeDashoffset: { duration: 4, ease: 'linear' },
          fillOpacity: { duration: 2, ease: 'easeIn' }
        }}
        fill="red"
      />
    </svg>
  )
}
