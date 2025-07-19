'use client'
import React from 'react'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'


function ImageCard({ item, index, selectItem }) {

  const thumbUrl = urlFor(item.image.asset).width(300).height(200).fit('crop').url();


  return (
     <>
      {/* Thumbnail */}
      <div onClick={() => {
        selectItem()
      }} 
      
      className="cursor-pointer">
        <Image
          src={thumbUrl}
          alt={item.alt}
          width={300}
          height={200}
          className="rounded shadow-sm object-cover w-full h-auto"
        />
      </div>
    </>
  )
}

export default ImageCard