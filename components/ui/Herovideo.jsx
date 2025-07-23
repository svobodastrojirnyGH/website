import React from 'react'

function Herovideo() {
  return (
    <video
            className="absolute inset-0 object-cover md:object-center object-[80%_center] w-full h-full z-0"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/videos/lathe1_1st_frame.webp"
          >
            <source src="/videos/hero-optimized.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
  )
}

export default Herovideo