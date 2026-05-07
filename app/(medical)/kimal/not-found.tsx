import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Button from "./_components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <section className="flex-1 flex items-center justify-center py-20 px-4 mt-20">
        <div className="max-w-2xl w-full text-center">
          <div className="relative mb-8 flex justify-center">
            {/* Large 404 Background Text */}
            <h1 className="text-[120px] md:text-[200px] font-black text-gray-50 opacity-50 leading-none select-none">
              404
            </h1>
            {/* Content Over the 404 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
                Oops! <span className="text-[#4782d3]">Page Not Found</span>
              </h2>
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <p className="text-slate-500 text-base lg:text-lg mb-10 leading-relaxed font-medium">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <Button text="Back to Home" href="/kimal" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
