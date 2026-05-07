import Link from "next/link";
import { MailIcon, PhoneIcon, LocationIcon, FacebookIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white pt-16 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent relative">
      <div className="absolute inset-0 bg-[url('/future-med/home/bg.png')] bg-no-repeat bg-cover opacity-30"></div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Subscribe & Socials */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <div className="flex items-center rounded overflow-hidden">
              {/* Footer Logo space */}
              <img src={`/future-med/logo.png`} alt="Logo" className="w-20 h-20 object-cover" />
            </div>

            <div className="flex flex-col gap-3 max-w-[240px]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 rounded bg-white text-black text-sm outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-black font-semibold px-4 py-2.5 rounded hover:bg-gray-100 transition-colors text-sm shadow-sm w-[120px]">
                Subscribe
              </button>
            </div>

            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-bold mb-6 para">Quick Links</h4>
            <ul className="flex flex-col gap-4 para text-gray-100">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-bold mb-6 para">Company</h4>
            <ul className="flex flex-col gap-4 para text-gray-100">
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-bold mb-6 para">Contact Info</h4>
            <ul className="flex flex-col gap-5 para text-gray-100">
              <li>
                <a href="mailto:enquiries@futuremedglobal.com" className="flex items-start gap-3 hover:text-white transition-colors">
                  <MailIcon className="w-5 h-5 shrink-0" />
                  <span>enquiries@futuremedglobal.com</span>
                </a>
              </li>
              <li>
                <a href="tel:1300014924" className="flex items-start gap-3 hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5 shrink-0" />
                  <span>1300 014 924</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <LocationIcon className="w-5 h-5 shrink-0" />
                  <address className="not-italic leading-relaxed">
                    1 Flagstaff Ln, West Melbourne,<br />
                    VIC 3003, Australia
                  </address>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-white text-center py-4">
        <p className="text-black text-xs font-semibold">
          © 2026, FutureMed Global Pty Ltd
        </p>
      </div>
    </footer>
  );
}
