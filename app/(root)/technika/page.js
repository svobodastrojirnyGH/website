// app/technika/page.jsx
'use client'

import Image from 'next/image'
import React from 'react'


const techData = [
  {
    category: 'CNC SOUSTRUHY',
    machines: [
      {
        name: 'MAZAK QUICK TURN300 MSY',
        specs: [
          'Max. průměr obrábění - 420 mm',
          'Točná délka - 1250 mm',
          'Soustruh s poháněnými nástroji a protivřetenem',
        ],
      },
      {
        name: 'MASTURN 820i',
        specs: [
          'Max. průměr obrábění - 720 mm',
          'Průměr nad ložem - 820 mm',
          'Průměr nad suportem - 530 mm',
          'Točná délka - 3000 mm',
        ],
      },
      {
        name: 'MASTURN 550',
        specs: [
          'Max. průměr obrábění - 500 mm',
          'Průměr nad ložem - 550 mm',
          'Průměr nad suportem - 350 mm',
          'Točná délka - 800 mm',
        ],
      },
      {
        name: 'MASTURN 32',
        specs: [
          'Max. průměr obrábění - 320 mm',
          'Průměr nad ložem - 320 mm',
          'Průměr nad suportem - 150 mm',
          'Točná délka - 500 mm',
        ],
      },
    ],
  },
  {
    category: 'CNC OBRÁBĚCÍ CENTRA',
    machines: [
      {
        name: 'MCV 1000',
        specs: [
          'Upínací plocha stolu 1300 X 670 mm',
          'Max. zatížení 1200 kg, X/Y/Z - 1016/610/ 720 mm',
        ],
      },
      {
        name: 'MCV 1016',
        specs: [
          'Upínací plocha stolu 1300 X 600 mm',
          'Max. zatížení 700 kg, X/Y/Z - 1016/610/710 mm',
        ],
      },
    ],
  },
]

export default function page() {
  return (
 <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {techData.map(({ category, machines }) => (
        <section key={category}>
          <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">{category}</h2>
          <div>
            {machines.map((machine) => (
              <TechCard key={machine.name} name={machine.name} specs={machine.specs} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}


function TechCard({ name, specs }) {
  return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mb-10 flex flex-col md:flex-row">
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">{name}</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {specs.map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>
      </div>
      <div className="relative md:w-1/3 w-full h-48 md:h-56 flex-shrink-0">
        <Image
          src="/technologie/placeholder.webp"
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}

