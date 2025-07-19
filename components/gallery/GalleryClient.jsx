'use client'
import React, { useState } from 'react'
import ImageCard from './ImageCard'
import ImageModal from './ImageModal'
import { motion, AnimatePresence } from 'framer-motion'

function GalleryClient({ groupedGalleryItems }) {
    const [selectedCategory, setSelectedCategory] = useState(Object.keys(groupedGalleryItems)[0]);
    const [selectedItems, setSelectedItems] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const allCategories = Object.keys(groupedGalleryItems);

    return (
        <div className="space-y-12 p-4 py-16 max-w-7xl mx-auto">


            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 border-b border-gray-300">
                {allCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 sm:px-6 sm:py-3 font-medium border-b-2 transition-all duration-200
                            ${category === selectedCategory
                                ? "border-blue-700 text-blue-700"
                                : "border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Category Content with Fade Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                        {groupedGalleryItems[selectedCategory].map((item, index) => (
                            <ImageCard
                                key={item._id}
                                item={item}
                                selectItem={() => {
                                    setSelectedIndex(index);
                                    setSelectedItems(groupedGalleryItems[selectedCategory]);
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Modal */}
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
    );
}

export default GalleryClient;
