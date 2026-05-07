import React from "react";
import { CheckCircle2, CornerUpRight, MoveRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Feature = () => {
  const features = [
    "Supports aseptic catheterisation",
    "All items needed in one box, reducing waste",
    "All components in the GB Cath Kit are latex free",
    "Everything you need for catheter insertion in one box",
  ];

  return (
    <section className="bg-[#F26828] flex items-center justify-center px-6 py-12 lg:px-12 lg:py-24 font-['Outfit',sans-serif]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div
          data-aos="fade-left"
          className="text-[#FFFFFF] space-y-8 lg:col-span-5">
          <div className="space-y-4">
            <p className="text-base font-medium opacity-90">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-medium">
              Libra® Cath Kit
            </h2>
            <p className="max-w-xl text-base leading-relaxed opacity-90 text-justify">
              Containing a Libra® All Silicone Foley Catheter, Libra® Leg Bag
              with strap and Liberty® Fix-it Retaining Strap, the Libra® Cath
              Kit has everything you need to effectively and safely perform
              catheterisation. Formerly known as GB Cath Kit. (This product is
              latex free)
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-medium">More about this product.</h3>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <img
                      src="/clinisupplies/check.png" // 👉 put your image in public/icons/
                      alt="check"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-base opacity-95">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="inline-flex items-center gap-2 border-2 border-[#FFFFFF] rounded-full px-5 py-2 text-base font-semibold hover:bg-white hover:text-[#F26828] transition-all duration-300 group">
            Browse All Products
            <CornerUpRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Right Image/Placeholder Column */}
        <div
          data-aos="fade-right"
          className="relative w-full aspect-4/3 lg:aspect-video bg-[#FFFFFF] rounded-[2.5rem] overflow-hidden shadow-2xl lg:col-span-7">
          {/* Video */}
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Optional overlay (keeps design aesthetic) */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
