"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { PlayCircle } from 'lucide-react';

interface MediaItem {
    type: 'image' | 'video';
    src: string;
}

interface ProductGalleryProps {
    images: string[];
    videos?: { src: string }[];
}

const ProductGallery = ({ images, videos = [] }: ProductGalleryProps) => {
    const allMedia: MediaItem[] = [
        ...images.map(img => ({ type: 'image' as const, src: img })),
        ...videos.map(vid => ({ type: 'video' as const, src: vid.src }))
    ];

    const [activeMedia, setActiveMedia] = useState<MediaItem>(allMedia[0]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-y-auto max-h-[500px] scrollbar-hide">
                {allMedia.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => !isLoading && setActiveMedia(item)}
                        disabled={isLoading}
                        className={`relative w-24 h-24 border-2 rounded-lg overflow-hidden shrink-0 transition-all ${isLoading
                            ? 'border-gray-100'
                            : activeMedia.src === item.src
                                ? 'border-primary'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        {isLoading ? (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                        ) : item.type === 'image' ? (
                            <img
                                src={`${item.src}`}
                                alt={`Thumbnail ${index + 1}`}
                                className="object-contain p-2 bg-gray-50"
                            />
                        ) : (
                            <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                                <video src={`${item.src}#t=0.2`} className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black/40 p-1.5 rounded-full">
                                        <PlayCircle className="text-white w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative flex-1 aspect-square bg-[#F8F9FA] rounded-xl overflow-hidden order-1 md:order-2">
                {activeMedia.type === 'image' ? (
                    <img
                        src={`${activeMedia.src}`}
                        alt="Product image"
                        className="object-contain p-8 md:p-12 transition-all duration-500"
                    />
                ) : (
                    <video
                        src={activeMedia.src}
                        controls
                        className="w-full h-full object-contain p-4"
                        autoPlay
                        muted
                    />
                )}
            </div>
        </div>
    );
};

export default ProductGallery;
