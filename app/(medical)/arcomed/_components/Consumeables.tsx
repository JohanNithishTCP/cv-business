// components/ConsumablesSection.js
import { CheckCircle2, ArrowRight, ArrowRightIcon } from "lucide-react";

const products = [
  {
    title: "I.V. Sets",
    image: "/arcomed/c1.png", // Replace with actual image
    features: [
      "Dedicated and non-dedicated",
      "Less toxicity for patients and the environment",
    ],
  },
  {
    title: "Syringes and extension lines",
    image: "/arcomed/c2.png",
    features: [
      "Standard and light-protected options",
      "Low-volume extension lines",
    ],
  },
  {
    title: "Other consumables",
    image: "/arcomed/c3.png",
    features: ["Extensive range of accessories", "Transfer devices"],
  },
];

export default function Consumables() {
  return (
    <section className="bg-[url('/arcomed/bg.png')] py-16 lg:py-20 ">
      <div className="container mx-auto px-6 space-y-12">
        <div
          data-aos="fade-up"
          className="text-center text-[#FFFFFF] space-y-4">
          <h2 className="text-2xl font-medium">High-end Consumables</h2>
          <p className="text-base text-[#FFFFFF] max-w-4xl mx-auto">
            Protect your patients and the environment with an extensive range of
            dedicated and non-dedicated consumables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, idx) => (
            <div
              data-aos="fade-up"
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#353A3D] font-semibold text-[20px]">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-base text-[#333333]">
                        <img
                          src="/arcomed/check1.png" // place inside public/icons/
                          alt="check"
                          className="w-6 h-6 shrink-0 mt-1 object-contain"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" className="flex justify-center mt-10 ">
                <div className="relative inline-flex items-center cursor-pointer">
                  <button className="bg-[#C10E1A] w-75 text-[#FFFFFF] text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14  cursor-pointer">
                    Browse Complete Range
                  </button>

                  {/* Circle aligned with edge */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] bg-[#353A3D] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                    <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
