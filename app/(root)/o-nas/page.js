'use client'

import PageHeader from '@/components/ui/PageHeader'
import Image from 'next/image'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  ShieldCheck,
  Repeat
} from 'lucide-react'


const sectionsVariant = {
    hidden: { 
        opacity: 0, 
        y: 40
    },
    
    visible: ( i = 0 ) => ({
        opacity: 1,
        y: 0,

        transition: {
            delay: i*0.15,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
}

const itemsVariant = {
    hidden: { 
        opacity: 0, 
    },
    
    visible: ( i = 0 ) => ({
        opacity: 1,

        transition: {
            delay: i*0.15,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

const fadeContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}


export default function AboutPage() {
  const stats = [
    { label: 'Let zkušeností', value: new Date().getFullYear() - 1991 },
    { label: 'Zakázek ročně', value: 600 },
    { label: 'Stálých zákazníků', value: 50 },
  ]

  const values = [
    {
      title: 'Kvalita',
      desc: 'Kontrola každého kusu a přesná výroba jsou pro nás samozřejmostí.',
      icon: CheckCircle
    },
    {
      title: 'Spolehlivost',
      desc: 'Plníme termíny a zakázky vždy dodáváme včas – to je náš závazek.',
      icon: ShieldCheck
    },
    {
      title: 'Flexibilita',
      desc: 'Přizpůsobíme výrobu přesně vašim požadavkům – od kusových po sériové zakázky.',
      icon: Repeat
    }
  ]

  return (
    <div>
      <PageHeader
        title="O nás"
        image="/images/subpage-hero/cnc3.webp"
        breadcrumb={[
          { label: 'Domů', href: '/' },
          { label: 'O nás' }
        ]}
      />

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* STORY SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionsVariant}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-blue-700">Tradiční kvalita od roku 1991</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jsme rodinná firma s více než 30 lety zkušeností ve strojírenské výrobě. Od samého začátku klademe důraz
              na kvalitu, osobní přístup a dlouhodobou spolupráci s našimi zákazníky.
            </p>
            <p className="text-lg text-gray-700">
              V roce 2018 jsme přešli na právní formu s.r.o., ale naše hodnoty a týmová kultura zůstávají neměnné.
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/factory-inside.jpg"
              alt="Strojírna"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        {/* STATS SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionsVariant}
          className="bg-blue-50 py-16 px-6 rounded-3xl shadow-inner"
        >
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-12 text-center">
            {stats.map(({ label, value }, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemsVariant}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition"
              >
                <p className="text-5xl font-extrabold text-blue-700 mb-2">
                  <CountUp enableScrollSpy={true} end={value} duration={2} />
                </p>
                <p className="text-lg font-medium text-gray-800">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* VALUES SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-blue-700 text-center">Naše hodnoty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 border-l-4 border-blue-600 bg-white shadow-md rounded-lg space-y-4"
              >
                <Icon className="text-blue-600 w-8 h-8" />
                <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICATES */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-blue-700 text-center">Certifikace</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2].map((num, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-[1.02] transition"
              >
                <Image
                  src={`/images/cert_${num}.webp`}
                  alt={`Certifikát ${num}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* LOCATION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kde nás najdete"
          />
        </motion.section>

      </main>
    </div>
  )
}
