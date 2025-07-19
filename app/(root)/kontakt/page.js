import ContactForm from '@/components/ContactForm'
import PageHeader from '@/components/ui/PageHeader'
import React from 'react'

async function page({ searchParams }) {

    const success = await (await searchParams).success
  return (
    <div>
              <PageHeader
                title="Kontakt"
                image="/images/subpage-hero/cnc2.webp"
                breadcrumb={[
                  { label: 'Domů', href: '/' },
                  { label: 'Galerie' }
                ]}
              />
        <section className="max-w-7xl mx-auto py-12">
            <div>
            <div className=" px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
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
                <ContactForm success={success}/>
            </div>
            </div>
                  {/* Google Map */}
          <div className="mt-20 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg h-96">
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
          </div>
        </section>
    </div>
  )
}

export default page