import React from "react";

const Features = () => {
  return (
    <section className="bg-white pb-16 pt-18 lg:pt-28 px-6 md:px-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div
          data-aos="fade-up"
          className="flex items-center mb-4 text-center justify-center">
          {/* line + dot (no gap between them) */}
          <div className="flex items-center">
            <span className="w-10 h-0.5 bg-[#F49D00]"></span>
            <span className="w-2 h-2 bg-[#F49D00] rounded-full"></span>
          </div>

          {/* space only before text */}
          <p className="ml-2 text-xs font-semibold text-gray-600 tracking-wide uppercase">
            our FEATURES
          </p>
        </div>
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Flexible Solutions For Every Medical Need
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-6xl mx-auto text-base text-gray-600  leading-relaxed">
          Our solutions are built to serve a wide range of medical applications,
          from paediatrics to general care. With adaptable configurations, MDR
          compliance, and ISO-certified quality, we ensure reliability, safety,
          and performance. Experience seamless integration and dedicated
          Orlvision service support tailored to your needs.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-2">
        {/* ROW 1 */}
        <div
          data-aos="fade-left"
          className="col-span-12 md:col-span-4 bg-gray-100 rounded-xl flex items-center justify-center">
          <img
            src="/orlvision/plug.png"
            alt="Plug"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          data-aos="fade-left"
          className="col-span-12 md:col-span-8 bg-gray-100 rounded-xl flex items-center justify-center">
          <img
            src="/orlvision/service.png"
            alt="Service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ROW 2 */}
        <div
          data-aos="fade-right"
          className="col-span-12 md:col-span-4 bg-gray-100 rounded-xl  flex items-center justify-center">
          <img
            src="/orlvision/paediatrics.png"
            alt="Paediatrics"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          data-aos="fade-right"
          className="col-span-12 md:col-span-4 grid grid-rows-2 gap-0">
          <div className="bg-gray-100 rounded-xl p-2 flex items-center justify-center">
            <img
              src="/orlvision/star.jpg"
              alt="Img2a"
              className="w-full h-full object-fill rounded-lg"
            />
          </div>

          <div className="bg-gray-100 rounded-xl p-2 flex items-center justify-center">
            <img
              src="/orlvision/back.png"
              alt="Img2b"
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="col-span-12 md:col-span-4 bg-gray-100 rounded-xl  flex items-center justify-center">
          <img
            src="/orlvision/compatible.png"
            alt="Compatible"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;