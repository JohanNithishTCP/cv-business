export default function AboutSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#FAFAFA]">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Text */}
                    <div
                        data-aos="fade-right"
                        className="space-y-6 md:space-y-8 pr-0 lg:pr-1"
                    >
                        <h2 className="text-[1.7rem] md:text-[1.7rem] font-bold text-[#202020] leading-[1.2] tracking-tight">
                            Leading the Evolution of RF<br className="hidden sm:block" />Surgical Solutions
                        </h2>
                        <div className="space-y-4 md:space-y-6 text-[#555555] text-justify leading-relaxed text-[15px] md:text-[18px]">
                            <p>
                                Mr. Alan Ellman (CEO) has been an innovator in radiofrequency surgical technology for over 4 decades. His passion for creating superior RF technology for the betterment of patient outcomes dates back to his father, Dr. Irving Ellman, who created the very first 4.0 MHz device for his own dental practice. Dr. Ellman along with his wife Shirley Ellman started the original Ellman International company in 1959. Over the next several decades, Alan provided RF technology to worldwide specialties including Dentistry and Oral Surgery, Dermatology, Plastic Surgery, ENT, Ophthalmology, Gynecology, and Veterinary. Most recently, Mr. Ellman turned his focus onto helping patients with his technology in Neurosurgery, Spine, and Orthopedics.
                            </p>
                            <p>
                                These high-powered generators provide our surgical specialists with the most efficient, dependable, and highest-quality RF surgical generators available along with the customer service that you’ve always expected from the Ellman family name.
                            </p>
                        </div>
                        <button className="mt-4 w-full md:w-auto bg-[#B000F5] hover:bg-[#A300ED] text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm tracking-wide shadow-lg shadow-purple-500/20 active:scale-95">
                            Know More about Us
                        </button>
                    </div>

                    {/* Right Images */}
                    <div
                        data-aos="fade-left"
                        className="w-full mt-8 md:mt-12 lg:mt-0 grid grid-cols-5 gap-4 md:gap-5"
                    >
                        {/* Top Left Text Box */}
                        <div className="col-span-2 brand-gradient rounded-2xl md:rounded-3xl flex flex-col justify-center items-center text-white p-4 h-[180px] sm:h-[220px] md:h-[260px] shadow-lg hover:shadow-xl transition-shadow">
                            <span className="text-5xl sm:text-6xl md:text-7xl font-bold mb-1 md:mb-2 leading-none">50+</span>
                            <span className="text-[13px] sm:text-[15px] md:text-[17px] font-semibold text-center leading-tight">Years of experience</span>
                        </div>

                        {/* Top Right Image */}
                        <div className="col-span-3 rounded-2xl md:rounded-3xl overflow-hidden h-[180px] sm:h-[220px] md:h-[260px] shadow-lg">
                            <img src={`/soniquence/home/about-1.png`} alt="Medical Innovation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Bottom Image */}
                        <div className="col-span-5 rounded-2xl md:rounded-3xl overflow-hidden h-[200px] sm:h-[260px] md:h-[320px] shadow-lg">
                            <img src={`/soniquence/home/about-2.png`} alt="Surgical Excellence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}
