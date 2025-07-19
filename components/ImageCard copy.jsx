'use client'
import React from 'react'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'


function ImageCard({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  console.log('INSIDE IMAGE CARD:');
  console.log(item._id)

  const thumbUrl = urlFor(item.image.asset).width(300).height(200).fit('crop').url();
  const fullUrl = urlFor(item.image.asset).quality(90).url();
    console.log('THUMB URL');
    console.log(thumbUrl)
  return (
     <>
      {/* Thumbnail */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <Image
          src={thumbUrl}
          alt={item.alt}
          width={300}
          height={200}
          className="rounded shadow-sm object-cover w-full h-auto"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              &times;
            </button>

            <div className="p-4">
              <Image
                src={fullUrl}
                alt={item.alt}
                width={800}
                height={600}
                className="rounded w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{item.alt}</h3>
              <p className="text-sm text-gray-600">
                {item.description || item.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCard