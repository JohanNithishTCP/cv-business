"use client";


export default function ProductServices() {
  const services = [
    {
      title: "Repairs & Maintenance",
      icon: "/assets/wartung 1.png",
    },
    {
      title: "Returns & Complaints",
      icon: "/assets/retour 1.png",
    },
    {
      title: "Repairs & Maintenance",
      icon: "/assets/wartung 1.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-[32px] font-semibold text-[#16679b]"
        >
          Product-related services
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg"
        >
          ATMOS offers medical professionals all over the world not only
          first-class medical technology devices and products, but also
          complete service relating to procurement, modernization, and
          maintenance.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="bg-[#16679b] text-white rounded-xl p-8 md:p-6 lg:p-16 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition"
            >

              {/* Icon Box */}
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <img
                  src={`/atmosmed${item.icon}`}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-lg font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          data-aos="zoom-in"
          data-aos-delay="500"
          className="mt-10 bg-[#16679b] text-white px-6 py-2.5 rounded-md font-bold text-base hover:bg-[#145a87] transition cursor-pointer"
        >
          Technical Product Service
        </button>
      </div>
    </section>
  );
}