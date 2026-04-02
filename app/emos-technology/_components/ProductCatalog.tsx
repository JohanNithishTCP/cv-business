"use client";

import { Download } from 'lucide-react';
import catalogData from '../data/catalogs.json';

interface ProductCatalogProps {
    catalogIds?: number[];
}

const ProductCatalog = ({ catalogIds = [] }: ProductCatalogProps) => {
    const filteredCatalogs = catalogIds.length > 0
        ? catalogData.catalogs.filter(item => catalogIds.includes(item.id))
        : catalogData.catalogs;

    if (filteredCatalogs.length === 0) return null;

    return (
        <section className="bg-primary py-20 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 px-4" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 md:w-24 h-[1px] bg-white/40"></div>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">Product Catalogue</span>
                        <div className="w-12 md:w-24 h-[1px] bg-white/40"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                        Technical specifications and catalogs.
                    </h2>
                </div>

                {/* Grid Grid - 4 columns on LG, 2 on MD, 1 on SM */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                    {filteredCatalogs.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white/15 hover:bg-white/25 transition-all p-4 rounded-md group"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <span className="text-[12px] font-bold truncate flex-1 pr-4">
                                {item.title}
                            </span>
                            <a
                                href={item.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#619228] hover:bg-white hover:text-[#619228] p-3 rounded-md transition-all shadow-lg shrink-0"
                                title="Download Catalog"
                            >
                                <Download size={16} strokeWidth={3} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
