"use client";

import { Send } from "lucide-react";
import Image from "next/image";

export default function VapoFooter() {

  return (
    <footer className="bg-gray-100 px-6 md:px-16 py-10">
      <div className="max-w-380 mx-auto">
        
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-6 gap-12">
          
          {/* LEFT BLOCK */}
          <div data-aos="fade-right" className="md:col-span-2">
            
            {/* LOGO */}

            <Image src="/vapotherm/assets/vapotherm-logo.png" alt="Vapotherm Logo" width={160} height={60} />
            {/* NEWSLETTER */}
            <p className="text-gray-700 text-base mb-4 font-semibold mt-6">
              Subscribe to Our Newsletter
            </p>

            {/* INPUT */}
            <div className="flex items-center bg-gray-200 rounded-md overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 text-black py-3 bg-transparent text-sm outline-none placeholder:text-[#666666]"
              />
              <button className="bg-[#0C66AF] text-white p-4 cursor-pointer hover:bg-[#0A569C] transition">
                <Send size={16} />
              </button>
            </div>

          </div>

          {/* RIGHT LINKS */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {[
              {
                title: "Technology",
                links: ["High Velocity Therapy", "A Gentle Alternative", "Patents"],
              },
              {
                title: "Support",
                links: [
                  "Customer & Technical Support",
                  "International Distributors",
                  "Documents and Manuals",
                ],
              },
              {
                title: "Investors",
                links: ["News", "Privacy Policy", "Quality Policy", "Terms of Use"],
              },
              {
                title: "Company",
                links: ["Contact Us", "Careers", "Charitable Giving"],
              },
            ].map((col, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <h4 className="text-gray-800 font-semibold text-base mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li
                      key={j}
                      className="text-gray-600 text-base hover:text-[#0C66AF] cursor-pointer transition"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-12" />

        <div className=" text-gray-500 flex justify-center pt-10 font-semibold">Copyrights © Vapotherm 2026. All rights reserved.</div>

      </div>
    </footer>
  );
}