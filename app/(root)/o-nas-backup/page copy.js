'use client'
import React from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'

function AboutPage() {
  const stats = [
    { id: 1, label: 'Let zkušeností', value: new Date().getFullYear() - 1991 },
    { id: 2, label: 'Zakázek ročně', value: 600 },
    { id: 3, label: 'Stálých zákazníků', value: 50 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-28">
        
      
      {/* Intro Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
            Tradiční kvalita od roku 1991
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Podnikáme nepřetržitě od roku 1991 jako fyzická osoba. V roce 2018 jsme založili
            společnost s ručením omezeným, ale zachovali jsme stejnou výrobu i tým. Jsme stabilní,
            spolehliví a máme za sebou tisíce zakázek.
          </p>
        </div>
        <div className="w-full aspect-video relative rounded-xl overflow-hidden ">
          <Image
            src="/icons/lathe.svg"
  fill
            alt="Certifikát kvality"
        
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map(({ id, label, value }) => (
          <div key={id} className="bg-blue-50 p-8 rounded-lg shadow hover:shadow-md transition">
            <p className="text-5xl font-extrabold text-blue-700 mb-2">
              <CountUp end={value} duration={2} />
            </p>
            <p className="text-lg font-medium text-gray-800">{label}</p>
          </div>
        ))}
      </section>

      {/* Values Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Naše hodnoty</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Kvalita</h3>
            <p className="text-gray-700">
              Důsledná kontrola každého kusu a přesná výroba jsou pro nás samozřejmostí.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Spolehlivost</h3>
            <p className="text-gray-700">
              Plníme termíny a zakázky vždy dodáváme včas – to je náš závazek.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Flexibilita</h3>
            <p className="text-gray-700">
              Přizpůsobíme výrobu přesně vašim požadavkům – od kusových po sériové zakázky.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Certifikace</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Replace or repeat for more cert images */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow">
            <Image
              src="/images/cert_comp.webp"
              alt="Certifikát 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Add more certs if needed */}
        </div>
      </section>

      {/* Map Section */}
      <section className="rounded-lg overflow-hidden shadow-lg h-96">
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

export default AboutPage
