import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Button from "./_components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <section className="flex-grow flex items-center justify-center py-32 px-4 relative overflow-hidden">
        {/* Background Topographic lines */}
        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('/horizon/images/about-bg.png')] bg-cover bg-center"
        />

        <div className="container mx-auto relative z-10 text-center">
          <div className="relative mb-8 flex justify-center">
            {/* Large 404 Background Text */}
            <h1 className="text-[120px] md:text-[220px] font-black text-[#064163] opacity-[0.03] leading-none select-none">
              404
            </h1>
            {/* Content Over the 404 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold text-[#064163] mb-4 tracking-tight">
                Oops! <span className="text-[#84CFFA]">Page Not Found</span>
              </h2>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto">
            <p className="text-[#827E76] text-base md:text-[18px] mb-12 leading-relaxed font-light">
              We're sorry, but the page you are looking for doesn't exist or has been moved. 
              Please head back to our homepage to continue exploring Horizon Med Tech.
            </p>
            
            <div className="flex justify-center">
              <Button href="/horizon" variant="primary" className="px-10">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
