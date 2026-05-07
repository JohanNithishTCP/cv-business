export default function LatestProducts() {
  const products = [
    { name: "PVC Disposable Laryngeal Masks", category: "Anesthesia, Laryngeal Masks", image: "/new-product-1.png" },
    { name: "Flexible Silicone Reusable Laryngeal Mask", category: "Anesthesia, Laryngeal Masks", image: "/new-product-2.png" },
    { name: "Silicone Reusable Laryngeal Mask", category: "Anesthesia, Laryngeal Masks", image: "/new-product-3.png" },
    { name: "Silicone Disposable Laryngeal Mask", category: "Anesthesia, Laryngeal Masks", image: "/new-product-4.png" },
  ];

  return (
    <section
      className="w-full py-16 md:py-24 text-white relative bg-cover bg-bottom"
      style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}
    >
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>

      <div className="container relative z-10">
        <div className="text-center flex flex-col">
          <h3 data-aos="fade-up" className="font-bold mb-3 text-[14px] uppercase tracking-widest text-white/80">Latest Products</h3>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium mb-6 leading-[1.2]">
            A Trusted Leader in HME Solutions Since 2004
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[14px] text-white/90 mb-12 max-w-5xl mx-auto leading-[1.7] px-4">
            Explore our latest range of advanced medical products, including laryngeal masks, CPAP and NIV solutions, and ventilator accessories. Designed for performance, safety, and reliability, our new products support both adult and pediatric care needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((prod, idx) => (
            <div data-aos="fade-up" data-aos-delay={300 + (idx * 100)} key={idx} className="bg-[#78828b] rounded-xl overflow-hidden flex flex-col text-left hover:-translate-y-1 transition-transform border border-white/10">
              <div className="w-full flex items-center justify-center bg-[#f3f1f1]">
                <img src={`/sunset-healthcare/home${prod.image}`} alt={prod.name} className="w-full h-full aspect-squire object-cover bg-[#f3f1f1]" />
              </div>
              <div className="p-5">
                <p className="text-[14px] text-white/70 mb-1">{prod.category}</p>
                <h4 className="font-medium text-white text-[19px] leading-snug pr-2">{prod.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
