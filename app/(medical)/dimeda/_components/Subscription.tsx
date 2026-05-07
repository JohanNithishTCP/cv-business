export default function Subscription() {
  return (
    <>
      <div className="bg-[#EB8A20] text-center py-10 px-4">
        <h2
          data-aos="fade-up"
          className="text-[#FFFFFF] font-semibold text-xl md:text-2xl mb-4">
          Subscribe to Our Newsletter
        </h2>

        <div data-aos="fade-up" className="flex flex-col items-center gap-3">
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full max-w-lg px-4 py-2 lg:px-10 lg:py-4 bg-[#F9F9F9] rounded-md outline-none text-sm"
          />

          <button className="cursor-pointer bg-[#F9F9F9] text-[#EB8A20] px-6 py-2 lg:px-10 lg:py-3 rounded-md text-base  font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
