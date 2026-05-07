
import React from 'react';
import Image from 'next/image';

export default function KeyFacts() {
    return (
        <section className="relative">
            <div className="container mx-auto max-w-full relative h-[600px] overflow-hidden">
                <img
                    src={`/kap-medical/images/bg-keyfacts.png`}
                    alt="Key Facts"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/15 flex flex-col items-center justify-center text-center p-6">
                    <h2 className="text-white! text-3xl font-bold mb-6! drop-shadow-md">Key facts about KAP Medical</h2>
                    <p className="text-white! max-w-4xl text-lg! md:text-base leading-relaxed drop-shadow-sm font-medium">
                        Every KAP Medical product is thoughtfully designed, engineered, and manufactured in California, USA. By
                        keeping our operations domestic, we ensure strict quality control, faster innovation cycles, and dependable
                        supply for healthcare providers who rely on consistent performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
