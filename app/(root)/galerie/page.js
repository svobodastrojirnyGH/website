import React from 'react'
import Image from 'next/image'

const galleryData = {
  "Zámečnické konstrukce": [
    "/galerie/zamecnicke-konstrukce/img1.webp",
    "/galerie/zamecnicke-konstrukce/img2.jpg",
    "/galerie/zamecnicke-konstrukce/img3.jpg",
    "/galerie/zamecnicke-konstrukce/img4.jpg",
  ],
  "Strojírenské výrobky": [
    "/galerie/strojirenske-vyrobky/img1.webp",
    "/galerie/strojirenske-vyrobky/img2.webp",
    "/galerie/strojirenske-vyrobky/img3.jpg",
    "/galerie/strojirenske-vyrobky/img4.webp",
    "/galerie/strojirenske-vyrobky/img5.webp",
    "/galerie/strojirenske-vyrobky/img6.webp",
    "/galerie/strojirenske-vyrobky/img7.webp",
    "/galerie/strojirenske-vyrobky/img8.webp",
  ],
}
function page() {
  return (
        <section className="max-w-7xl mx-auto px-4 py-12">
      {Object.entries(galleryData).map(([category, images]) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, i) => (
              <div key={i} className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`${category} image ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={i < 4} // prioritize first few images
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default page