"use client";

import Image from "next/image";

export default function Support() {
  return (
    <section className="relative w-full py-16 flex justify-center bg-[#5E76BA] overflow-hidden">
      {/* BACKGROUND IMAGE (15% opacity) */}
      <div className="absolute inset-0">
        <Image
          src="/de-soutter-medical/bg-1.png" // 👉 your bg image
          alt="background"
          fill
          className="object-cover opacity-[0.15]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 grid lg:grid-cols-12  gap-8">
        <div data-aos="fade-up" className="text-[#FFFFFF] space-y-5  lg:col-span-5" >
          <h2 className="opacity-80 text-[22px] font-medium text-[#FFFFFF]">
            Support
          </h2>

          <h2 className="text-[#FFFFFF] text-[22px] font-medium">
            Empowering distributors and customers with seamless access, expert
            service, and end-to-end support.
          </h2>

          <p className="opacity-80 text-base leading-relaxed text-[#FFFFFF] ">
            De Soutter Medical provides a complete support ecosystem that
            enhances efficiency and reliability through its Distributor Portal,
            expert servicing, and dedicated customer support—ensuring optimal
            performance and seamless assistance throughout the product
            lifecycle.
          </p>
        </div>

        {/* RIGHT TOP CARD */}
        <div
          data-aos="fade-up"
          className="bg-[#FFFFFF] rounded-2xl shadow-md flex overflow-hidden  lg:col-span-7">
          <div className="w-1/3 relative">
            <Image
              src="/de-soutter-medical/support-1.png"
              alt="customer service"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5 space-y-3 w-2/3">
            <h4 className="text-[#353A3D] text-[20px] font-semibold">
              Customer Service Team
            </h4>
            <p className=" text-[#333333] text-base">
              De Soutter Medical is committed to supporting customers at every
              stage of business, from purchasing the best equipment, to setting
              up and offering affordable solutions when equipment requires
              replacement.
            </p>
            <button className="text-[#133167]">Learn More...</button>
          </div>
        </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="lg:col-span-2 grid lg:grid-cols-12  gap-8">
          {/* CARD 1 */}
          <div
            data-aos="fade-up"
            className="bg-[#FFFFFF] rounded-2xl shadow-md flex overflow-hidden lg:col-span-5">
            <div className="w-1/3 relative">
              <Image
                src="/de-soutter-medical/support-3.png"
                alt="portal"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 space-y-3 w-2/3">
              <h4 className="text-[#353A3D] text-[20px] font-semibold">
                Distributor Portal
              </h4>
              <p className=" text-[#333333] text-base">
                The new Distribution Portal is a source for De Soutter Medical
                global partners to obtain accurate, current and useful
                information that supports their business activity.
              </p>
              <button className="text-[#133167]">Learn More...</button>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            data-aos="fade-up"
            className="bg-[#FFFFFF] rounded-2xl shadow-md flex overflow-hidden lg:col-span-7">
            <div className="w-1/3 relative">
              <Image
                src="/de-soutter-medical/support-2.png"
                alt="maintenance"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 space-y-3 w-2/3">
              <h4 className="text-[#353A3D] text-[20px] font-semibold">
                Maintenance & Servicing
              </h4>
              <p className=" text-[#333333] text-base">
                De Soutter Medical takes great pride in the excellent after
                sales support that we provide our customers. Our equipment is
                supported by a number of strategically located servicing and
                repair centres.
              </p>
              <button className="text-[#133167]">Learn More...</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
