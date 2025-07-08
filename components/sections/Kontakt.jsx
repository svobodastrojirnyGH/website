import React from 'react'
import ContactForm from '../ContactForm'

function Kontakt() {
  return (
<section className="bg-gray-50 py-20" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Spojte se s námi
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Máte zájem o spolupráci, cenovou nabídku nebo se jen chcete na něco zeptat? Napište nám a my se vám ozveme co nejdříve.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li><strong>📍 Adresa:</strong> Průmyslová 123, 123 45 Město</li>
            <li><strong>📞 Telefon:</strong> +420 123 456 789</li>
            <li><strong>📧 E-mail:</strong> info@firma.cz</li>
          </ul>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
}

export default Kontakt