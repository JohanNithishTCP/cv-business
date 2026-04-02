import React from 'react';
import Link from 'next/link';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-20 px-4">
                <div className="max-w-xl w-full text-center">
                    <div className="relative mb-8">
                        <h1 className="text-9xl font-black text-[#002B49]/10 select-none">
                            404
                        </h1>
                        <div className="flex items-center justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#002B49]">
                                Page Not Found
                            </h2>
                        </div>
                    </div>

                    <div className="w-20 h-1.5 bg-[#D32F2F] mx-auto mb-8 rounded-full"></div>

                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="bg-[#002B49] hover:bg-[#001a2c] text-white font-bold py-3 px-8 rounded transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white border-2 border-[#002B49] text-[#002B49] hover:bg-[#0a0a0a05] font-bold py-3 px-8 rounded transition-all w-full sm:w-auto"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
