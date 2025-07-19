'use client'
import React from 'react'
import { useState } from "react";

function ContactForm() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle backend submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Napište nám
      </h2>
      {submitted ? (
        <p className="text-green-600 font-semibold text-center">
          Děkujeme! Brzy se vám ozveme.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Jméno a příjmení
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-700 focus:border-blue-700 resize-none"
            />
          </div>

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