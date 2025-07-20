import React from 'react'
import ContactForm from '../ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

function Kontakt({ callbackUrl, submitted }) {
    return (
        <section className="bg-gray-50 pt-20 bg-deev" id="kontakt">
            <div className="max-w-7xl mx-auto px-8 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl text-center mb-8 font-extrabold text-blue-700">Spojte se s námi</h2>
                        <p className="text-gray-700 text-lg mt-4">
                            Máte zájem o spolupráci, cenovou nabídku nebo se jen chcete na něco zeptat?
                            Napište nám a my se vám ozveme co nejdříve.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex items-start gap-5">
                            <div className="bg-blue-100 text-blue-700 p-3 rounded-full animate-pulse">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-gray-800 ">Adresa</h3>
                                <p className="text-gray-600">Kostelní 61, 281 23 Starý Kolín</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-5">
                            <div className="bg-blue-100 text-blue-700 p-3 rounded-full animate-pulse">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-gray-800">Telefon</h3>
                                <p className="text-gray-600">+420 723 657 899</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-5">
                            <div className="bg-blue-100 text-blue-700 p-3 rounded-full animate-pulse">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-md font-semibold text-gray-800">E-mail</h3>
                                <a
                                    href="mailto:info@strojirny-svoboda.cz"
                                    className="text-gray-600 hover:underline"
                                >
                                    info@strojirny-svoboda.cz
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactForm callbackUrl={callbackUrl} submitted={submitted} />
            </div>
        </section>
    )
}

export default Kontakt