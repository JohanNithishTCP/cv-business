import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import Button from '../../_components/Button';

export default function GalleryHero() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
                    <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
                    <ChevronsRight size={14} />
                    <span className="text-[#D32F2F]">Gallery</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl! md:text-4xl! font-bold text-[#002B49]! mb-6!">
                            Our Gallery
                        </h1>
                        <div className="space-y-6 text-[#374151] text-base leading-relaxed">
                            <p>
                                Explore a closer look at KAP Medical's innovative designs, precision engineering, and U.S.-based manufacturing excellence. Our gallery highlights the quality and craftsmanship behind every product we deliver.
                            </p>
                        </div>
                        <Button href="/contact" variant="secondary" className="mt-8">
                            Get in touch
                        </Button>
                    </div>
                    <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={`/kap-medical/images/gallery/our-gallery.jpg`}
                            alt="Our Gallery"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
