import React from "react";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrows

const products = [
  {
    category: "fiberscopes",
    title: "RS1",
    description:
      "The latest design in video endoscopy is the video-rhino-laryngoscope from orlvision.",
    image: "/orlvision/fiberscope.png",
  },
  {
    category: "videoscopes",
    title: "RSX-i / RSX-iP (Pediatrics)",
    description:
      "Video-Rhino-Laryngoscope - Interchangeable System 100% galvanic separated power supply",
    image: "/orlvision/videoscope.png", // Replace with your image paths
  },
  {
    category: "otoscopes",
    title: "Video Otoscope OX2",
    description:
      "State-of-the-art video otoscope technology for reliable diagnostics.",
    image: "/orlvision/otoscope.png",
  },
];

const ProductSection = () => {
  return (
    <section className="bg-[#F49D00] py-16 px-6 md:px-10">
      <div className="max-w-400 mx-auto text-center text-white mb-8">
        <div className="flex items-center mb-4 text-center justify-center">
          {/* line + dot (no gap between them) */}
          <div className="flex items-center">
            <span className="w-10 h-0.5 bg-white"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>

          {/* space only before text */}
          <p className="ml-2 text-xs font-semibold text-white tracking-wide uppercase">
            OUR PRODUCTS
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">
          Precision Endoscopy Solutions For Everyday Clinical Use.
        </h2>
        <p className="max-w-6xl mx-auto text-sm md:text-base leading-relaxed opacity-90">
          Our product range includes high-performance video rhino laryngoscopes,
          video otoscopes, and flexible fiber endoscopes, supported by a wide
          range of accessories. Each product is designed to deliver accurate
          diagnostics, ease of use, and reliable performance across various
          medical applications.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col h-full transition-transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="pb-0 aspect-4/3 flex items-center justify-center relative">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-6">
                <span className="text-[#F49D00] font-bold text-sm uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col grow border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4 grow">
                {product.description}
              </p>
              <a
                href="#"
                className="cursor-pointer inline-flex items-center text-[#F49D00] font-semibold text-base  uppercase group">
                view product
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
