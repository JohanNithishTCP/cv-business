export default function FeatureSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            {/* Blue offset background */}
            <div className="absolute -top-6 -left-6 w-3/4 h-full bg-primary-light z-0 rounded-sm"></div>

            {/* Image Placeholder */}
            <div className="relative z-10 w-full aspect-4/2.8 bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center text-gray-500 border border-gray-100">
              <img src={`/future-med/home/about.png`} alt="Feature Image" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left" data-aos="fade-left">
            <h2 className="heading text-black mb-6">
              Innovative Medical Technology
            </h2>

            <p className="para text-gray-600 leading-relaxed mb-6 text-justify">
              FutureMed Global supports healthcare professionals who want to access
              the latest medical and healthcare advancements. Our products
              represent the best available and most innovative technology that solves
              customer needs and prepares for the future. Unlike me-too product
              offerings, FutureMed delivers to clinicians the healthcare of the future
              and partners with our customers for optimal support and service.
            </p>

            <p className="para text-black leading-relaxed mb-8 text-justify">
              At FutureMed Global, we are guided by values that reflect
              our commitment to advancing healthcare:
            </p>

            <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-2.5 rounded transition-colors text-[17px]">
              Read More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
