import { Diamond, Target, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-xl md:text-xl lg:text-2xl font-semibold text-[#212121]">
            Your Global specialist for medical solutions for technology
          </h2>
          <p className="text-base text-[#212121] mt-3 max-w-5xl mx-auto">
            Our instruments make a decisive contribution to patient care
            worldwide every day. To achieve this, we combine the highest quality
            standards with many years of experience, technical precision and
            trusted collaboration with our partners.
          </p>
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              img: "/dimeda/diamond1.png",
              title: "Quality",
              desc: "Development in close collaboration with users",
            },
            {
              img: "/dimeda/diamond1.png",
              title: "Precision",
              desc: "Development in close collaboration with users",
            },
            {
              img: "/dimeda/group1.png",
              title: "Partnership",
              desc: "Long-term relationships built on mutual respect",
            },
            {
              img: "/dimeda/idea1.png",
              title: "Innovation",
              desc: "Continuous advancement for modern medicine",
            },
          ].map((item, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="border-[#DDDDDD] border rounded-lg py-8 px-4 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="w-16 h-16  bg-[#EB8A20] shadow-[#00000040] rounded-full  flex items-center justify-center mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={18}
                    height={18}
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
                </div>
              </div>

              <h3 className="font-semibold text-lg lg:text-xl text-[#000000] mb-2">
                {item.title}
              </h3>

              <p className="text-base text-[#484848]">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Image */}
          <div data-aos="fade-up" className="lg:w-1/2">
            <div className="w-full h-full">
              <Image
                src="/dimeda/building.png"
                alt="dimeda building"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col">
            <div data-aos="fade-up">
              <h3 className="md:text-xl lg:text-2xl font-semibold text-[#0D0D0D] mb-2">
                Quality, precision and innovation since 1976
              </h3>

              <p className="text-base text-[#484848] mb-2 leading-relaxed text-justify">
                For decades, DIMEDA has stood for precise surgical instruments
                and innovative medical technology “Made in Germany”. In close
                cooperation with users, we develop reliable solutions for the
                highest demands in everyday clinical practice. Quality,
                experience and continuous advancement form the basis of our
                worldwide success.
              </p>

              <p className="text-base text-[#484848] mb-4 leading-relaxed text-justify">
                All our instruments are crafted by skilled specialists using
                advanced machines and high-quality materials. We offer over
                23,000 standard instruments for human, dental, and veterinary
                medicine, continually expanding and optimizing our range through
                collaboration with customers, doctors, and scientists worldwide.
              </p>
            </div>

            <button
              data-aos="fade-up"
              className="cursor-pointer bg-[#EB8A20] text-white px-5 py-3 lg:px-10 lg:py-4 rounded-md font-semibold text-base hover:bg-[#d1791a] transition self-start">
              Learn More about DIMEDA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
