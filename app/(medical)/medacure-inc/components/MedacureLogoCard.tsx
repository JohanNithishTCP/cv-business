"use client";

export default function MedacureLogoCard({ src }: any) {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#F9F9F9] cursor-pointer rounded-xl h-30 flex items-center justify-center p-6 transition"
    >
      <img
        src={src}
        alt="logo"
        className="max-h-20 object-contain"
      />
    </div>
  );
}