
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
    image: string;
    alt: string;
}

export default function ProductGallery({ image, alt }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(image);

    // Using the same image for all thumbnails as requested
    const thumbnails = [image, image, image, image];

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-3 justify-start overflow-x-auto md:overflow-y-auto">
                {thumbnails.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-20 h-20 md:w-24 md:h-24 bg-[#F5F5F5] border-2 rounded transition-all flex-shrink-0 ${selectedImage === img ? 'border-[#D32F2F]' : 'border-transparent hover:border-gray-200'
                            }`}
                    >
                        <img
                            src={`/kap-medical/${img}`}
                            alt={`${alt} thumbnail ${index + 1}`}
                            className="object-contain p-2 w-full h-full"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-[#F5F5F5] rounded-xl flex items-center justify-center p-8 min-h-[400px]">
                <div className="relative w-full h-full aspect-[4/3]">
                    <img
                        src={`/kap-medical/${selectedImage}`}
                        alt={alt}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
