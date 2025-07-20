'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Sluzba({ data }) {
    // Define the variants above return
    const listVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    }
    return (
        <motion.section
            className={`w-full lg:px-8 lg:py-12 min-h-[500px] px-2 mb-16 md:mt-0 ${data.wrapperStyles || ''}`}
            initial={{ opacity: 0, x: data.animationX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                type: 'tween',
                duration: 1,
                ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section heading */}
                <motion.h2
                    className="text-3xl my-4 sm:text-4xl font-bold text-center text-white bg-blue-800 rounded-lg shadow-lg py-4 lg:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {data.title}
                </motion.h2>

                {/* IMAGE + CONTENT WRAPPER */}
                <div className="relative w-full md:flex md:flex-row-reverse md:gap-x-8">
                    {/* Image */}
                    <motion.div
                        className="relative w-full h-[650px] sm:h-[600px] md:h-auto md:w-1/2"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center md:p-6 text-white 
                       md:static md:w-1/2 md:text-black md:items-start md:justify-start"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="bg-black/50 backdrop-blur-xs md:bg-transparent flex justify-center items-center rounded md:rounded-none p-8 md:p-0 md:max-w-xl h-full md:h-auto w-full">
                            <motion.ul
                                className="vyroba-list-ul"
                                variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                {data.items.map((item, index) => (
                                    <motion.li
                                        className="vyroba-list-li"
                                        key={index}
                                        variants={itemVariants}
                                    >
                                        <item.icon className={`vyroba-list-icon ${data.iconsColor}`} />
                                        <div className="vyroba-list-li-subwrap">
                                            <h3 className="vyroba-list-li-titles">{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
