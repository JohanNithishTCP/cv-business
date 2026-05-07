"use client";

import React from "react";
import Button from "./Button";

interface FeatureProps {
    title: string;
    subtitle?: string;
    description: string;
    points?: string[];
    image?: string;
    video?: string;
    reverse?: boolean;
}

const FeatureRow = ({ title, subtitle, description, points, image, video, reverse }: FeatureProps) => (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center  ${reverse ? 'lg:flex-row-reverse pb-20' : 'py-20'}`}>
        <div className={`${reverse ? 'lg:order-last' : ''}`}>
            <div className="relative rounded-[20px] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
                </div>
                {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
                {video && <video src={video} className="w-full h-full object-cover" autoPlay muted playsInline loop />}
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{title}</h2>
            {subtitle && <p className="!text-xl !font-semibold mb-4">{subtitle}</p>}
            <p className="leading-relaxed mb-6 text-justify">
                {description}
            </p>
            {points && (
                <ul className="mb-8 space-y-2">
                    {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-[#7C2B83] font-bold mt-[-2px]">•</span>
                            {point}
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <Button>
                    Add to Cart
                </Button>
            </div>
        </div>
    </div>
);

export default function ProductFeatures() {
    return (
        <section className="bg-[#F7F7F7]">
            <div className="container mx-auto px-6 md:px-12">
                <FeatureRow
                    title="Galileo® 530VCDA Direct-Access™ Colposcope"
                    subtitle="Three-Step Magnification with Integrated LED Light and HD Video Camera"
                    description="The Galileo® 530VCDA Direct-Access™ Colposcope features three-step magnification with integrated LED light and HD video camera for connection to a monitor or computer. The Direct-Access™ offset center feature provides a direct visual and unobstructed working space. Combining modern technology with classic aesthetics, the Galileo® 530VCDA Direct-Access™ is a piece of art designed to facilitate comprehensive cervical examination with ease and style."
                    video="https://cdn.clinicalvisuals.com/medical/gynex/360/galileo_colposcope.webm"
                />

                <FeatureRow
                    reverse
                    title="Ceramix Biopsy Punch"
                    description="CERAMIX™ coated biopsy punches offer increased resistance to corrosion, resilience against impact and low friction coefficient. Stays sharper up to 10 times longer than ordinary stainless steel. Incomparable cutting-edge hardness. See Hardness Comparison Chart below."
                    points={[
                        "Single anchoring tooth on top and bottom jaws",
                        "Extremely rust and corrosion resistant",
                        "Smoother mechanical action",
                        "Low friction coefficient"
                    ]}
                    image="/gynex/images/ceramix.png"
                />
            </div>
        </section>
    );
}
