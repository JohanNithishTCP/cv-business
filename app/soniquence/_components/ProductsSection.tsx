export default function ProductsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Card */}
                    <div
                        data-aos="fade-right"
                        className="bg-linear-to-br from-[#4F00F5] via-[#7d3aff] to-[#a47fff] rounded-4xl p-8 pb-32 md:px-12 md:py-10 md:pb-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center items-start shadow-xl shadow-purple-900/10"
                    >
                        <img src={`/soniquence/home/product-bg.png`} alt="" className="absolute -right-0.5 -bottom-0.5 w-[200px] md:w-[250px]" />
                        <div className="relative z-10 w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl lg:text-[1.7rem] font-bold text-white mb-6 leading-tight tracking-tight">
                                A Legacy of Medical<br />Excellence
                            </h2>
                            <button className="px-8 py-2.5 rounded-md border-2 border-white/80 text-white font-semibold hover:bg-white/10 hover:border-white transition-colors text-sm tracking-wide">
                                Buy Now
                            </button>
                        </div>

                        {/* Image Placeholder Area */}
                        <div className="absolute right-0 bottom-0 md:top-0 w-[60%] md:w-1/2 h-[60%] md:h-full z-0 flex items-end md:items-center justify-end md:justify-center p-4">
                            <img src={`/soniquence/home/p-1.png`} alt="Logo" className="w-[80%] max-w-[200px] md:max-w-[400px] md:w-full object-contain" />
                        </div>

                        {/* Background flourish if needed */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </div>

                    {/* Right Card */}
                    <div
                        data-aos="fade-left"
                        className="bg-linear-to-br from-[#B000F5] via-[#d657ff] to-[#e89dff] rounded-4xl p-8 pb-32 md:px-12 md:py-10 md:pb-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center items-start shadow-xl shadow-fuchsia-900/10"
                    >
                        <img src={`/soniquence/home/product-bg.png`} alt="" className="absolute -right-0.5 -bottom-0.5 w-[200px] md:w-[250px]" />
                        <div className="relative z-10 w-full md:w-[60%]">
                            <h2 className="text-2xl md:text-3xl lg:text-[1.7rem] font-bold text-white mb-6 leading-tight tracking-tight mt-0 md:mt-4">
                                Surgical Instrumentation &<br />Accessories
                            </h2>
                            <button className="px-8 py-2.5 rounded-md border-2 border-white/80 text-white font-semibold hover:bg-white/10 hover:border-white transition-colors text-sm tracking-wide">
                                Buy Now
                            </button>
                        </div>

                        {/* Image Placeholder Area */}
                        <div className="absolute -right-4 bottom-0 md:top-0 w-[60%] md:w-1/2 h-[60%] md:h-full z-0 flex items-end md:items-center justify-end md:justify-center p-4">
                            {/* Note: Update with actual Next.js Image component when image is available */}

                            <img src={`/soniquence/home/p-2.png`} alt="Logo" className="w-[80%] max-w-[200px] md:max-w-[400px] md:w-full object-contain" />
                        </div>

                        {/* Background flourish */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>

    );
}
