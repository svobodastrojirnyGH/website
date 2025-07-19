'use client'
import React, { Suspense, useState } from 'react'
import ImageCard from './ImageCard'
import ImageModal from './ImageModal'

function GalleryClient({ groupedGalleryItems }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const allCategories = Object.keys(groupedGalleryItems);



    return (
        <div className="space-y-12 p-4 py-16 max-w-7xl mx-auto">
            <h1 className="text-6xl font-extrabold mb-32 text-blue-700 text-center"> Galerie </h1>
            {Object.entries(groupedGalleryItems).map(([category, items]) => (
                <div key={category} className="pb-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 py-4 border-b-2 border-t-2">{category}</h2>
                        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-8 gap-4 px-4">
                            {items.map((item, index) => (
                                    <ImageCard
                                        key={item._id}
                                        item={item}
                                        selectItem = { () => {
                                            setSelectedIndex(index);
                                            setSelectedItems(items);
                                        }}
                                    />
                            ))}
                        </div>
                    </div>

                </div>
            ))}

            {selectedIndex !== null && (
                <ImageModal
                    item={selectedItems[selectedIndex]}
                    index={selectedIndex}
                    maxCount={selectedItems.length || 0}
                    setSelectedIndex={setSelectedIndex}
                    setSelectedItems={setSelectedItems}
                />
            )}
        </div>
    )
}

export default GalleryClient