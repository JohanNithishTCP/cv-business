"use client";

import "aos/dist/aos.css";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function MedacureFooter() {

  return (
    <footer className="bg-[#2e2463] relative pt-56 md:pt-38 mt-20" id="contact">
      
      {/* FLOATING CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-300 px-6">
        <div
          data-aos="fade-up"
          className=" bg-[linear-gradient(180deg,#3858DD_0%,#282587_100%)] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Text */}
          <div className="text-white max-w-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Ready to learn More?
            </h3>
            <p className="text-white/80 text-base">
              Reach out to us today to find out how you can bring MedaCure
              products to your facility.
            </p>
          </div>

          {/* Button */}
          <button className="cursor-pointer border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2e2463] transition">
            Get in Touch
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-380 mx-auto px-6 pb-16 grid grid-cols-2 lg:grid-cols-4 gap-10 text-white">

        {/* Logo + Social */}
        <div data-aos="fade-up" className="col-span-2 lg:col-span-1">
            <div>
                <img 
                src="/medacure/assets/medacure-footer.png"
                alt="medacure-logo"
                className="w-42 h-auto object-contain mb-4"
                />
            </div>

          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="cursor-pointer w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-white/70 text-base">
            <li><a href="#home" className="cursor-pointer hover:text-white">Home</a></li>
            <li><a href="#about" className="cursor-pointer hover:text-white">About</a></li>
            <li><a href="#products" className="cursor-pointer hover:text-white">Products</a></li>
            <li><a href="#furniture" className="cursor-pointer hover:text-white">Furniture</a></li>
            <li><a href="#contact" className="cursor-pointer hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="font-semibold mb-4 text-lg">Products</h4>
          <ul className="space-y-2 text-white/70 text-base">
            <li className="cursor-pointer hover:text-white">Beds</li>
            <li className="cursor-pointer hover:text-white">Mattresses</li>
            <li className="cursor-pointer hover:text-white">Patient Lifts & Slings</li>
            <li className="cursor-pointer hover:text-white">Wheelchairs</li>
            <li className="cursor-pointer hover:text-white">Furniture</li>
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
          <div className="text-white/70 text-base space-y-2">
            <p className="font-medium text-white">CORPORATE OFFICE</p>
            <p>221 South 31st Street Kenilworth, NJ 07033, USA</p>
            <p>Email: info@medacureinc.com</p>
            <p>Phone: 718-596-1120</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 text-center font-medium text-white/60 text-base py-4">
        &copy; 2023 MedaCure Inc. All rights reserved.
      </div>
    </footer>
  );
}