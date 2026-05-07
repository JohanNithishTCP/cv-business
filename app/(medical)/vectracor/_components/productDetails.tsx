import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

// components/ProductDetails.tsx
export default function ProductDetails() {
  return (
    <section className="relative w-full py-20  bg-[url('/vectracor/background_pattern.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center">


      {/* Pattern */}
      {/* 🔷 Pattern Layer */}
      <div className="absolute inset-0 bg-[#fff]/85" ></div>

      <div className=" container relative mx-auto px-6 grid md:grid-cols-2 gap-16 items-center overflow-hidden">

        {/* LEFT - MEDIA */}
        <div data-aos="fade-right">
          <div className="bg-gray-200 rounded-2xl shadow-lg h-[500px] w-full overflow-hidden">
            {/* Future: video / 3D viewer */}
            <DynamicVideoPlayer type="short-1"
              className="w-full h-full object-cover " />
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div data-aos="fade-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-gray-200 text-red-500 px-4 py-1 rounded-full text-[18px] font-medium mb-6">
            <span className="w-2 h-2 bg-[#25477F] rounded-full"></span>
            Product Details
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-blue-900">
            The Cardiac Electrical Biomarker
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-600 mt-4 leading-relaxed ">
            The CEB® is our smartest ECG technology! It can detect ECG changes suggestive of a heart attack. Simply, it is a color coded index number that measures the degree of di-polarity of the cardiac electrical field.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-600 mt-4 leading-relaxed ">
            The cardiac electrical field of a healthy patient is primarily di-polar1, while occurrence of myocardial injury leads to the appearance of a multi polar cardiac electrical field2. A CEB® greater than 94 indicates an abnormal condition and further clinical assessment is necessary.
          </p>

          {/* CTA */}
          <button className="mt-8 font-bold cursor-pointer inline-flex items-center gap-3 px-7 py-2 bg-[#25477F] text-white rounded-full hover:bg-[#102b57] transition  border-2 border-[#B5D2FF] hover:border-[#102b57]">
            Explore Products <span className="text-lg "><ArrowRight /></span>
          </button>
        </div>

      </div>
    </section>
  );
}