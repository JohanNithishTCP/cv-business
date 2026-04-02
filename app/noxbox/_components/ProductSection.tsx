import Image from "next/image";
import { CheckCircle, ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="w-full bg-[#0D3B66] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-6 text-white">

          <div className="flex items-center gap-3 mb-6" data-aos="fade-up">
            <img
              src={`/noxbox/assets/gemini_logo_blue.png`}
              alt="gemini logo"
              width={34}
              height={34}
            />
            <h2 className="text-3xl font-semibold text-[#1EA7D7]">
              Products
            </h2>
          </div>

          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl font-semibold"
          >
            NOxBOX® Nitric Oxide Delivery and Monitoring System
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-gray-200 leading-relaxed"
          >
            The NOxBOX® nitric oxide delivery and monitoring system provides
            a comprehensive means of delivering and monitoring inhaled nitric
            oxide therapy.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-4 text-gray-200 leading-relaxed"
          >
            Inhaled nitric oxide therapy is available by prescription (Rx)
            only. The NOxBOX® delivery system must be used strictly according
            to the approved indications, warnings, precautions, and
            prescribing information, currently authorized for neonatal use
            in the US.
          </p>

          <div className="border-t border-white/20 my-8" />

          <h4
            data-aos="fade-up"
            data-aos-delay="350"
            className="font-semibold mb-4"
          >
            Main Features
          </h4>

          <ul className="space-y-4">

            <Feature text="Intelligent closed loop nitric oxide delivery system" delay={400} />
            <Feature text="NO dose delivery from 0 to 80 ppm in intelligent mode" delay={450} />
            <Feature text="Touch screen operation" delay={500} />
            <Feature text="Real time NO, NO2, and O2 monitoring" delay={550} />

          </ul>

          <div data-aos="fade-up" data-aos-delay="600" className="mt-10">
            <button className="relative bg-[#1EA7D7] px-8 py-4.5 text-white font-medium flex items-center cursor-pointer">

              Learn more about the NOxBOXi

              <span className="absolute -right-6 w-12 h-12 bg-[#1EA7D7] rounded-full flex items-center justify-center shadow-lg border border-black">
                <ChevronRight className="" size={22} />
              </span>

            </button>
          </div>

        </div>


        {/* RIGHT VISUAL AREA */}

        <div className="lg:col-span-6 relative min-h-122.5">

          {/* Gradient block */}
          <div
            data-aos="fade-left"
            className="
            hidden xl:block
            absolute
            right-36
            top-20
            w-85
            h-85
            bg-linear-to-br
            from-[#1EA7D7]
            to-[#0E6BA8]
            z-10
          "
          />

          {/* Bottom product */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="
            absolute
            lg:left-16
            lg:-bottom-12
            w-full
            h-full
            lg:w-75
            lg:h-75
            bg-white
            p-6
            shadow-xl
            z-20
          "
          >
            <img
              src={`/noxbox/assets/noxbox_left_product.png`}
              alt="product"
              className="object-contain"
            />
          </div>

          {/* Top product */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="
            hidden sm:block
            absolute
            right-20
            lg:right-3
            lg:-top-16
            lg:w-75
            lg:h-75
            bg-white
            p-6
            shadow-xl
            z-30
          "
          >
            <img
              src={`/noxbox/assets/noxbox_right_product.png`}
              alt="product"
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


function Feature({ text, delay }: { text: string; delay: number }) {
  return (
    <li
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex items-center gap-3 text-gray-200"
    >
      <CheckCircle className="text-[#1EA7D7]" size={18} />
      {text}
    </li>
  );
}