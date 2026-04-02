import Link from 'next/link';

export default function TechnologySection() {
    return (
        <section className="bg-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col">

                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row w-full mb-0.5" data-aos="fade-up">
                        {/* Text Block */}
                        <div className="w-full md:w-1/2 bg-primary p-12 md:p-20 flex flex-col justify-center items-start" data-aos="fade-right">
                            <h2 className="text-white text-3xl font-semibold mb-6">
                                Unique AIR°gel® Technology
                            </h2>
                            <p className="text-white/80 text-md leading-relaxed mb-8 max-w-md">
                                Sleepnet's AIR°gel® is a leading edge innovation developed and designed to enhance the comfort and effectiveness of our respiratory masks. This advanced cushion technology features medical grade silicone gel that conforms to the contours of each individual face creating a secure and comfortable seal that ensures a snug fit while minimizing air leakage around the edges.
                            </p>
                            <Link
                                href="/technology"
                                className="bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold px-8 py-3 rounded transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                        {/* Image Block */}
                        <div className="w-full md:w-1/2 bg-[#F8F9FA] h-96 md:h-auto min-h-[400px] flex items-center justify-center relative border border-gray-100/50" data-aos="fade-left">
                            <img src={`/sleepnet/home/unique-air.png`} alt="" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row-reverse w-full" data-aos="fade-up">
                        {/* Text Block */}
                        <div className="w-full md:w-1/2 bg-primary p-12 md:p-20 flex flex-col justify-center items-start" data-aos="fade-left">
                            <h2 className="text-white text-3xl font-semibold mb-6">
                                Custom Fit Technology
                            </h2>
                            <p className="text-white/80 text-md leading-relaxed mb-8 max-w-md">
                                Sleepnet's Custom Fit Technology is our proprietary technology, made from a flexible, pliable material that responds to gentle manipulation and accommodates changes in weight and facial asymmetry. Custom Fit Technology allows the user to easily shape the mask by gently bending and molding it along the sides, top, or bottom to provide a compliant and secure fit.
                            </p>
                            <Link
                                href="/technology"
                                className="bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold px-8 py-3 rounded transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                        {/* Image Block */}
                        <div className="w-full md:w-1/2 bg-[#F8F9FA] h-96 md:h-auto min-h-[400px] flex items-center justify-center relative border border-gray-100/50" data-aos="fade-right">
                            <img src={`/sleepnet/home/custom-fit.png`} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
