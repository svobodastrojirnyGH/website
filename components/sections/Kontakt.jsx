import { MapPin, Mail, Phone } from 'lucide-react'
import ContactForm from '../ContactForm'

const phoneContacts = [
  { name: 'Jednatel, poptávky', phone: '+420 602 178 503' },
  { name: 'Fakturace, nabídky', phone: '+420 724 752 607' },
  { name: 'Personalistika', phone: '+420 723 657 899' }
]

function Kontakt({ callbackUrl, submitted }) {
  return (
    <section className="bg-gray-50 py-20" id="kontakt">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading & Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">Spojte se s námi</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Máte zájem o spolupráci, cenovou nabídku nebo se jen chcete na něco zeptat?  
            Napište nám a my se vám ozveme co nejdříve.
          </p>
        </div>

        {/* Grid: Cards + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start bg-deev">
          
          {/* Contact Cards */}
          <div className="flex flex-col items-center space-y-4 max-w-md justify-center h-full">
            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              title="Adresa"
              content="Kostelní 61, 281 23 Starý Kolín"
            />
            <InfoCard
              icon={<Mail className="w-5 h-5" />}
              title="E-mail"
              content={
                <a href="mailto:info@strojirny-svoboda.cz" className="text-blue-600 hover:underline">
                  info@strojirny-svoboda.cz
                </a>
              }
            />
            {phoneContacts.map((contact, i) => (
              <InfoCard
                key={i}
                icon={<Phone className="w-5 h-5" />}
                title={contact.name}
                content={
                  <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                    {contact.phone}
                  </a>
                }
              />
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm callbackUrl={callbackUrl} submitted={submitted} />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, content }) {
  return (
    <div className="flex items-center gap-4 p-4 border-l-4 border-blue-500 bg-white shadow-sm rounded-md w-full">
      <div className="p-3 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div className="text-gray-600 text-sm">{content}</div>
      </div>
    </div>
  )
}

export default Kontakt
