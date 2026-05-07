"use client";

export default function MedacureProductCard({ title, img }: any) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
    >
      {/* Image Box */}
      <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center mb-6">
        <img
          src={img}
          alt={title}
          className="h-64 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-center text-gray-800 font-medium mb-4 leading-snug">
        {title}
      </h3>

      {/* Button */}
      <button className="cursor-pointer w-full bg-[#2e2463] text-white py-3 rounded-full hover:opacity-90 transition">
        View Products
      </button>
    </div>
  );
}