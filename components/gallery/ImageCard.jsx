'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { motion } from 'framer-motion'

function ImageCard({ item, selectItem }) {
  const thumbUrl = urlFor(item.image.asset).width(300).height(200).fit('crop').url();

  return (
    <motion.div
      onClick={selectItem}
      className="cursor-pointer overflow-hidden rounded shadow-sm"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={thumbUrl}
        alt={item.alt}
        width={300}
        height={200}
        className="object-cover w-full h-auto rounded"
      />
    </motion.div>
  )
}

export default ImageCard
