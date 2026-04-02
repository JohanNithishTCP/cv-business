
'use client';

import React, { useState } from 'react';

interface ProductTabsProps {
    description: string;
    additionalFeatures?: string[];
    reviews?: { user: string; rating: number; comment: string; date: string }[];
}

export default function ProductTabs({ description, additionalFeatures, reviews }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'features', label: 'Additional Features' },
        { id: 'reviews', label: 'Reviews' },
    ];

    return (
        <div className="mt-16">
            <div className="flex flex-wrap border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 text-sm font-bold transition-all uppercase tracking-wider ${activeTab === tab.id
                                ? 'bg-[#002B49] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-8 border-x border-b border-blue-400 rounded-b-xl min-h-[300px] bg-gray-50/50">
                {activeTab === 'description' && (
                    <div className="animate-fadeIn">
                        <h3 className="text-[#D32F2F] text-xl font-bold mb-6">Product Description</h3>
                        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
                            {description}
                        </div>
                    </div>
                )}

                {activeTab === 'features' && (
                    <div className="animate-fadeIn">
                        <h3 className="text-[#D32F2F] text-xl font-bold mb-6">Additional Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {additionalFeatures?.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700">
                                    <div className="h-2 w-2 bg-[#D32F2F] rounded-full" />
                                    {feature}
                                </li>
                            )) || <p>No additional features listed.</p>}
                        </ul>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="animate-fadeIn">
                        <h3 className="text-[#D32F2F] text-xl font-bold mb-6">Customer Reviews</h3>
                        {reviews && reviews.length > 0 ? (
                            <div className="space-y-6">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-[#002B49]">{review.user}</span>
                                            <span className="text-sm text-gray-500">{review.date}</span>
                                        </div>
                                        <div className="flex text-yellow-400 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < review.rating ? 'fill-current' : 'text-gray-300'}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic">"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
