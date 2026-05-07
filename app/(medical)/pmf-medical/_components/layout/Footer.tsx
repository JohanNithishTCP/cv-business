import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Phone } from 'lucide-react';


export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-[#87d8fb] to-primary overflow-hidden pt-20 border-t border-[#88888870]">
      <Container>
        {/* Top Header Section of Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-10 border-b border-[#053d5a]/10">

          {/* Logo */}
          <div className="shrink-0 flex flex-col mb-6 md:mb-0">
            <img src={`/pmf-medical/logo.png`} alt="Logo" className="w-48 sm:w-60 md:w-70" />
          </div>

          {/* Connect Details */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
              <Phone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-text-dark font-semibold text-[15px] mb-0.5">Connect With Us</span>
              <span className="text-text-dark text-[15px]">+49 2236 9641-370</span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {/* Services */}
          <div>
            <h4 className="font-bold text-text-dark text-base mb-6">Services</h4>
            <ul className="space-y-4 text-[13px] md:text-sm text-[#2d3a4a] font-medium">
              <li><Link href="/" className="hover:text-black transition-colors">Mesh Implants for Breast Surgery</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Mesh Implants for Hernia Surgery</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Histotechnology</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Vascular Access</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Breast Cancer Diagnostics</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Wound Drainage</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Infusion Pumps</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">ASEPT® Drainage</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Cardio-Vascular</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">FEATHER® Blades</Link></li>
            </ul>
          </div>

          {/* Application fields */}
          <div>
            <h4 className="font-bold text-text-dark text-base mb-6">Application fields</h4>
            <ul className="space-y-4 text-[13px] md:text-sm text-[#2d3a4a] font-medium">
              <li><Link href="/" className="hover:text-black transition-colors">Breast cancer diagnostics</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Vascular Access</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Mesh Implants</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Pleural and Ascites Drainage</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Prevention of needle stick injuries</Link></li>
            </ul>
          </div>

          {/* Knowledge */}
          <div>
            <h4 className="font-bold text-text-dark text-base mb-6">Knowledge</h4>
            <ul className="space-y-4 text-[13px] md:text-sm text-[#2d3a4a] font-medium">
              <li><Link href="/" className="hover:text-black transition-colors">Port Systems</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Pleural Effusion and Ascites</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Breast Reconstruction</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Titanisation of Mesh Implants</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-text-dark text-base mb-6">Company</h4>
            <ul className="space-y-4 text-[13px] md:text-sm text-[#2d3a4a] font-medium">
              <li><Link href="/" className="hover:text-black transition-colors">News</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">About us</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Our mission, vision and values</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Partners</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Brexit and Post Brexit Supply</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Exhibitions, congresses and workshops</Link></li>
              <li><Link href="/" className="hover:text-black transition-colors">Our Policies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-[#053d5a]/20">
          <div className="flex flex-wrap items-center font-medium gap-x-6 gap-y-3 lg:gap-x-10 mb-4 md:mb-0 text-[14px] text-text-dark">
            <Link href="/" className="hover:text-black transition-colors">Contact</Link>
            <Link href="/" className="hover:text-black transition-colors">Imprint</Link>
            <Link href="/" className="hover:text-black transition-colors">Data Privacy</Link>
            <Link href="/" className="hover:text-black transition-colors">Sitemap</Link>
            <Link href="/" className="hover:text-black transition-colors">Terms and Conditions</Link>
          </div>
          <div className="text-[14px] font-medium text-text-dark">
            © pfm medical gmbh. All rights reserved
          </div>
        </div>
      </Container>
    </footer>
  );
}
