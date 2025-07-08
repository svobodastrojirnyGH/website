import Image from 'next/image'
import React from 'react'
import Herovideo from '../components/ui/Herovideo'

function Herosection1() {
  return (
      <section className="relative h-[100vh] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <Herovideo />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r bg-black/35 z-0 back" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6 text-shadow-xs">
          STROJÍRNY SVOBODA s.r.o.
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Precizní CNC obrábění a moderní strojní výroba
        </p>
        <a
          href="#why-us"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition"
        >
          Proč si vybrat nás?
        </a>
      </div>
    </section>
  )
}

export default Herosection1