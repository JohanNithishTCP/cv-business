'use client';

export default function BuildQuality() {
    return (
        <section className="section bg-gradient-to-r to-secondary from-primary text-white relative overflow-hidden">
            {/* Animated Orbs for Depth */}
            <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -left-20 -bottom-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"></div>

            <div className="container lg:px-40! relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 data-aos="fade-up" className="mb-12 leading-[1.1]" style={{ fontSize: 'var(--fs-h2)' }}>
                            Robust Build Quality <br />
                            <span className="text-secondary">for clinical demands.</span>
                        </h2>
                        <ul className="space-y-10">
                            {[
                                "Including medical-grade disinfectable materials",
                                "Superior cluster-centered solutions",
                                "UK designed & manufactured solution",
                                "Engineered for Everyday Efficiency"
                            ].map((text, i) => (
                                <li key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-secondary group-hover:border-secondary group-hover:scale-110 transition-all duration-500 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-medium tracking-tight mt-1" style={{ fontSize: 'var(--fs-body)', fontWeight: 600 }}>{text}</h3>
                                        <div className="w-0 group-hover:w-full h-0.5 bg-secondary/50 transition-all duration-700 mt-2"></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center" data-aos="fade-left">
                        <img src={`/bytec-healthcare/home/build-quality.png`} alt="Built on 25 years of expertise." />
                    </div>
                </div>
            </div>
        </section>
    );
}
