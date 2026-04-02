"use client";

import {
  ArrowRight,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  X,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fa] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-2">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8 gap-8 lg:gap-6">

          {/* COLUMN 1 */}
          <div data-aos="fade-up" className="sm:col-span-2 md:col-span-1 lg:col-span-2">
            
            {/* Logo */}
            <div className="text-[#16679b] font-bold text-lg mb-4">
              <img src={"/atmosmed/assets/atmos_logo 1.png"} alt="logo" width={100} height={100} />
            </div>

            {/* Email Input */}

          <div className="flex">
            <input type="email" className="pl-1 py-2  w-full bg-[#006AB1] border-blue-200 rounded-l-md placeholder:text-white placeholder:text-sm placeholder:pl-1 outline-none" placeholder="Email address"/>
            <button className="-ml-0.5 px-3 py-2 text-black hover:bg-gray-100 transition flex items-center justify-center rounded-r-md border border-[#006AB1] cursor-pointer">
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        
          </div>

          {/* COLUMN 2 */}
          <div data-aos="fade-up" data-aos-delay="100" className="sm:col-span-2 lg:col-span-2">
            <h4 className=" text-black font-semibold  mb-3 text-lg">About</h4>
            <ul className="space-y-1 text-base text-[#16679b] cursor-pointer">
              <li>Privacy Policy</li>
              <li>Imprint</li>
              <li>News Articles</li>
              <li>General Standard Terms and Conditions</li>
              <li>General Terms and Conditions of Purchase</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div data-aos="fade-up" data-aos-delay="200" className="">
            <h4 className=" text-black font-semibold mb-3 text-lg ">Marketing</h4>
            <ul className="space-y-1 text-base text-[#16679b] cursor-pointer">
              <li>Medical Suction Systems</li>
              <li>ENT</li>
              <li>Gynecology</li>
              <li>Swallowing Diagnostics</li>
              <li>Services</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div data-aos="fade-up" data-aos-delay="300" className="">
            <h4 className="mb-3 text-lg text-black font-semibold">Quick Links</h4>
            <ul className="space-y-1 text-base text-[#16679b] cursor-pointer">
              <li>Mission</li>
              <li>Company Group</li>
              <li>History</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div data-aos="fade-up" data-aos-delay="400" className="sm:col-span-2 lg:col-span-2">
            <h4 className="font-semibold mb-3 text-lg text-black">Contacts</h4>

            <div className="space-y-2 text-base text-gray-600">
              
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>888-738-9757</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1" />
                <span>
                  4095 E. La Palma Ave, Suite N, Anaheim, CA 92807 USA
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[Linkedin, Facebook, Instagram, Youtube, Mail, X].map(
                (Icon, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={500 + i * 50}
                    className="w-8 h-8 px-2 cursor-pointer flex items-center justify-center border rounded-full text-[#16679b] hover:bg-[#16679b] hover:text-white transition"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-4 text-center text-xs text-gray-500 font-semibold">
          © 2026 ATMOS MedizinTechnik GmbH & Co. KG - All rights reserved.
        </div>

      </div>
    </footer>
  );
}