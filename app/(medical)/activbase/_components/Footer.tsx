import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary pt-20 pb-4 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-8">
              <Link href="/">
                <img src="/activbase/logo.png" alt="Activbase Logo" className="w-[350px] brightness-0 invert" />
              </Link>
            </div>
            <p className="text-white/80 text-[16px] mb-8 leading-relaxed">
              Everyone Deserves to Rise Above Pain.
            </p>
            {/* Our mission is to provide world-class physiotherapy services that empower individuals to reclaim their physical well-being. */}
            <h4 className="font-bold text-[16px] mb-4">Social</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                <Youtube size={18} />
              </Link>
            </div>

            <div className="mt-10 lg:w-[80%]">
              <h4 className="font-bold text-[16px] mb-4">For Enquiry</h4>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-l-md w-full focus:outline-none focus:border-white/40 transition-colors text-sm"
                />
                <button className="bg-white text-primary px-6 py-[13.5px] rounded-r-md hover:bg-white/90 transition-all active:scale-95">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-bold text-[16px] mb-6">Quick Links</h4>
            <nav className="flex flex-col space-y-4 text-white/80 text-[16px]">
              <Link href="#" className="hover:text-white transition-colors">Home</Link>
              <Link href="#" className="hover:text-white transition-colors">About</Link>
              <Link href="#" className="hover:text-white transition-colors">Services</Link>
              <Link href="#" className="hover:text-white transition-colors">Treatments</Link>
              <Link href="#" className="hover:text-white transition-colors">Success Stories</Link>
              <Link href="#" className="hover:text-white transition-colors">Gallery</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-[16px] mb-6">Contact</h4>
            <div className="flex flex-col space-y-6 text-white/80 text-[16px]">
              <div className="flex gap-3">
                <Phone size={18} className="text-white/60 shrink-0 mt-1.5" />
                <div>
                  <p className="mb-1 font-medium text-white">For Consultation</p>
                  <p>7994512251</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-white/60 shrink-0 mt-1.5" />
                <div>
                  <p className="mb-1 font-medium text-white">For Business Enquiries</p>
                  <p>7994731225</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-white/60 shrink-0 mt-1.5" />
                <p>hari.k@activbase.org</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-white/60 shrink-0 mt-1.5" />
                <div className="max-w-[250px] leading-relaxed">
                  <p>Activbase, Nilampathinjamukkal Rajagiri Valey Road, Kakkanad Kochi, Kerala - 682039</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-bold text-[16px] mb-6">Opening Hours</h4>
            <div className="flex flex-col space-y-6 text-white/80 text-[16px]">
              <div className="flex gap-3">
                <Clock size={18} className="text-white/60 shrink-0 mt-1.5" />
                <div>
                  <p className="mb-1 font-medium text-white">Consultation</p>
                  <p>Mon to Sat 6:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="text-white/60 shrink-0 mt-1.5" />
                <div>
                  <p className="mb-1 font-medium text-white">Treatment</p>
                  <p>Mon to Sat 6:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex gap-3 pl-7">
                <p><span className="font-medium text-white text-sm">Sun:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-4 border-t border-white/20 text-center text-white/80 text-[14px]">
          <p>Copyright ©2026 ActivBase Physiotherapy. All rights reserved | Designed by Blusteak</p>
        </div>
      </div>
    </footer>
  );
}
