import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#5b6874] text-white pt-13 pb-4 border-t border-white/10 bg-cover bg-bottom" style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}>
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>
      <div className="container relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          <div className="lg:col-span-2">
            <Link href="/sunset-healthcare" className="inline-block mb-4">
              <div className="w-[180px] h-[50px] flex items-center justify-center rounded">
                <img src="/sunset-healthcare/logo-white.png" alt="Logo" className="" />
              </div>
            </Link>
            <p className="text-[16px] mt-5 text-justify lg:pr-8 text-white/80">
              Sunset Healthcare Solutions, founded in 2004, is a Chicago-based manufacturer and distributor of high-quality HME supplies. Serving over 1,600 healthcare partners, we deliver innovative solutions, specialized support, and consistent value. ISO 13485 compliant and recognized on the Inc. 5000 list nine times, we are committed to excellence across HME and Acute Care technologies.</p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[17px]">Our Products</h4>
            <ul className="space-y-4 text-[16px] text-white/80">
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">OEM Manufacturing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ordering</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Forms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Videos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[17px]">Legal & Policies</h4>
            <ul className="space-y-4 text-[16px] text-white/80">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[17px]">Services</h4>
            <div className="text-[16px] text-white/80 space-y-1 mb-8">
              <p>Sunset Healthcare Solutions</p>
              <p>141 W Jackson Blvd Ste 1950</p>
              <p>Chicago IL 60604</p>
            </div>

            <h4 className="font-bold mb-4 text-[17px]">Social Media</h4>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
            </div>

            <p className="text-[16px] text-white/80">Ph: 877-578-6738</p>
          </div>
        </div>

        <div className="justify-center border-t border-white/20 pt-4 flex flex-col md:flex-row gap-6 md:gap-12 text-[15px] text-white/70">
          <Link href="#" className="hover:text-white transition-colors">Portable and Pediatric Nebulizers</Link>
          <Link href="#" className="hover:text-white transition-colors">Ventilator Accessories Collection</Link>
          <Link href="#" className="hover:text-white transition-colors">Oxygen Connectors and Adapters</Link>
        </div>
      </div>
    </footer>
  );
}
