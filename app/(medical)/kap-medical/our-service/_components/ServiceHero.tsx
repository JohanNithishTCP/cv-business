import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';
import Button from '../../_components/Button';

export default function ServiceHero() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
                    <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
                    <ChevronsRight size={14} />
                    <span className="text-[#D32F2F]">Services</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl! md:text-4xl! font-bold text-[#002B49]! mb-6!">
                            Our Services
                        </h1>
                        <div className="space-y-6 text-[#374151] text-base leading-relaxed">
                            <p>
                                KAP Medical delivers comprehensive engineering and manufacturing services focused on therapeutic support surfaces and advanced medical electronics. From concept development to U.S.-based production, we provide integrated solutions built on precision, compliance, and uncompromising quality.
                            </p>
                        </div>
                        <Button href="/contact" variant="secondary" className="mt-8">
                            Get in touch
                        </Button>
                    </div>
                    <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                        {/* Using a subtle medical abstract image for service hero */}
                        <img
                            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
                            alt="Our Services"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
