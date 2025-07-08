'use client'
import React from 'react'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
function page() {
      const stats = [
    { id: 1, label: 'Let zkušeností', value: 12 },
    { id: 2, label: 'Dokončených projektů', value: 85 },
    { id: 3, label: 'Spokojených zákazníků', value: 47 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
     {/* Hero */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700">O nás</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jsme menší strojírenská firma s vášní pro preciznost a kvalitu. Naším cílem je
          poskytovat špičkové služby a výrobky na míru vašim potřebám, ať už se jedná o malé zakázky nebo
          větší projekty.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map(({ id, label, value }) => (
          <div key={id} className="bg-blue-50 p-8 rounded-lg shadow-md">
            <p className="text-5xl font-extrabold text-blue-700 mb-2">
              <CountUp end={value} duration={2} />
            </p>
            <p className="text-lg font-medium text-gray-800">{label}</p>
          </div>
        ))}
      </section>

      {/* Values or Team */}
      <section className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Naše hodnoty</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Kvalita</h3>
            <p className="text-gray-700">Důraz klademe na precizní výrobu a kontrolu každého kusu.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Spolehlivost</h3>
            <p className="text-gray-700">Termíny dodání jsou pro nás závazkem, na který se můžete spolehnout.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Flexibilita</h3>
            <p className="text-gray-700">Každý projekt přizpůsobujeme specifickým požadavkům klienta.</p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="mt-20 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg h-96">
        {/* Replace the src URL below with your Google Maps embed link */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!2m12!1m3!1d2430.123456789!2d14.42076!3d50.08804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94d7df2e6423%3A0x41a1447a2a6cb9db!2sPrague!5e0!3m2!1sen!2scz!4v1688989999999!5m2!1sen!2scz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </section>
    </div>
  )
}

export default page