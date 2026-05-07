import { ArrowUpRight, ShieldCheck, HeartHandshake, Settings, HandHeart } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side: Image Setup */}
          {/* Left Side: Image Setup */}
          <div className="relative isolate group" data-aos="fade-right">

            {/* The Floating Blue Box over the image with precise white cutout */}
            <div className="absolute top-0 left-0 z-20 bg-white pr-4 pb-4 md:pr-6 md:pb-6 rounded-br-[2rem]">
              <div className="bg-[#4782d3] text-white p-6 md:p-8 rounded-[1.5rem] w-48 md:w-64 flex flex-col justify-center shadow-lg">
                <p className="font-bold! text-lg leading-snug">
                  Over 1M packs yearly in "Class 8" clean rooms.
                </p>
              </div>

              {/* Inverted corner shapes for smooth cutout effect */}
              {/* Top-Right inverse curve */}
              <svg className="absolute top-0 -right-6 w-6 h-6 text-white pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24A24 24 0 0 0 0 24V0z" />
              </svg>
              {/* Bottom-Left outside curve */}
              <svg className="absolute -bottom-6 left-0 w-6 h-6 text-white pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24A24 24 0 0 0 0 24V0z" />
              </svg>
            </div>

            {/* Image Placeholder */}
            <div className="relative w-full rounded-[2rem] overflow-hidden bg-slate-100">
              <img src="/kimal/images/about.png" alt="about-us" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]" />
            </div>
          </div>

          {/* Right Side: Text & Features */}
          <div className="flex flex-col" data-aos="fade-left">
            <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold mb-6 max-w-lg">
              At Kimal, innovation and exceeding expectations are at our core.
            </h2>

            <p className="text-base lg:text-lg mb-5">
              We are an innovative and trusted manufacturer and supplier of specialised procedure packs and vascular access devices to hospitals across the world.
            </p>

            <p className="text-base lg:text-lg mb-12">
              At Kimal, we are proud of our achievements but we never sit back on our laurels, as we strive to continuously improve in all aspects of the products and service we give to our worldwide customer base.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center shrink-0">
                  <img src="/kimal/images/support.png" alt="innovation" className="w-10 object-contain" />
                </div>
                <div>
                  <h4 className="text-base lg:text-[20px] font-bold mb-1.5">Experience our innovation</h4>
                  <p className="text-base lg:text-[17px]">We create advanced solutions for better patient care and healthcare needs.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center shrink-0">
                  <img src="/kimal/images/service.png" alt="innovation" className="w-10 object-contain" />
                </div>
                <div>
                  <h4 className="text-base lg:text-[20px] font-bold mb-1.5">Trusted support</h4>
                  <p className="text-base lg:text-[17px]">Our team ensures reliable service, guidance, and timely delivery.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center shrink-0">
                  <img src="/kimal/images/exp.png" alt="innovation" className="w-10 object-contain" />
                </div>
                <div>
                  <h4 className="text-base lg:text-[20px] font-bold mb-1.5">Utilise our experience</h4>
                  <p className="text-base lg:text-[17px]">With years of expertise, we provide trusted solutions backed by knowledge.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center shrink-0">
                  <img src="/kimal/images/excellence.png" alt="innovation" className="w-10 object-contain" />
                </div>
                <div>
                  <h4 className="text-base lg:text-[20px] font-bold mb-1.5">Trust our commitment</h4>
                  <p className="text-base lg:text-[17px]">We focus on quality, sustainability, and ethical practices.</p>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-10 flex items-center">
              <Button text="Learn More About Us" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
