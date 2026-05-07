import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end text-white pb-10 md:pb-16" data-aos="fade-in">
      {/* 🎥 Background Video */}
      <DynamicVideoPlayer
        type="banner"
        className="absolute top-0 left-0 w-full h-full object-cover" />
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
      <div className="relative z-20 w-full container mx-auto px-6 text-left flex flex-col items-start">
        {/* HEADING */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-xl md:text-3xl lg:text-[45px] leading-[1.2] font-semibold mb-8 tracking-tight max-w-3xl [text-shadow:4px_4px_8px_rgba(0,0,0,0.8)]">
          Livfria®, our next generation of collection devices
        </h1>
      </div>
    </section>
  );
}
