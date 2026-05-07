// components/Subscribe.tsx
export default function Subscribe() {
  return (
    <section className=" relative w-full h-[300px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/vectracor/Contact-us.jpg"
        alt="city"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-[900px]" data-aos="fade-up">

        {/* Heading */}
        <h2 className="text-white text-xl md:text-2xl font-medium leading-relaxed">
          Subscribe to receive the latest updates on medical innovations,
          healthcare solutions, product announcements, and patient care technologies.
        </h2>

        {/* Input Group */}
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg">

            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-3 outline-none w-[250px] md:w-[350px]"
            />

            <button className="bg-[#25477F]  font-bold cursor-pointer text-white px-6 py-3  hover:bg-blue-800 transition">
              Subscribe Now
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}