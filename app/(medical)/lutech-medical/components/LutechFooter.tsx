"use client";

export default function LutechFooter() {
  return (
    <footer className="bg-[#0f6c86] text-white pt-16 pb-8">
      <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* TOP GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 sm:gap-8 lg:gap-10 mb-12">
          
          {/* LOGO */}
          <div data-aos="fade-up">
            <img src="/lutech-medical/assets/lutech-black.png" alt="Lutech Logo" className="w-44 sm:w-56 lg:w-64" />
          </div>

          {/* QUICK LINKS */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base text-white/80 font-rubik">
              {["Home", "Colposcopes", "Services", "About Us", "Resources", "Contact"].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition font-rubik">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ADDRESS */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="text-base text-white/80 leading-relaxed font-rubik">
              Headquarters : Indianapolis, Indiana <br />
              3910 Industrial Blvd, <br />
              Indianapolis, Indiana <br />
              46254, US
            </p>
          </div>

          {/* CONTACT */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-base text-white/80 font-rubik">
              Tel: (631) 676-7432
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 mb-6" />

        {/* COPYRIGHT */}
        <p className="text-center text-base text-white/80 font-rubik">
          ©2026 Lutech - All Rights Reserved
        </p>

      </div>
    </footer>
  );
}