'use client'

import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

function TechCard({ machineryItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mb-10 flex flex-col md:flex-row">
            <div className="p-6 flex-1">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">{machineryItem.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {machineryItem.parameters?.map(({ name, value }, i) => (
                        <li key={i}>
                            <strong>{name}:</strong> {value}
                        </li>
                    ))}
                </ul>
                {machineryItem.description && (
                    <p className="mt-4 text-gray-600">{machineryItem.description}</p>
                )}
            </div>
            <motion.div 
                className="relative md:w-1/3 w-full h-48 md:h-56 flex-shrink-0"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                >
                <Image
                    src={urlFor(machineryItem.image).url()}
                    alt={machineryItem.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </motion.div>
        </motion.div>
    )
}

export default TechCard