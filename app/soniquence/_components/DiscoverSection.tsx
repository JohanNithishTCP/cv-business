export default function DiscoverSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="site-container">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Image Placeholder */}
                    <div
                        data-aos="fade-right"
                        className="relative w-full rounded-3xl overflow-hidden flex justify-center items-center shadow-lg"
                    >
                        {/* Note: Update with actual Next.js Image component when image is available */}
                        <div className="text-gray-400 flex flex-col items-center">
                            <img src={`/soniquence/home/discover.png`} alt="Discover Section Image" />
                        </div>
                    </div>

                    {/* Right Text */}
                    <div
                        data-aos="fade-left"
                        className="space-y-6 lg:pl-1"
                    >
                        <h2 className="text-[1.8rem] md:text-[1.7rem] font-bold text-[#202020] leading-[1.2] tracking-tight">
                            Discover the Future of Surgery with Soniquence<br />SoniqFrequency Technology
                        </h2>
                        <div className="text-[#555555] leading-relaxed text-justify text-[18px] space-y-4">
                            <p>
                                Soniquence, along with the Ellman family, is committed to revolutionizing medical, veterinary, and dental practices through our cutting-edge, industry-leading soniqfrequency technology. Our innovative coupled soniqfrequency technology employs patented 4.0 MHz and 1.7 MHz radiofrequency technology, designed to enhance patient safety, improve outcomes, and elevate overall experiences. If you're eager to delve deeper into the world of Soniquence and discover how our advanced medical technology can benefit you, we warmly invite you to reach out to us today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
