import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "3D Dental Surgical Microscope",
      image: "/seiler/p-1.png", // Replace with your actual image paths
    },
    {
      name: "Alpha Air 6 Dental",
      image: "/seiler/p-2.png",
    },
    {
      name: "Alpha Air 3 Dental",
      image: "/seiler/p-3.png",
    },
    {
      name: "Alpha Slim 6 Dental",
      image: "/seiler/p-4.png",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-[38px] font-medium text-[#050B20] mb-4">
          Seiler Medical Products
        </h2>
        <p className="text-[#555555] max-w-6xl mx-auto text-sm md:text-base leading-[1.9]">
          Seiler Medical presents an extensive range of specialized microscopes
          tailored for ophthalmology, dental practices, and diverse surgical
          needs. Explore our detailed product catalog or select a specific
          category tailored to your professional requirements for a more focused
          view.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative bg-[#f4f6f8] rounded-2xl p-4 transition-all duration-300 hover:shadow-md">
            {/* Image Container */}
            <div className="bg-[#e2eaf1] rounded-xl text-[20px] font-medium overflow-hidden aspect-4/3 flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Product Info & Action */}
            <div className="mt-6 flex flex-col items-center text-center pb-8">
              <h3 className="text-[#0a1d37] font-bold text-sm md:text-base px-4 min-h-12 flex items-center">
                {product.name}
              </h3>

              {/* Circular Arrow Button */}
              <button className=" cursor-pointer absolute bottom-4 right-4 bg-[#0475BC] p-2.5 rounded-full text-[#FFFFFF] shadow-lg transition-transform hover:scale-110 active:scale-95">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex justify-center">
        <button className="cursor-pointer flex items-center gap-3 bg-[#0475BC] hover:bg-[#005f92] text-[#FFFFFF] px-8 py-3 rounded-full transition-all duration-300 shadow-lg group">
          <span className="font-semibold text-sm">View All Products</span>
          <div className="bg-[#FFFFFF] rounded-full p-1 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="text-[#0475BC] w-6 h-6" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Products;
