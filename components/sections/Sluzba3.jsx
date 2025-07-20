'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function Sluzba3({ data }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' }) // triggers sooner

  return (
    <motion.section
      ref={ref}
      className="w-full lg:px-8 lg:py-12 min-h-[500px] px-2 mb-16 md:mt-0"
      initial={{ opacity: 0, x: data.animationX }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl my-4 sm:text-4xl font-bold text-center text-white bg-blue-800 rounded-lg shadow-lg py-4 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {data.title}
        </motion.h2>

        <div className="relative w-full md:flex md:flex-row-reverse md:gap-x-8">
          <motion.div
            className="relative w-full h-[650px] sm:h-[600px] md:h-auto md:w-1/2"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center md:p-6 text-white 
                       md:static md:w-1/2 md:text-black md:items-start md:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-black/50 backdrop-blur-xs md:bg-transparent flex justify-center items-center rounded md:rounded-none p-8 md:p-0 md:max-w-xl h-full md:h-auto w-full">
              <ul className="vyroba-list-ul">
                {data.items.map((item, index) => (
                  <motion.li
                    className="vyroba-list-li"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  >
                    <item.icon className={`vyroba-list-icon ${data.iconsColor}`} />
                    <div className="vyroba-list-li-subwrap">
                      <h3 className="vyroba-list-li-titles">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
