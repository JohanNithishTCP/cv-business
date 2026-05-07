export default function OurProducts() {
  const products = [
    { name: "CM207 Vesper Nasal CPAP Mask", img: "/product-1.png" },
    { name: "Cough Assist", img: "/product-2.png" },
    { name: "CPAP Machines", img: "/product-3.png" },
    { name: "CPAP Batteries", img: "/product-4.png" },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-[#fafafa] text-center border-t border-b border-gray-100">
      <div className="container mx-auto">
        <h3 data-aos="fade-up" className="text-primary uppercase font-bold mb-3 text-[14px]">Our Products</h3>
        <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium text-foreground mb-6 leading-[1.2]">
          Reliable, high-quality equipment, supplies and accessories at a low price point.
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-muted text-[16px] mb-12 max-w-5xl mx-auto leading-[1.7] px-4">
          As a supplier, distributor and manufacturer, Sunset supports home medical equipment suppliers, hospitals and healthcare providers through its B2B partnerships. With Sunset, you'll get dependable DME, daily-use essentials, innovative clinical solutions and a product selection that quickly adapts to industry needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div data-aos="fade-up" data-aos-delay={300 + (idx * 100)} key={idx} className="bg-white border border-gray-100 text-center p-6 rounded-xl flex flex-col items-center shadow-[0px_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all">
              <div className="aspect-square bg-[#D9D6D633] flex items-center justify-center rounded-lg mb-6">
                <img src={`/sunset-healthcare/home/${prod.img}`} alt={prod.name} className="w-full h-full aspect-square object-cover bg-[#D9D6D633]" />
              </div>
              <h4 className="text-[17px] font-medium text-foreground">{prod.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
