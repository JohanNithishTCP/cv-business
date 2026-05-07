"use client";


const products = [
  {
    img: "/promisemed/p1.png",
    title: "VeriEndo® Polypectomy Snares",
    desc: "Used to resect polyps (recommended size of 10-1 9mm) with an endoscope",
  },
  {
    img: "/promisemed/p2.png",
    title: "VeriEndo® Single-use Flexible Bronchoscope",
    desc: "Promisemed VeriEndo® Single-use Flexible Bronchoscope eliminates the risk of...",
  },
  {
    img: "/promisemed/p3.png",
    title: "VeriEndo® Single-use Flexible Ureteroscope",
    desc: "Promisemed VeriEndo® Single-use Flexible Ureteroscope eliminates the risk of cross...",
  },
  {
    img: "/promisemed/p4.png",
    title: "VeriEndo® Single-use Flexible Choledochoscope",
    desc: "Used to resect polyps (recommended size of 10-1 9mm) with an endoscope",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-[#F4F4F4] py-16 lg:py-20  border-[#00000010] border-t">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          {/* Left */}
          <div data-aos="fade-up" className="max-w-3xl">
            <h2 className="text-2xl md:text-[32px] font-medium text-[#009B43] mb-3">
              Our Products
            </h2>
            <p className="text-[#333333] text-base leading-relaxed">
              Promisemed is devoted to offering premium healthcare products and
              considerate services with innovative technology in the fields of
              Diabetes Care, Injection & Infusion, Vascular Access,
              Interventional Ultrasound and Interventional Endoscopy all around
              the world for both individuals and professionals.
            </p>
          </div>

          {/* Right Button */}
          <div>
            <button
              data-aos="fade-up"
              className="bg-linear-to-r from-[#009B43] to-[#2353A3] text-[#FFFFFF] text-[18px] px-6 py-3 rounded-full font-semibold hover:shadow-md transition cursor-pointer">
              Explore Our Products &gt;&gt;&gt;
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="bg-[#FFFFFF] rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col">
              {/* Image */}
              <div className="w-full h-55 relative mb-4 rounded-lg overflow-hidden bg-gray-50 border border-[#00000030]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#333333] mb-2 line-clamp-2 h-13.5">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#666666] mb-3 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <button className="text-[#009B43] text-base font-medium hover:underline text-left">
                  Read More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
