import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

export default function AboutHero() {
    return (
        <section className="pt-12 md:pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
                    <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
                    <ChevronsRight size={14} />
                    <span className="text-[#D32F2F]">About</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#002B49] mb-6">
                            About KAP medical
                        </h1>
                        <div className="space-y-6 text-[#374151] text-base leading-relaxed">
                            <p>
                                At <span className="text-[#D32F2F] font-semibold">KAP Medical</span>, innovation is not just a process — it is a responsibility. Since 1999, we have partnered with healthcare providers to develop therapeutic support surfaces and medical electronic systems that directly impact patient recovery, safety, and comfort. Our strength lies in our integrated expertise — from R&D and engineering to regulatory compliance and manufacturing — all operating under one roof in California. This unified approach allows us to move faster, maintain strict quality control, and deliver dependable solutions tailored to real-world clinical environments.
                            </p>
                            <p>
                                We engineer dependable solutions healthcare professionals trust. Designed and built in the USA, our work reflects uncompromising quality and responsive support.
                            </p>
                        </div>
                        <Link href="/contact" className="inline-block mt-8 bg-[#BF0D3E] hover:bg-[#a00b34] text-white font-bold py-3 px-8 rounded transition-all">
                            Get in touch
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="100">
                        <img
                            src={`/kap-medical/images/about/abt-kap.jpg`}
                            alt="About KAP Medical"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
