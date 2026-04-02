"use client";
import { useState } from 'react';

export default function OurProductsSection() {
    const [activeTab, setActiveTab] = useState('All Products');

    const tabs = ['All Products', 'Products', 'Accessories'];

    const products = [
        {
            id: 1,
            title: 'SmoothWave i100',
            image: '/product-1.png'
        },
        {
            id: 2,
            title: 'SmoothWave i200',
            image: '/product-2.png'
        },
        {
            id: 3,
            title: 'Case - For i100 & i200',
            image: '/product-3.webp'
        },
        {
            id: 4,
            title: 'Advanced Silver Smooth Bipolar Forceps',
            image: '/accessories-1.png'
        },
        {
            id: 5,
            title: '3-Button Fingerswitch Wand',
            image: '/accessories-2.png'
        },
        {
            id: 6,
            title: 'Precision Bipolar Scissors',
            image: '/accessories-3.png'
        }
    ];

    const filteredProducts = products.filter((_, index) => {
        if (activeTab === 'All Products') return true;
        if (activeTab === 'Products') return index < 2;
        if (activeTab === 'Accessories') return index >= 2;
        return true;
    });

    return (
        <section className="w-full py-16 md:py-24 bg-[#F8F8F8]">
            <div className="site-container">

                {/* Header and Tabs */}
                <div
                    data-aos="fade-up"
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-gray-200 w-full gap-6 md:gap-4"
                >
                    <h2 className="text-[1.8rem] md:text-[2rem] font-bold text-[#333333]">
                        Our Products
                    </h2>
                    <div className="flex flex-wrap gap-y-3 gap-x-2 sm:gap-x-6 text-[14px] sm:text-[16px] font-bold">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`${index < tabs.length - 1 ? 'border-r-2 border-gray-200 pr-2 sm:pr-5' : ''} transition-colors relative pb-1 ${activeTab === tab ? 'text-[#B000F5]' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center group transition-all hover:shadow-md"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full min-h-[220px] bg-[#f4f4f4] rounded-xl mb-6 flex justify-center items-center p-4">
                                <img src={`/soniquence/home/${product.image}`} alt={product.title} className="max-h-[160px] object-contain" />
                            </div>
                            <h3 className="text-[18px] font-medium text-center text-[#202020] mb-1 min-h-[50px] leading-snug px-2 grow">
                                {product.title}
                            </h3>
                            <button className="w-full py-3 mt-4 rounded-full brand-gradient hover:bg-[#7D00E6] text-white font-bold text-[14px] transition-colors shadow-sm">
                                Get Quote
                            </button>
                        </div>
                    ))}
                </div>
                <button data-aos="fade-up" className="mt-10 mx-auto block bg-[#B000F5] hover:bg-[#A300ED] text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm tracking-wide shadow-lg shadow-purple-500/20 active:scale-95">
                    View All Products
                </button>

            </div>
        </section>

    );
}
