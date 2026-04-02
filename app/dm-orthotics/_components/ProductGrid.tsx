import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Products By Body Area",
    image: "/dm-orthotics/home/product-1.png",
  },
  {
    title: "Patients Clinics",
    image: "/dm-orthotics/home/product-2.jpg",
  },
  {
    title: "Products By Conditions",
    image: "/dm-orthotics/home/product-3.jpg",
  }
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-light/30 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100" > </div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-dark">
            Our Product Categories
          </h2>
          <p>
            Innovative dynamic movement orthoses that help improve posture, control, and mobility for both children and adults.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full border border-border/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Image Area */}
              <div className="flex-1 min-h-[280px] md:min-h-[350px] relative bg-white p-6 md:p-8 group overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Red Footer Content */}
              <div className="bg-primary p-4 md:p-5 flex justify-between items-center group-hover:bg-primary-dark transition-colors">
                <span className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</span>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
