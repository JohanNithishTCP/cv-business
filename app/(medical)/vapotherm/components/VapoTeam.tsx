"use client";

export default function VapoTeam() {

  return (
    <section className="relative w-full h-[380px] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/vapotherm/assets/vapotherm-team.png"
        alt="team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[#0C66AFBF]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div data-aos="fade-up" className="max-w-2xl text-white">
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            We Are a Team
          </h2>

          <p className="text-sm md:text-base opacity-90 mb-6 leading-relaxed">
            With high velocity therapy, you can offer patients in respiratory
            distress an attractive alternative to NiPPV for spontaneously
            breathing patients
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white cursor-pointer text-[#0C66AF] px-6 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition"
          >
            View Products
          </button>

        </div>
      </div>
    </section>
  );
}