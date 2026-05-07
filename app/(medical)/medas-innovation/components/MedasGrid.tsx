"use client";

export default function MedasGrid() {
  return (
    <section className="w-full">
      
      {/* GRID */}
      <div className="grid md:grid-cols-2">
        
        {/* TOP LEFT IMAGE */}
        <div
          data-aos="fade-right"
          className="h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <img
            src="/medas-innovation/assets/medas-grid1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* TOP RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className="relative bg-[#0287C3] text-white flex items-center"
        >
          {/* Pattern Overlay */}
          {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div> */}

          <div className="relative p-8 md:p-12 lg:p-16 max-w-3xl ">
            <h3 className="text-xl md:text-2xl font-semibold">
              Who We Are?
            </h3>

            <p className="mt-4 text-base text-white/80 leading-[1.9]">
              Located in South Florida, our headquarters in Miami city means something more
              than vacations or good times. Our privileged location allows us to serve a vast
              community in healthcare across the US, LATAM, and worldwide.
            </p>

            <p className="mt-4 text-base text-white/80 leading-[1.9]">
              First and foremost, our commitment is to healthcare support, with an extensive
              product portfolio in critical specializations such as interventional cardiology,
              anesthesia and respiratory therapy.
            </p>

            <button className="mt-6 bg-white text-blue-600 px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
              Learn More →
            </button>
          </div>
        </div>

        {/* BOTTOM LEFT CONTENT */}
        <div
          data-aos="fade-right"
          className="relative bg-[#0287C3] text-white flex items-center"
        >
          {/* Pattern */}
          {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div> */}

          <div className="relative px-6 lg:px-48 ">
            <h3 className="text-xl md:text-2xl font-semibold">
              Who We Serve for
            </h3>

            <p className="mt-4 text-base text-white/80 leading-[1.9]">
              Patient our last link, but always in our thought is priority matter, health care
              professionals middle link who their shoulders rest the health job well done.
            </p>

            <p className="mt-4 text-base text-white/80 leading-[1.9]">
              First and foremost, our commitment is to healthcare support, with an extensive
              product portfolio in critical specializations.
            </p>

            <button className="mt-6 bg-white text-[#0287C3] px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
              Learn More →
            </button>
          </div>
        </div>

        {/* BOTTOM RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="h-[300px] md:h-[400px] lg:h-[450px]"
        >
          <img
            src="/medas-innovation/assets/medas-grid2.png"
            alt=""
            className="w-full h-full bg-cover object-cover object-bottom-right"
          />
        </div>

      </div>
    </section>
  );
}