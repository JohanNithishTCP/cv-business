import Image from "next/image";

export default function BenefitsSection() {
    return (
        <section className="bg-white py-12 pb-32">
            <div className="container mx-auto px-6">

                <h2
                    className="text-center text-3xl md:text-3xl font-semibold text-primary mb-12"
                    data-aos="fade-up"
                >
                    Why you should choose Sleepnet?
                </h2>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">

                        {/* Card 1 */}
                        <div
                            className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            <div className="w-20 h-20 relative mb-4">
                                <img src={`/sleepnet/home/why-1.png`} alt="Made in USA" className="object-contain" />
                            </div>
                            <h3 className="text-primary font-bold text-base">Made in USA</h3>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="w-20 h-20 relative mb-4">
                                <img src={`/sleepnet/home/why-2.png`} alt="Quality" className="object-contain" />
                            </div>
                            <h3 className="text-primary font-bold text-base">Quality</h3>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="w-20 h-20 relative mb-4">
                                <img src={`/sleepnet/home/why-3.png`} alt="Dependable" className="object-contain" />
                            </div>
                            <h3 className="text-primary font-bold text-base">Dependable</h3>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center text-center rounded hover:-translate-y-1 transition-transform"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="w-20 h-20 relative mb-4">
                                <img src={`/sleepnet/home/why-4.png`} alt="Quick Ship" className="object-contain" />
                            </div>
                            <h3 className="text-primary font-bold text-base">Quick Ship</h3>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
