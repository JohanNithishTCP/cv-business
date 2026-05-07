"use client";

import Image from "next/image";

export default function BlogCard() {
  const blogs = [
    {
      image: "/clinisupplies/card-1.png",
      title:
        "Empowering Patients with Reliable Continence Guidance: Introducing the CONfidence App",
      description:
        "Trusted Self‑Help Support for Bladder and Bowel Health Many people experiencing bladder or bowel symptoms delay seekin...",
    },
    {
      image: "/clinisupplies/card-2.png",
      title:
        "International Women’s Day: Crossing Lake Khövsgöl with Women on a Mission",
      description:
        "At -40°C the world becomes very simple. You notice small things. The sharpness of the air inside your nostrils. The cru...",
    },
    {
      image: "/clinisupplies/card-3.png",
      title:
        "TAI Consensus Paper, by Julie Storrie- Clinical Lead, Bowel at Clinisupplies",
      description:
        "Julie Storrie has been the Clinical Lead for Bowel at Clinisupplies since October 2023. Prior to working (in the medical...",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-12 lg:py-24 px-6">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div data-aos="fade-up" className="space-y-4">
          <p className="text-base text-[#333333]">Latest blogs</p>

          <h2 className="text-3xl md:text-4xl font-medium text-[#333333]">
            Insights and guidance for your health journey
          </h2>

          <p className="max-w-7xl mx-auto text-[#666666] text-base md:text-base">
            Explore our latest blogs covering a wide range of topics related to
            bladder and bowel health, medical conditions, and everyday
            wellbeing. From expert advice and practical tips to patient stories
            and awareness topics, our content is designed to educate, support,
            and empower you.
          </p>
        </div>

        {/* Blog Cards */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl  border border-[#00000029] shadow-[#00000029] hover:shadow-xl transition-all duration-300 overflow-hidden group text-left p-6">
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover aspect-video object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-[#333333] leading-snug">
                  {blog.title}
                </h3>

                <p className="text-base text-[#666666] leading-relaxed line-clamp-2">
                  {blog.description}
                </p>

                <button className="text-base font-semibold text-[#333333] underline hover:text-[#F26828]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
