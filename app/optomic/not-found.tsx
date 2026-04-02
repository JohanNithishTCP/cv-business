"use client";

import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Button from "./_components/Button";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-white flex flex-col">
            <Header />

            <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#243783]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0090D4]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-2xl w-full text-center relative z-10">
                    {/* 404 Visual */}
                    <div className="mb-8 relative inline-block">
                        <h1 className="text-[120px] md:text-[180px] font-black text-[#243783]/10 leading-none">
                            404
                        </h1>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#243783]/10 text-[#243783] text-sm font-bold uppercase tracking-wider">
                            <AlertCircle size={16} />
                            Page Not Found
                        </div>


                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                            <Button href="/optomic" variant="primary" icon={Home}>
                                Return Home
                            </Button>

                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 px-8 py-3 font-semibold text-[#243783] hover:text-[#0090D4] transition-colors duration-300"
                            >
                                <ArrowLeft size={18} />
                                <span>Go Back</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
