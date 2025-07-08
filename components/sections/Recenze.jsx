'use client'
import React from 'react'
import { motion } from 'framer-motion';
const reviews = [
  {
    name: "Jan Novák",
    title: "Majitel firmy Novatech",
    text: "Skvělá spolupráce od začátku do konce. Precizní výroba a výborná komunikace. Určitě doporučuji!",
  },
  {
    name: "Petra Dvořáková",
    title: "Technická projektantka",
    text: "Rychlé dodání, flexibilní přístup a výstupní kontrola na vysoké úrovni. Velká spokojenost.",
  },
  {
    name: "Tomáš Malý",
    title: "Vedoucí nákupu, STmetal",
    text: "Dodávky vždy včas a bez problémů. Skvělý partner pro zakázkovou výrobu.",
  },
];

const reviewsAnims = {
	opacity: { duration: 1.2, initDelay: 0, stagger: 0.7 },
	scale: { duration: 0.6, initDelay: 0, stagger: 0.8 },
};

function Recenze() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Co o nás říkají klienti</h2>
        <p className="text-gray-600 text-lg mb-12">
          Zkušenosti našich zákazníků mluví za vše.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-200 text-left"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    opacity: { duration: reviewsAnims.opacity.duration, ease: "easeOut", delay: reviewsAnims.opacity.initDelay + index*reviewsAnims.opacity.stagger},
                    scale: { duration: reviewsAnims.scale.duration, ease: "backOut", delay: reviewsAnims.scale.initDelay + index*reviewsAnims.scale.stagger },
                }}
            >
              <p className="text-gray-700 mb-4 italic">“{review.text}”</p>
              <div className="text-sm text-gray-600">
                <strong className="text-blue-700">{review.name}</strong>
                <div>{review.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recenze