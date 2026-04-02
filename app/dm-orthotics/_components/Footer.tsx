import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Products & Services",
      links: [
        "Products by Body Area",
        "Products by Condition",
        "Patient Clinics"
      ]
    },
    {
      title: "About Us",
      links: [
        "Our Story",
        "News",
        "Events",
        "Meet The Team",
        "Careers",
        "UK Partners",
        "Contact Us"
      ]
    },
    {
      title: "Knowledge Hub",
      links: [
        "Condition Management",
        "Research",
        "FAQs"
      ]
    },
    {
      title: "International Suppliers",
      links: [
        "Find an international supplier",
        "Become an international supplier"
      ]
    }
  ];

  return (
    <footer className="bg-[#101828] text-white pt-10 pb-4 font-medium overflow-hidden">
      <div className="container">

        {/* Top Header Row in Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-5 mb-14 gap-8">
          <Link href="/" className="shrink-0">
            <img
              src="/dm-orthotics/logo.png"
              width={160}
              height={45}
              alt="Logo"
              className="brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
            />
          </Link>
          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              { name: "Home", active: true },
              { name: "Products & Services", active: false },
              { name: "Health Professionals", active: false },
              { name: "Customer Services", active: false }
            ].map((nav) => (
              <Link
                key={nav.name}
                href="#"
                className={`text-sm tracking-tight text-[15px] transition-colors hover:text-primary ${nav.active ? "text-primary" : "text-white/80"}`}
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-12" data-aos="fade-up">

          {/* Column 1: CTAs & Socials (Wider) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:pr-10">
            <h3 className="text-lg md:text-xl font-bold leading-tight max-w-[300px] text-white/95">
              We can help with any custom order for you or your patients
            </h3>
            <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-3.5 text-sm font-bold tracking-tight transition-all active:translate-y-0.5 rounded-sm">
              Get Quote
            </button>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <button key={i} className="text-white hover:text-primary transition-colors">
                  <Icon size={18} strokeWidth={2.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Nav Categories */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            {footerLinks.map((column, colIndex) => (
              <div key={`${column.title}-${colIndex}`} className="space-y-6">
                <h4 className="text-[16px] md:text-[18px] font-bold tracking-tight text-white/95">{column.title}</h4>
                <ul className="space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/60 hover:text-white transition-colors text-[13px] leading-relaxed group block">
                        <span className="group-hover:translate-x-1 text-[14px] md:text-[15px] transition-transform inline-block tracking-tight">{link}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/40 tracking-tight" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-wrap justify-center text-[12px] md:text-[14px] text-white/60 items-center divide-x divide-white/20 order-2 md:order-1">
            <Link href="#" className="px-3 md:pr-4 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="px-3 md:px-4 hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="px-3 md:px-4 hover:text-white transition-colors">T&Cs</Link>
            <Link href="#" className="px-3 md:pl-4 hover:text-white transition-colors">Cookies</Link>
          </div>

          <p className="order-1 md:order-2 font-medium text-[12px] md:text-[14px] text-white/60! text-center">
            {currentYear} © DM Orthotics Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
