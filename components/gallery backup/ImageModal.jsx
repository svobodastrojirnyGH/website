'use client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'

export default function ImageModal({ item, index, maxCount, setSelectedIndex, setSelectedItems}) {
    
    const fullUrl = urlFor(item.image.asset).quality(90).url();

    function onNext(){
        if( hasNext() ) {
            setSelectedIndex(index + 1)
        } else {
            onClose()
        }
    }
    
    function onPrev(){
        if( hasPrev() ) {
            setSelectedIndex(index - 1)
        } else {
            onClose()
        }
    }

    function hasNext(){
        return (index + 1 === maxCount ) ? false : true;
    }

    function hasPrev() {
        return index === 0 ? false : true;
    }
  
    function onClose() {
        setSelectedIndex(null)
        setSelectedItems(null)
    }
    return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold z-50"
      >
        &times;
      </button>

      {/* Left Arrow */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold z-50`}
        >
          ‹
        </button>
      )}

      {/* Right Arrow */}
      {hasNext && (
        <button
          onClick={onNext}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold z-50`}
        >
          ›
        </button>
      )}

      {/* Content */}
      <div className="max-w-4xl w-full mx-4 bg-white p-4 rounded shadow-lg">
        <Image
          src={fullUrl}
          alt={item.alt}
          width={1000}
          height={600}
          className="rounded w-full h-auto object-contain"
        />
        <h3 className="mt-4 text-lg font-semibold">{item.alt}</h3>
        <p className="text-sm text-gray-600">{item.description || item.alt}</p>
      </div>
    </div>
  )
}
