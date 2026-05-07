import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        "Home",
        "Products",
        "Services",
        "Infection Prevention",
        "About",
        "Education & Resources",
        "News",
        "Contact",
      ],
    },
    {
      title: "Resources & Compliance",
      links: [
        "Contact",
        "eIFU",
        "Compliances & Ethics",
        "Modern Slavery Statement",
        "UK Carbon Reduction Plan",
        "Supplier Download Page",
      ],
    },
    {
      title: "Legal & Policies",
      links: [
        "Privacy Notice",
        "Cookie Policy",
        "Terms and Conditions of Use",
        "California Declaration",
        "Imprint",
        "Cookies Settings",
      ],
    },
  ];

  return (
    <footer className="bg-[#f5f5f5] pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-gray-100 font-sans">
      <div className="container mx-auto">
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column - Wider than others */}
          <div data-aos="fade-up" className="lg:col-span-4 space-y-6">
            <img
              src="/jaeger/logo.png"
              alt="JAEGER Logo"
              className="h-10 w-auto"
            />
            <div className="text-[16px] leading-relaxed text-[#333333] max-w-base space-y-2">
              <p>
                Last updated May 2025 | Trademarks are the property of their
                respective owners (re: © 2024, 2025 JAEGER MEDICAL GMBH)
              </p>
              <p>
                Jaeger, the Jaeger logo, and other trademarks are the property
                of Jaeger Medical GmbH or one of its affiliates.
              </p>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerSections.map((section, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className="lg:col-span-2 space-y-4">
              <h4 className="text-[18px] font-bold text-[#333333]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-base text-[#333333] hover:text-[#00689B] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address Column */}
          <div data-aos="fade-up" className="lg:col-span-2 space-y-4">
            <h4 className="text-[18px] font-bold text-[#333333]">
              Address
            </h4>
            <div className="text-base text-[#333333] leading-relaxed space-y-1">
              <p>Jaeger Medical GmbH</p>
              <p>Leibnizstrasse 7</p>
              <p>97204 Hoechberg</p>
              <p>Germany</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-[16px] text-[#333333]">
            © Copyright jaegerrdx 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
