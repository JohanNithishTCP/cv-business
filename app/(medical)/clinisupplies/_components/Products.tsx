import React from "react";
import { CornerUpRight, MoveRight } from "lucide-react"; // Using lucide-react for the button icon

const Products = () => {
  const products = [
    {
      title: "Libra® Leg Bag",
      description:
        "The Libra® Leg Bag provides peace of mind for users. High quality materials and design. (This product is latex free)",
      image: "/clinisupplies/product-1.png",
    },
    {
      title: "Libra® Leg Bag Straps",
      description:
        "Libra® Leg Bag Straps secure a leg bag to the leg, for use with the Libra Leg Bag range. (This product is latex free).",
      image: "/clinisupplies/product-2.png",
    },
    {
      title: "Libra® Night bag",
      description:
        "We offer night bags in both single-use and multi-use options, designed for one-night or up to seven nights of use.",
      image: "/clinisupplies/product-3.png",
    },
    {
      title: "Libra® Sheath",
      description:
        "The Libra® Sheath is available in a range of styles and sizes and is designed to help men manage their incontinence.",
      image: "/clinisupplies/product-4.png",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 px-6  font-['Outfit',sans-serif]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          <div data-aos="fade-up" className="max-w-4xl space-y-4">
            <p className="text-base font-medium text-[#333333]">
              Featured Products
            </p>
            <h2 className="text-4xl font-medium text-[#333333]">
              Live more freely.
            </h2>
            <p className="text-[#666666] leading-relaxed text-justify">
              Our range of innovative bladder care products is designed to
              support daily comfort, independence, and confidence. From night
              drainage bags to advanced intermittent catheters and secure leg
              bag solutions, each product is crafted with high-quality materials
              and user-focused design.
            </p>
          </div>

          <div data-aos="fade-up">
            <button className="flex items-center gap-2 border-2 border-[#F26828] text-[#11121B] text-base font-semibold px-5 py-2 rounded-full hover:bg-[#F26828] hover:text-[#FFFFFF] transition-all group">
              View Our Products
              <CornerUpRight
                size={20}
                className="text-[#F26828] group-hover:text-white group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-[#00000029] rounded-4xl p-4 flex flex-col h-full hover:shadow-md  transition-all duration-300 overflow-hidden group">
              {/* Image Container with inner rounded corners */}
              <div className="relative aspect-[1.1/1] bg-slate-100 rounded-3xl overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div data-aos="fade-up" className="px-2 pb-4 space-y-3 grow">
                <h3 className="text-2xl font-medium text-[#333333]">
                  {product.title}
                </h3>
                <p className="text-base text-[#666666] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
