import Image from 'next/image'

import { client } from '@/sanity/lib/client'
import { MACHINERY_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import PageHeader from '@/components/ui/PageHeader';


export default async function page() {
    const machineryItems = await client.fetch(MACHINERY_QUERY);

    const grouped = machineryItems.reduce((acc, item) => {
        const category = item.machineryCategory?.title || 'Uncategorized'
        if (!acc[category]) acc[category] = []
        acc[category].push(item)
        return acc
    }, {})

  return (
    <div>
              <PageHeader
                title="Technologie"
                image="/images/subpage-hero/cnc1.webp"
                breadcrumb={[
                  { label: 'Domů', href: '/' },
                  { label: 'Technologie' }
                ]}
              />
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
          {Object.entries(grouped).map(([category, machines]) => (
            <section key={category}>
              <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">{category}</h2>
              <div>
                {machines.map((machine) => (
                  <TechCard key={machine._id} machineryItem={machine} />
                ))}
              </div>
            </section>
          ))}
        </div>
    </div>
  )
}

function TechCard({ machineryItem }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto mb-10 flex flex-col md:flex-row">
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
      <div className="relative md:w-1/3 w-full h-48 md:h-56 flex-shrink-0">
        <Image
          src={urlFor(machineryItem.image).url()}
          alt={machineryItem.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}
