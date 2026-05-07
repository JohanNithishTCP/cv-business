export default function Newsletter() {
  return (
    <section className="relative py-12 px-6  text-[#FFFFFF] overflow-hidden h-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/promisemed/newletter-bg.png')",
        }}></div>

      {/* Outer container */}
      <div className="relative max-w-6xl mx-auto h-full flex items-center justify-end">
        {/* Content */}
        <div
          data-aos="fade-up"
          className="max-w-md w-full flex flex-col items-start gap-6 text-left">
          <h2 className="text-3xl md:text-[32px] font-semibold">
            Newsletter Subscription
          </h2>

          <form className="relative w-full bg-[#FFFFFF] px-2 rounded-full shadow-lg h-12 flex items-center">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full h-full px-4 pr-36 text-[#333333] text-sm md:text-[18px] outline-none rounded-full"
            />

            <button className="absolute -right-2.5 h-full px-10 rounded-full bg-linear-to-r from-[#009B43] to-[#2353A3] text-white font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Submit
            </button>
          </form>

          <p className="text-[18px] text-[#FFFFFF] opacity-90">
            Get the latest product launches and promotions.
          </p>
        </div>
      </div>
    </section>
  );
}
