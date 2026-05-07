import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function LutechHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* VIDEO (future ready) */}
      <div className="absolute inset-0">

        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/90" /> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full -bottom-40 left-40">
        <div
          data-aos="fade-up"
          className="max-w-2xl px-4"
        >

          <h1 className="text-5xl font-semibold">
            High-Definition Colposcopes
          </h1>
          <p className="text-2xl mt-2 text-white/80">Our LT-300 colposcope systems are making a difference in Obstetrics & Gynecology
          </p>
          {/* Currently empty like your design */}
        </div>
      </div>
    </section>
  );
}