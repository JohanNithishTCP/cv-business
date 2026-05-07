"use client";


import { useState } from "react";

export default function AboutSection() {
  const [active, setActive] = useState("vision");

  return (
    <section className="w-full flex justify-center pt-16 lg:pt-20  bg-[#FFFFFF]">
      <div className="w-[95%] container mx-auto space-y-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div
            data-aos="fade-left"
            className="rounded-2xl overflow-hidden ">
            <img
              src="/delphos-implants/images/about.png" // replace with your image
              alt="about"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-[24px] text-[#000000] font-semibold mb-4">
              About Delphos
            </h2>

            <p className="text-[#666666] text-[17px] leading-relaxed mb-6 text-justify">
              Our story began in 2013 with a clear objective: to restore the
              quality of life for people who need surgical implants. To achieve
              this goal, we assembled a highly qualified team and invested in
              cutting-edge technology, creating a winning formula for developing
              innovative products.
            </p>

            {/* TOGGLE BUTTONS */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActive("vision")}
                className={`px-5 py-2 rounded-full text-[16px] font-semibold cursor-pointer ${active === "vision"
                  ? "bg-[#059347] text-[#FFFFFF]"
                  : "bg-[#F1F1F1] text-[#333333]"
                  }`}>
                Our Vision
              </button>

              <button
                onClick={() => setActive("mission")}
                className={`px-5 py-2 rounded-full text-[16px] font-semibold cursor-pointer ${active === "mission"
                  ? "bg-[#059347] text-[#FFFFFF]"
                  : "bg-[#F1F1F1] text-[#333333]"
                  }`}>
                Our Mission
              </button>
            </div>

            <div className="grid grid-cols-12 rounded-2xl overflow-hidden">
              {/* LEFT (4 cols) */}
              <div className="col-span-12 sm:col-span-4 bg-gray-200">
                <img
                  src={active === "vision" ? "/delphos-implants/images/vision.png" : "/delphos-implants/images/mission.png"}
                  alt={active}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* RIGHT (8 cols) */}
              <div className="col-span-12 sm:col-span-8 bg-linear-to-r from-[#8BC541] to-[#006938] text-[#FFFFFF] p-6 text-[16px] leading-relaxed text-justify">
                {active === "vision" ? (
                  <>
                    Our vision at Delphos is to be recognized as innovative
                    leaders in the development of medical devices for
                    Cranio-Maxillofacial and Orthopedic surgeries, ensuring that
                    every patient receives the excellent care they deserve. We
                    aim to transform the future of medicine with solutions that
                    not only meet but exceed the expectations of surgeons and
                    patients, promoting superior surgical outcomes and improving
                    quality of life.
                  </>
                ) : (
                  <>
                    Our mission is to contribute to the well-being of patients
                    through the development and manufacture of high-quality
                    medical devices for Cranio-Maxillofacial and Orthopedic
                    surgeries. We constantly seek to innovate and create new
                    products that allow each surgeon to offer personalized,
                    safe, and effective treatments to all their patients.
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LOGOS */}
        <div
          data-aos="fade-up"
          className="bg-[#F5F5F5] rounded-2xl py-6 px-6 flex flex-wrap items-center justify-evenly gap-10">
          <img src="/delphos-implants/images/cert1.png" alt="cert" width={120} height={120} />
          <img src="/delphos-implants/images/cert2.png" alt="cert" width={120} height={120} />
          <img src="/delphos-implants/images/cert3.png" alt="cert" width={120} height={120} />
          <img src="/delphos-implants/images/cert4.png" alt="cert" width={120} height={120} />
          <img src="/delphos-implants/images/cert5.png" alt="cert" width={120} height={120} />
          <img src="/delphos-implants/images/cert6.png" alt="cert" width={180} height={180} />
        </div>
      </div>
    </section>
  );
}
