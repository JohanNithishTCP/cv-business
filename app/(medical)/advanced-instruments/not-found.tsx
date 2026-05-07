import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Button from "./_components/Button";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-white font-sans">
            <Header isSticky={true} />
            
            {/* 404 Hero Section */}
            <section className="pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-4">
                <div className="relative mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="absolute inset-0 bg-[#00aeef]/10 rounded-full blur-[100px] -z-10" />
                    <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#00aeef] to-[#0081b1] opacity-20 select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
                            Page Not Found
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                            The medical equipment or solution you're looking for seems to be unavailable or has moved to a new department.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                    <Button 
                        text="Back to Home" 
                        href="/advanced-instruments" 
                        variant="primary"
                        className="px-10 py-4 text-lg"
                    />
                    <Button 
                        text="Contact Support" 
                        href="/advanced-instruments#footer" 
                        variant="outline"
                        className="px-10 py-4 text-lg !text-[#00aeef] !border-[#00aeef] hover:!bg-[#00aeef] hover:!text-white"
                    />
                </div>
            </section>

            {/* Decorative Grid Pattern (Matching other sections) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none -z-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="notFoundGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00aeef" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#notFoundGrid)" />
                </svg>
            </div>

            <Footer />
        </main>
    );
}
