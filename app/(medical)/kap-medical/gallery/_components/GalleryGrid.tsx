import React from 'react';
import Image from 'next/image';

export default function GalleryGrid() {
    const images = [
        "images/gallery/gallery-1.png",
        "images/gallery/gallery-2.png",
        "images/gallery/gallery-3.png",
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group ${index === 0 ? 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[630px]' : 'h-[300px]'
                                }`}
                        >
                            <img
                                src={`/kap-medical/${src}`}
                                alt={`Gallery Image ${index + 1}`}
                                className={`object-cover group-hover:scale-110 transition-transform duration-700 w-full h-full`}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
