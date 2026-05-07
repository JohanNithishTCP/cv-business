"use client";

import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, HeartPulse } from "lucide-react";
import Button from "./_components/Button";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            
            <main className="flex-grow flex items-center justify-center relative overflow-hidden py-20">
                {/* Background Decorative Elements */}
                <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30 -z-10 animate-pulse delay-700" />
                
                <div className="container mx-auto px-6 md:px-12 text-center z-10">
                    <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-blue-50 rounded-3xl text-primary shadow-inner">
                        <HeartPulse size={48} className="animate-bounce" />
                    </div>
                    
                    <h1 className="text-9xl font-black text-primary mb-4 tracking-tighter opacity-10">
                        404
                    </h1>
                    
                    <div className="relative -mt-20 mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
                            The medical resource or page you are looking for has been moved, removed, or is temporarily unavailable.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button 
                            text="Back to Home" 
                            href="/mci" 
                            variant="primary" 
                            size="lg"
                            icon={<Home size={18} />}
                        />
                        <button 
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 font-bold text-gray-600 hover:text-primary transition-colors py-4 px-8"
                        >
                            <ArrowLeft size={18} /> Go Back
                        </button>
                    </div>
                </div>

                {/* Subtle medical grid pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#103672_1px,transparent_1px)] [background-size:40px_40px]" />
            </main>

            <Footer />
        </div>
    );
}
