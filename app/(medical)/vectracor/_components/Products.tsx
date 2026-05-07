// components/Products.tsx
const products = [
  { name: "Universal SmartECG", img: "/vectracor/ECG.png" },
  { name: "Orbit Spirometer", img: "/vectracor/Spirometer.png" },
  { name: "VectraplexECG", img: "/vectracor/Office-Medic.png" },
  { name: "Office Medic", img: "/vectracor/Consumables.png" },
];

export default function Products() {
  return (
    <section className="w-full py-20 bg-[#ffffff]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center" data-aos="fade-up">

          <div className="inline-flex items-center gap-2 bg-gray-100 text-red-500 px-4 py-1 rounded-full text-[18px] font-medium mb-4">
            <span className="w-2 h-2 bg-[#25477F] rounded-full"></span>
            Our Products
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            Advancing Diagnostic Innovation
          </h2>

          <p className="text-gray-600 max-w-[1250px] mx-auto text-[18px] mt-3">
            Comprehensive diagnostic and patient monitoring solutions engineered to enhance clinical efficiency, deliver accurate results, and support reliable healthcare performance across diverse medical environments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >

              {/* Image box */}
              <div className=" rounded-xl p-6 border border-[#e9e9e9] flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-[350px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-center font-semibold text-xl mt-4 text-gray-800">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-[#25477F]"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}