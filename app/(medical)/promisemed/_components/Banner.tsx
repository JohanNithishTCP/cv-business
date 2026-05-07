import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      {/* Background Video */}
      <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 container mx-auto px-6 pb-20">
        <h1 className="text-[#FFFFFF] text-3xl lg:text-4xl font-semibold leading-tight">
          Professional Manufacturer For Premium <br />
          Healthcare Products
        </h1>
      </div>
    </section>
  );
}
