import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/*  Footer Main */}
      <div className="bg-[#F5F5F5] py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo */}
          <div data-aos="fade-up" className="cursor-pointer">
            <Image
              src="/dimeda/logo.png" // put your logo here
              alt="Dimeda Logo"
              width={160}
              height={80}
            />
          </div>

          {/* About Us */}
          <div data-aos="fade-up">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              ABOUT US
            </h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li className="text-[#7C2B83] cursor-pointer">Company</li>
              <li className=" hover:text-[#514f4fa5] cursor-pointer">Newsletter</li>
              <li className=" hover:text-[#514f4fa5] cursor-pointer">Trade Shows</li>
              <li className=" hover:text-[#514f4fa5] cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Products */}
          <div data-aos="fade-up">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              PRODUCTS
            </h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li className="text-[#7C2B83] cursor-pointer">Product Areas</li>
              <li className="hover:text-[#514f4fa5] cursor-pointer">Stock Check</li>
              <li className="hover:text-[#514f4fa5] cursor-pointer">Catalogues</li>
              <li className="hover:text-[#514f4fa5] cursor-pointer">Instructions for Use</li>
            </ul>
          </div>

          {/* Company */}
          <div data-aos="fade-up">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li className="hover:text-[#514f4fa5] cursor-pointer">Legal notice</li>
              <li className="hover:text-[#514f4fa5] cursor-pointer">Data protection</li>
              <li className="hover:text-[#514f4fa5] cursor-pointer">Terms</li>
              <li className="hover:text-[#514f4fa5] cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              CONTACT US
            </h3>

            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#EB8A20] hover:text-[#514f4fa5] w-5 h-5 mt-1 shrink-0" />
                <span>Gänsacker 54+56, 78532 Tuttlingen, Germany</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#EB8A20] hover:text-[#514f4fa5] w-5 h-5 shrink-0" />
                <span>+49 (0) 7462 - 94 61 0</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-[#EB8A20] hover:text-[#514f4fa5] w-5 h-5 shrink-0" />
                <span>info@dimeda.de</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*Bottom Bar */}
      <div className="bg-white text-center font-normal text-base py-5 text-gray-600">
        Copyright © 2026 Gynex Corporation. All rights reserved.
      </div>
    </footer>
  );
}
