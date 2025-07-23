import React from 'react'

function Herovideo() {
  return (
    <video
            className="absolute inset-0 object-cover w-full h-full z-0"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/videos/lathe1_1st_frame.webp"
          >
            {/* <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" /> */}
            <source src="/videos/hero-optimized.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
  )
}

export default Herovideo