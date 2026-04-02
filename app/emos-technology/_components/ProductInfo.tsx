"use client";

import { useState } from 'react';

interface FeatureSet {
    title: string;
    features: string[];
}

interface ProductInfoProps {
    title: string;
    description: string[];
    keyFeatures: FeatureSet[];
}

const ProductInfo = ({ title, description, keyFeatures }: ProductInfoProps) => {
    const [activeSubTab, setActiveSubTab] = useState(0);

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h1>

            <div className="space-y-4 mb-8">
                {description.map((para, index) => (
                    <p key={index} className="text-gray-600 text-sm leading-relaxed">
                        {para}
                    </p>
                ))}
            </div>

            {/* Features Header */}
            <div className="flex gap-4 mb-0 bg-primary/10 p-1 rounded-t-lg w-fit">
                <div className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest bg-white text-primary rounded-t-sm">
                    Key Features
                </div>
            </div>

            {/* Content Box */}
            <div className="flex-1 bg-primary text-white p-8 rounded-b-lg rounded-tr-lg shadow-lg relative min-h-[300px]">
                <div>
                    {/* Sub-tabs for multiple feature sets (like Naso-Pharyngo-Laryngoscope) */}
                    {keyFeatures.length > 1 && (
                        <div className="flex gap-2 mb-6 bg-black/10 p-1 rounded-md w-fit">
                            {keyFeatures.map((set, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveSubTab(idx)}
                                    className={`px-3 py-1.5 text-[9px] uppercase font-bold rounded transition-all ${activeSubTab === idx ? 'bg-white text-primary' : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {set.title}
                                </button>
                            ))}
                        </div>
                    )}

                    <ul className="space-y-3">
                        {(keyFeatures[activeSubTab]?.features || []).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                                <span className="mt-1.5 w-1 h-1 bg-white rounded-full shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
