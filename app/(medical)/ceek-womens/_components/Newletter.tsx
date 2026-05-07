import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-12">
        {/* Left Side: Text */}
        <div data-aos="fade-up" className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#26505E] mb-6">
            Get the Latest in Healthcare Innovation
          </h2>
          <p className="text-[#484848] text-base leading-relaxed max-w-3xl text-justify">
            Subscribe to stay updated with our latest product launches,
            innovations, events, and industry insights. Get exclusive access to
            new advancements, expert updates, and valuable resources designed to
            support better clinical outcomes and patient care.
          </p>
        </div>

        {/* Right Side: Form */}
        <div data-aos="fade-up" className="w-full lg:w-auto grow max-w-xl">
          <h3 className="text-3xl font-medium text-[#1C1C1C] mb-6">
            Subscribe Newsletter
          </h3>

          <form className="flex flex-col sm:flex-row gap-0 shadow-lg">
            <input
              type="email"
              placeholder="Enter your email."
              className="grow px-4 py-3 border text-[#797979] border-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="cursor-pointer bg-[#383838] text-[#FFFFFF] px-8 py-3 font-medium hover:bg-black hover:scale-105 transition-colors">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
