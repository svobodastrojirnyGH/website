'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function PageHeader({ title = '', image = '', breadcrumb = [] }) {
  return (
    <section className="relative h-64 w-full overflow-hidden">
      {/* Background Image with subtle zoom-in animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-[-1]"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay fade-in */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 0.45, backdropFilter: 'blur(4px)' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 bg-black z-0"
      />

      {/* Content: Title and Breadcrumbs */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {/* Breadcrumbs with staggered animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
              }
            }
          }}
          className="mt-4 flex flex-wrap items-center justify-center text-sm gap-x-2 gap-y-1 text-gray-200"
        >
          {breadcrumb.map((item, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex items-center gap-1"
            >
              {index > 0 && <span className="text-gray-400">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:underline text-gray-200">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
