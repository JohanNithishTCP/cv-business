import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa"; // Using lucide-react for icons

const Footer = () => {
  const quickLinks = [
    [
      "SHOP NOW",
      "OUR STORY",
      "CEEK PRODUCTS",
      "HOW TO USE",
      "PATENTS",
      "CEEK PRODUCT BROCHURE",
    ],
    [
      "INSTRUCTIONS FOR USE NELLA KIND SU",
      "INSTRUCTIONS FOR USE NELLA KIND RU",
      "RETURN POLICY",
      "PRIVACY POLICY",
      "CALIFORNIA TRANSPARENCY ACT",
    ],
  ];

  const categories = [
    [
      "CEEK IN THE NEWS",
      "GIVING BACK GREEN",
      "FAQS",
      "CUSTOMER SERVICE PHONE #: 1.855.559.2335",
      "INSTRUCTIONS FOR USE NELLA NEXT REUSABLE",
    ],
    [
      "INSTRUCTIONS FOR USE VULIGHT",
      "FAINSTRUCTIONS FOR USE NELLA NEXT",
      "INSTRUCTIONS FOR USE VUSLEEVE",
      "SHIPPING POLICY",
    ],
  ];

  return (
    <footer className="bg-[#726A8B] text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-3 flex flex-col items-start">
          <div data-aos="fade-up" className="mb-8">
            <Image
              src="/ceek/logo.png" // Path to your logo in the public folder
              alt="Ceek Women's Health Logo"
              width={160} // Adjust width to match your design
              height={60} // Adjust height to match your design
              className="brightness-0 invert" // This trick turns a black logo white if using a PNG
              priority // Loads the logo immediately
            />
          </div>
          <div data-aos="fade-up" className="flex gap-4">
            <a
              href="#"
              className="bg-[#FFFFFF] p-2 rounded-full text-[#6F6589] hover:opacity-80 transition-opacity">
              <FaLinkedinIn size={18} fill="currentColor" />
            </a>
            <a
              href="#"
              className="bg-[#FFFFFF] p-2 rounded-full text-[#6F6589] hover:opacity-80 transition-opacity">
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-[#FFFFFF] p-2 rounded-full text-[#6F6589] hover:opacity-80 transition-opacity">
              <FaFacebookF size={18} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div
          data-aos="fade-up"
          className="md:col-span-2 lg:col-span-4 text-[#FFFFFF]">
          <h4 className="font-bold mb-6 text-sm md:text-2xl">Quick Links</h4>
          <div className="w-full h-px bg-[#FFFFFF] my-6"></div>
          <div className="grid grid-cols-2 gap-4 text-sm leading-relaxed opacity-90">
            <ul className="space-y-3">
              {quickLinks[0].map((link) => (
                <li key={link} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {quickLinks[1].map((link) => (
                <li key={link} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Category Columns */}
        <div
          data-aos="fade-up"
          className="md:col-span-3 lg:col-span-5 text-[#FFFFFF]">
          <h4 className="font-bold mb-6 text-sm md:text-2xl">Category</h4>
          <div className="w-full h-px bg-[#FFFFFF] my-6"></div>
          <div className="grid grid-cols-2 gap-4 text-[10px] leading-relaxed opacity-90">
            <ul className="space-y-3">
              {categories[0].map((link) => (
                <li
                  key={link}
                  className="hover:underline cursor-pointer text-sm">
                  {link}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {categories[1].map((link) => (
                <li
                  key={link}
                  className="hover:underline cursor-pointer text-sm">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-16 pt-6 border-t text-center">
        <p className="text-base text-[#FFFFFF] opacity-80">
          © 2026, Ceek Women's Health
        </p>
      </div>
    </footer>
  );
};

export default Footer;
