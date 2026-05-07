"use client";


import { useState } from "react";
import Button from "./Button";

const products = {
  face: {
    title: "D2 FACE",
    desc: "Our extensive portfolio of plates and screws allows us to meet all our customers' needs, guaranteeing excellent results. We are always looking for ways to improve our products..",
    desc2: "Plates and screws designed for fractures of the jaw area or even for bone replacement in cases of tumors; Plates and screws designed for fractures of the jaw area or even for bone replacement in cases of tumors.",
    img: "/delphos-implants/images/p-1.png",
  },
  hand: {
    title: "D2 HAND",
    desc: "Complete system of plates and screws for the treatment of fractures of the finger and hand bones. All plates offer the possibility of screws with fixation in the plate itself (locking screws).",
    desc2: "Complete system of plates and screws for the treatment of fractures of the finger and hand bones. All plates offer the possibility of screws with fixation in the plate itself (locking screws). In the same hole, it is possible to choose between a locking screw or a non-locking screw.",
    img: "/delphos-implants/images/p-2.png",
  },
  extremities: {
    title: "D2 EXTREMITIES",
    desc: "Delphos brings to market two important screws for use in hand and foot surgeries: the Conical Headless and Hurricane screw families. The key highlight is that both families offer screws with a thickness of 1.7mm, filling a market gap for patients with small bones or very delicate hands.",
    desc2: "Fully threaded screw, where the proximal end terminates with a conical head. Generally used in fractures where stability is needed to allow for proper bone healing.",
    img: "/delphos-implants/images/p-3.png",
  },
};

export default function ProductsSection() {
  const [active, setActive] = useState<keyof typeof products>("face");

  return (
    <section className="w-full flex justify-center py-16 bg-[#FFFFFF]">
      <div className="w-[95%] container mx-auto bg-[#31A144] rounded-[40px] p-8 md:p-12">
        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="text-center text-[#FFFFFF] text-[24px] font-semibold mb-10">
          Our Products
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT TABS (3 columns) */}
          <div data-aos="fade-up" className="lg:col-span-3 flex flex-col gap-6">
            <button
              onClick={() => setActive("face")}
              className={`w-full py-4 rounded-2xl text-[20px] font-medium font-sora transition-all duration-300 shadow-md ${active === "face"
                ? "bg-[#8BC541] text-[#FFFFFF]"
                : "bg-[#F1F1F1] text-[#333333]"
                }`}>
              D2 Face
            </button>

            <button
              onClick={() => setActive("hand")}
              className={`w-full py-4 rounded-2xl text-[20px] font-medium font-sora transition-all duration-300 shadow-md ${active === "hand"
                ? "bg-[#8BC541] text-[#FFFFFF]"
                : "bg-[#F1F1F1] text-[#333333]"
                }`}>
              D2 Hand
            </button>

            <button
              onClick={() => setActive("extremities")}
              className={`w-full py-4 rounded-2xl text-[20px] font-medium font-sora transition-all duration-300 shadow-md ${active === "extremities"
                ? "bg-[#8BC541] text-[#FFFFFF]"
                : "bg-[#F1F1F1] text-[#333333]"
                }`}>
              D2 Extremities
            </button>

            <div className="mt-4">
              <Button
                href="#"
                variant="outline"
                size="md"
                rounded="lg"
                className="w-full text-white border-white hover:bg-white hover:text-[#31A144]"
              >
                View All Products
              </Button>
            </div>
          </div>

          {/* RIGHT CARD (9 columns) */}
          <div
            data-aos="fade-up"
            key={active}
            className="lg:col-span-9 bg-[#FFFFFF] rounded-3xl p-4 lg:p-6 flex flex-col lg:flex-row gap-8 items-center min-h-[480px] shadow-lg border border-gray-100 relative overflow-hidden">

            {/* Background Image Layer with Opacity 40 */}
            <div
              className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-3xl"
              aria-hidden="true"
            >
              <img
                src="/delphos-implants/images/product-bg.jpg"
                alt="bg"
                className="w-full h-full object-cover opacity-40"
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* IMAGE */}
              <div className="w-full lg:col-span-12 xl:col-span-5 flex justify-center h-full">
                <div className="rounded-2xl overflow-hidden shadow-sm aspect-square w-full max-w-[380px] flex items-center justify-center bg-gray-50/50">
                  <img
                    src={products[active].img}
                    alt={products[active].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="w-full lg:col-span-12 xl:col-span-7 space-y-5">
                <h3 className="text-[24px] font-bold text-[#000000]">
                  {products[active].title}
                </h3>

                <div className="space-y-4">
                  <p className="text-[#666666] text-[17px] leading-relaxed text-left">
                    {products[active].desc}
                  </p>
                  <p className="text-[#666666] text-[17px] leading-relaxed text-left">
                    {products[active].desc2}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-start">
                  <Button href="#" variant="primary" size="md" rounded="lg">
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
