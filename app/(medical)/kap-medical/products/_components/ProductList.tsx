import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data';

export default function ProductList() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            href={`/products/${product.id}`}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group"
                        >
                            <div className="relative aspect-[450/550] w-full bg-[#D8D8D8] flex items-center justify-center p-6 sm:p-8">
                                <img
                                    src={`/kap-medical/${product.image}`}
                                    alt={product.name}
                                    width={300}
                                    height={250}
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 border-t border-gray-50 text-center flex-grow flex items-center justify-center">
                                <h3 className="text-[#002B49]! font-bold text-sm! sm:text-base! md:text-lg! tracking-wide uppercase">
                                    {product.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

