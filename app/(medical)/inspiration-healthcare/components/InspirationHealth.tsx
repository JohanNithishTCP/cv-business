"use client";

export default function InspirationHealth() {

  return (
    <section className="bg-[#f4f6f8] pt-20 pb-36 px-6 lg:px-20">
      <div className="max-w-380 mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div data-aos="fade-up">
            <p className="text-base text-[#26505E] mb-3">
              Choose Your Area of Care
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#26505E] leading-snug mb-4">
              Explore specialized solutions tailored to different
              healthcare needs
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              Discover our range of healthcare solutions designed to support
              various clinical environments. From acute care to advanced
              therapies and technology support, select the area that best fits
              your requirements and explore solutions built for better patient
              outcomes.
            </p>
          </div>

          {/* Right Pills */}
          <div
            className="flex flex-col gap-4 items-start lg:items-end"
            data-aos="fade-left"
          >
            {[
              "Pain Management & Developmental (10)",
              "Developmental Care (2)",
              "Neonatal (35)",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full text-base shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-20 mt-14">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group pb-14"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image Placeholder */}
              <div className="h-72 bg-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute left-0 right-0 -bottom-22 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-lg p-5 mx-4">
                  <button className="bg-gray-600 absolute -mt-10 cursor-pointer text-white text-base px-4 py-2 rounded-full mb-3">
                    View More
                  </button>

                  <div className="mt-5">

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {card.title}
                  </h3>

                  <p className="text-base text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
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

const cards = [
  {
    title: "Acute Care",
    img: "/inspiration-healthcare/assets/inspiration-acute.png",
    desc: "Comprehensive solutions for critical and hospital-based care environments, ensuring safety and efficiency in urgent medical situations.",
  },
  {
    title: "Infusion Therapies",
    img: "/inspiration-healthcare/assets/inspiration-infusion.png",
    desc: "Advanced systems designed for accurate and controlled delivery of fluids and medications, supporting effective patient treatment.",
  },
  {
    title: "Technology Support",
    img: "/inspiration-healthcare/assets/inspiration-tech.png",
    desc: "Reliable technical assistance and services to ensure optimal performance, maintenance, and longevity of medical equipment.",
  },
];
