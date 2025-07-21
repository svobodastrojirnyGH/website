import { sendMessage } from '@/app/lib/actions';
import React from 'react'


function ContactForm({callbackUrl, submitted }) {
       

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Napište nám
      </h2>
      {submitted === '1' ? (
        <p className="text-green-600 font-semibold text-center">
          Děkujeme! Brzy se vám ozveme.
        </p>
      ) : submitted === '0' ? (
        <p className="text-red-600 font-semibold text-center">
          Odeslat správu se nepodařilo! Prosím, využijte jinou formu kontaktu.
        </p>
      ) : (
        <form action={sendMessage} className="space-y-5">
          <div>
            <input
                type="text"
                name="company" // Not a common autofill field
                autoComplete="off"
                tabIndex="-1"
                aria-hidden="true"
                className="sr-only"
                />
            <label htmlFor="name" className="block font-medium text-gray-700">
              Jméno a příjmení
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-700 focus:border-blue-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-700 focus:border-blue-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">
              Zpráva
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-700 focus:border-blue-700 resize-none"
            />
          </div>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />


          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300 font-semibold"
          >
            Odeslat zprávu
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm