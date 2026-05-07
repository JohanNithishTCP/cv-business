"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative group inline-block pb-0.5 transition-colors text-base lg:text-[16px] ${isActive ? "text-[#4782d3]" : "hover:text-[#4782d3]"}`}
      >
        {children}
        <span
          className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-[#4782d3] transition-transform duration-300 origin-center ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        ></span>
      </Link>
    );
  };

  return (
    <footer className="bg-[#fbFcfd] text-slate-500 pt-16 pb-6 border-t border-gray-100 text-[13px]">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Logo Column */}
          <div className="flex flex-col" data-aos="fade-up" data-aos-delay="0">
            <Link href="/kimal" className="flex flex-col leading-tight mb-8">
              <img src="/kimal/images/kimal-logo.png" alt="Kimal Logo" className="w-46 h-auto" />
            </Link>
          </div>

          {/* Links 1 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-[20px] mb-6 tracking-wide!">Quick Links</h4>
            <ul className="space-y-4">
              <li><FooterLink href="/kimal">Home</FooterLink></li>
              <li><FooterLink href="#">About Us</FooterLink></li>
              <li><FooterLink href="#">Products</FooterLink></li>
              <li><FooterLink href="#">Maternity by Kimal</FooterLink></li>
              <li><FooterLink href="#">Contact us</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">News & Events</FooterLink></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-[20px] mb-6 tracking-wide!">Clinical Areas</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Cardiac Surgery</FooterLink></li>
              <li><FooterLink href="#">Cardiology</FooterLink></li>
              <li><FooterLink href="#">Critical Care</FooterLink></li>
              <li><FooterLink href="#">Gastroenterology</FooterLink></li>
              <li><FooterLink href="#">Gynaecology & Obstetrics</FooterLink></li>
              <li><FooterLink href="#">Haematology</FooterLink></li>
              <li><FooterLink href="#">See All...</FooterLink></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-[20px] mb-6 tracking-wide!">Other Links</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Business Ethics Policy</FooterLink></li>
              <li><FooterLink href="#">Carbon Reduction Plan 2025</FooterLink></li>
              <li><FooterLink href="#">Careers at Kimal</FooterLink></li>
              <li><FooterLink href="#">Cookie Policy</FooterLink></li>
              <li><FooterLink href="#">Environmental Policy</FooterLink></li>
              <li><FooterLink href="#">Gender Pay Gap Analysis</FooterLink></li>
              <li><FooterLink href="#">Health & Safety Policy</FooterLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-[20px] mb-6 tracking-wide!">Contact</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="text-base lg:text-[17px]">Kimal PLC : +44 (0)845 4379542</li>
              <li className="text-base lg:text-[17px]">Kimal France : +33 (0)9 75 18 17 52</li>
              <li className="text-base lg:text-[17px]">Kimal FZE : +97 (0)16 552 8146</li>
              <li className="pt-2 text-base lg:text-[17px]">Kimal Environmental Team</li>
              <li><a href="mailto:environment@kimal.com" className="text-base lg:text-[17px] hover:text-[#4782d3] transition-colors">environment@kimal.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-[14px] text-slate-400">
          <p>© Copyright Kimal 2026</p>
        </div>
      </div>
    </footer>
  );
}
