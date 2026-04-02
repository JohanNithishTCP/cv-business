"use client";

const services = [
  {
    title: "Sterilization",
    desc: "Medicoplast – your reliable Partner for Ethylenoxide (EO) Sterilization. Sterilization by material-friendly ETO processing",
    image: "/medicoplast/assets/medico-ster.png",
  },
  {
    title: "Packaging Service",
    desc: "Medicoplast uses different validated packaging formats and packaging methods. Consequently we can process customers' requests regarding special packaging for our products, as well as third party products.",
    image: "/medicoplast/assets/medico-package.png",
  },
  {
    title: "Development",
    desc: "At Medicoplast, continuous improvement and advanced development drive product quality and innovation. With 40 years in medical product development, we adeptly manage complex requests.",
    image: "/medicoplast/assets/medico-develop.png",
  },
];

export default function ServiceMedico() {

  return (
    <section className="w-full bg-[#eddabf] py-28 relative overflow-hidden">
      
      <div className="max-w-380 mx-auto px-4 sm:px-6 text-center">
        
        {/* Header */}
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-800"
        >
          Service We Provide
        </h2>                    

        {/* Decorative Line */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-28 h-1 bg-[#F29100] mx-auto mt-3"
        ></div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[#484848] text-base py-5 max-w-xl mx-auto"
        >
          Steeler industrial high end manufacturing services are a perfect complement
          to today’s high tech industries.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 lg:gap-y-10 mt-16">

          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative flex flex-col"
            >

              {/* Floating Image */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[220px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg shadow-md w-full h-[120px] object-cover"
                />
              </div>

              {/* Card */}
              <div className="bg-[#ffffff] pt-24 pb-8 px-6 text-center flex flex-col flex-1">

                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>

                <p className="text-base text-gray-600 mt-3 leading-relaxed flex-1">
                  {item.desc}
                </p>

                <button className="w-full mt-6 border border-[#F29100] text-[#F29100] text-base font-semibold px-6 py-2 hover:bg-[#F29100] hover:text-white transition">
                  READ MORE
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}