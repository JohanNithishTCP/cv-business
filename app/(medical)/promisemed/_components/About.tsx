"use client";


export default function About() {
  return (
    <section className="w-full bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE (Images) */}
        <div
          data-aos="fade-up"
          className="relative w-full h-62.5 sm:h-75 md:h-88 lg:h-full overflow-hidden rounded-2xl">
          <img
            src="/promisemed/about.png"
            alt="factory"
            className="w-full h-full"
          />
        </div>

        {/* RIGHT SIDE (Content) */}
        <div data-aos="fade-up" className="space-y-6">
          <h2 className="text-2xl lg:text-[32px] font-medium text-[#009B43] leading-snug">
            Empowering Healthcare with Trusted Technology <br />
            and Expertise
          </h2>

          <p className="text-[#333333] text-base leading-relaxed">
            Promisemed Medical Devices Inc. is devoted to offering premium
            healthcare products and considerate services with innovative
            technology in the fields of Diabetes Care, Injection&Infusion,
            Vascular Access, Interventional Ultrasound and Interventional
            Endoscopy all around the world for both individuals and
            professionals.
          </p>

          <p className="text-[#333333] text-base leading-relaxed">
            Headquartered in Texas, USA, Promisemed owns 100,000-class purified
            workshops for production as well as pilot-scale experiment. Our
            products are with CE certificates and US FDA approval, with ISO
            13485: 2016, MDSAP, FMR Japan, China Class III Manufacturing License
            and US FDA Establishment Manufacturing Facility.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#2353A3] overflow-hidden shrink-0">
                <img
                  src="/promisemed/icon1.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[#333333] text-[18px] mb-2">
                  Innovation-Driven Growth
                </h4>
                <p className="text-base text-[#333333] ">
                  We continuously invest in advanced technology and R&D to
                  create innovative healthcare solutions that enhance outcomes
                  for patients and professionals worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-15 h-15 flex items-center justify-center rounded-full bg-[#2353A3] overflow-hidden shrink-0">
                <img
                  src="/promisemed/icon2.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[#333333] text-[18px] mb-2">
                  Global Quality & Trust
                </h4>
                <p className="text-base text-[#333333]">
                  With globally certified manufacturing and strict quality
                  standards, we deliver reliable, high-quality medical products
                  trusted by healthcare providers worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-4 bg-linear-to-r from-[#009B43] to-[#2353A3] text-[#FFFFFF] text-[18px] px-6 py-3 rounded-full font-semibold hover:shadow-md transition cursor-pointer">
            Know More About Us &gt;&gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
}
