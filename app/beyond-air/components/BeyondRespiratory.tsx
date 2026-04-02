"use client";

import "aos/dist/aos.css";

export default function BeyondRespiratory() {

  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-12">
      <div className="max-w-380 mx-auto text-center">
        
        {/* LABEL */}
        <p
          data-aos="fade-up"
          className="text-green-600 text-lg font-medium"
        >
          Respiratory Solutions
        </p>

        {/* HEADING */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-2xl lg:text-3xl font-semibold text-gray-900"
        >
          Revolutionizing Lung Treatment with Nitric Oxide
        </h2>

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-500 text-base max-w-5xl mx-auto leading-relaxed"
        >
          Our LungFit platform delivers precise nitric oxide therapy for pulmonary conditions such as neonatal respiratory failure, pneumonia, and lung infections. These solutions are designed for hospital and at-home care, improving treatment flexibility and effectiveness.
        </p>

        {/* VIDEO SECTION */}
        <div className="mt-12 relative flex justify-center">
          
          {/* BLUE BACKGROUND BLOCK */}
          <div className="absolute w-[85%] h-[80%] bg-[#00A4E4] right-0 -bottom-10 rounded-lg translate-x-6 translate-y-6"></div>

          {/* VIDEO CARD */}
          <div
            data-aos="zoom-in"
            className="relative w-full max-w-340 rounded-xl overflow-hidden shadow-md bg-white"
          >
            {/* Replace with your video */}
            <div className="w-full h-[300px] md:h-[600px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                Your Video Here
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}