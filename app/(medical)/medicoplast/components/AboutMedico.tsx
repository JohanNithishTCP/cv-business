"use client";

export default function AboutMedico() {

  return (
    <section className="w-full bg-[#f5f5f5] py-28">
      <div className="max-w-380 mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Small Label */}
          {/* <p
            data-aos="fade-up"
            className="text-orange-500 text-lg font-medium mb-3"
          >
            About Us
          </p> */}

          {/* Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl font-medium text-gray-900 leading-snug"
          >
            High quality, innovative medical products MADE IN GERMANY
          </h2>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-600 text-base leading-relaxed max-w-2xl"
          >
            Medicoplast International GmbH is a medium-sized enterprise 
            featuring more than 45 years of experience in medical technology. 
            With our educated staff members we develop and produce medical disposables made of silicone
            , latex, polyurethane, PVC and other plastic materials. Our portfolio consists 
            of catheters, drainages, tracheal and tracheostomy tubes, feeding tubes, cannulas as well as a
             wide range of accessories for each field of application. From our company location in Illingen, right next to highway A1, within the border triangle of France- Benelux- Germany over 40 million catheters are distributed per year by a network of worldwide distributors in long-term partnerships.
          </p>

          {/* CTA */}
          <button
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-6 bg-[#F29100] hover:bg-[#FFC700] text-white text-sm font-semibold px-6 py-3 cursor-pointer transition-all duration-500 delay-300 ease-in-out"
          >
            ABOUT MEDICOPLAST
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="w-full h-102"
        >
          <div className="rounded-lg overflow-hidden w-full h-full">
            {/* Replace with your actual image */}
            <img
              src="/medicoplast/assets/medico-about.png"
              alt="Medicoplast Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}