'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

function Sluzba({ data }) {
   return (
    <motion.section
      className="w-full lg:px-8 lg:py-12 min-h-[500px] px-2 mb-16 md:mt-0"
      initial={{ opacity: 0, x: data.animationX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl my-4 sm:text-4xl font-bold text-center text-white bg-blue-800 rounded-lg shadow-lg py-4 lg:mb-14">
          {data.title}
        </h2>

        {/* IMAGE + CONTENT WRAPPER */}
        <div className="relative w-full md:flex md:flex-row-reverse md:gap-x-8">
          {/* Image */}
          <div className="relative w-full h-[650px] sm:h-[600px] md:h-auto md:w-1/2">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center md:p-6 text-white 
                          md:static md:w-1/2 md:text-black md:items-start md:justify-start">
            <div className="bg-black/50 backdrop-blur-xs md:bg-transparent flex justify-center items-center rounded md:rounded-none p-8 md:p-0 md:max-w-xl h-full md:h-auto w-full">
              <ul className="vyroba-list-ul">
                {data.items.map((item, index) => (
                  <li className="vyroba-list-li" key={index}>
                    <item.icon className={`vyroba-list-icon ${data.iconsColor}`} />
                    <div className="vyroba-list-li-subwrap">
                      <h3 className="vyroba-list-li-titles">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Sluzba