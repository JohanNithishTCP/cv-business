// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-200 pt-12 pb-6 text-[#333333]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand Column */}
        <div data-aos="fade-up" className="space-y-4">
          <img
            src="/promisemed/logo.png"
            alt="Promisemed Logo"
            width='160'
            height='40'
            className="object-contain"
          />
          <p className="text-base leading-relaxed">
            Promisemed Medical Devices Inc. provides innovative, high-quality
            healthcare products across key medical fields, backed by global
            certifications and strong R&D.
          </p>
          <hr className="border-t border-[#33333337] my-4" />
          <h3 className="font-medium text-[#333333] text-[19px] mb-2">
            Social Media Links
          </h3>

          <div className="flex gap-4">
            <img src="/promisemed/youtube.png" alt="YouTube" width={20} height={20} />
            <img src="/promisemed/linkedin.png" alt="LinkedIn" width={20} height={20} />
          </div>
        </div>

        {/* Links Columns */}
        <div data-aos="fade-up">
          <h3 className="font-medium text-[#333333] text-[19px] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-6 text-base">
            {[
              "Home",
              "Products",
              "About Promisemed",
              "News and Media",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-emerald-600">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up">
          <h3 className="font-medium text-[#333333] text-[19px] mb-4">
            Products
          </h3>
          <ul className="space-y-6 text-base">
            {[
              "Diabetes Care",
              "Vascular Access",
              "Interventional Endoscopy",
              "Injection and Infusion",
              "Interventional Ultrasound",
            ].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-emerald-600">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up">
          <h3 className="font-medium text-[#333333] text-[19px] mb-4">
            Company
          </h3>
          <ul className="space-y-6 text-base">
            {["Legal", "Notices", "Site map Links"].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-emerald-600">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div data-aos="fade-up">
          <h3 className="font-medium text-[#333333] text-[19px] mb-4">
            Contact
          </h3>
          <ul className="space-y-6 text-base">
            <li>+1-830-359-7366</li>
            <li>info@promisemed.ca</li>
            <li>506 W. Rhapsody Dr., Suite B, San Antonio, Texas 78216, USA</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-[#333333] text-sm lg:text-base border-t border-[#333333] pt-6">
        © 2026 Promisemed Medical Devices Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
