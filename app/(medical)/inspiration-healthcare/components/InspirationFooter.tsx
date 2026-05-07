"use client";

import { ArrowRight } from "lucide-react";

export default function InspirationFooter() {

  return (
    <footer className="bg-[#556066] text-white px-6 lg:px-20 py-16">
      <div className="max-w-380 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 md:gap-10" data-aos="fade-up">
          {/* LOGO + SUBSCRIBE */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
                <img
                  src="/inspiration-healthcare/assets/inspiration-footer.png"
                  alt="Inspiration Healthcare Logo"
                  className="h-12 mb-6"
                />

            <p className="text-base mb-3 opacity-80">Subscribe</p>

            <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 text-base text-gray-700 outline-none"
              />
              <button className="bg-gray-400 px-4 cursor-pointer py-3.5 text-gray-700 hover:bg-gray-400 transition">
               <ArrowRight size={14} color="white"/>
              </button>
            </div>
          </div>

          {/* LINKS */}
          <FooterColumn title="Group" items={groupLinks} />
          <FooterColumn title="Investors" items={investorLinks} />
          <FooterColumn title="Areas of Care" items={careLinks} />
          <FooterColumn title="News" items={newsLinks} />
          <FooterColumn title="Quick Links" items={quickLinks} />
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 mt-12 pt-6 text-center text-base opacity-80 break-words">
          Copyright © 2023 Inspiration Healthcare Group plc. All Rights
          Reserved. Inspiration Healthcare Group plc companies: Inspiration
          Healthcare Ltd | SLE Ltd | Viomedex Ltd
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-base font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm opacity-80">
        {items.map((item, i) => (
          <li key={i} className="text-base hover:opacity-100 cursor-pointer transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const groupLinks = [
  "Leadership Team",
  "Business Model",
  "ESG",
  "Careers",
  "Modern Slavery",
  "Ethical Business Statement",
];

const investorLinks = [
  "Shareprice",
  "Reports & Presentations",
  "Shareholder Data",
  "Advisors",
  "Aim 26",
];

const careLinks = [
  "Acute Care",
  "Infusion Therapies",
  "Technology Support",
];

const newsLinks = ["Analyst Research", "RNS"];

const quickLinks = [
  "Cookies",
  "Privacy Policy",
  "Legal",
  "Terms & Conditions",
  "Regulatory Policy",
  "Carbon Reduction Plan",
  "SECR Environmental Report",
];
