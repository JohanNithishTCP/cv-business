"use client";

export default function MedacureFeatureBottom() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="relative max-w-380 mx-auto px-6">
        
        <div className="bg-[#2E2662] rounded-2xl px-10 py-22 overflow-hidden">
          
          {/* TEXT */}
          <div className="max-w-xl text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              An elegant collection of quality case goods
              furniture and chairs for senior living.
            </h3>

            <button className="cursor-pointer border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2e2463] transition">
              View Collection
            </button>
          </div>

          {/* IMAGE (floating right) */}
          <div className=" absolute right-36 -bottom-20 translate-y-10 hidden lg:block">
            <div className="w-120 h-120 rounded-lg flex items-center justify-center text-gray-600">
             <img 
              src="/medacure/assets/medacure-furniture.png"
              alt="medacure-feature-bottom"
              className="w-full h-full object-contain"
             />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}