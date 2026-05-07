const WhyEmos = () => {
    const points = [
        {
            number: "01",
            title: "New products / Project planning",
            description: "We already set the course for an efficient and reliable process during the product development phase! This process from the customer's vision to the first prototype is crucial and decisive for the product's success. Together with our customers we develop a target-oriented concept. This basis for a precise and serialization production."
        },
        {
            number: "02",
            title: "Service for endoscopes",
            description: "Highest quality and reliability for surgeons. We are an independent and specialist repair moving service for flexible and rigid endoscopes. We wish added value, excellent speed and technical and specifically detailed processing."
        },
        {
            number: "03",
            title: "Supplier for B2B customers",
            description: "Do you require high-quality components and spare parts for your works? Then we are the right address! Here you can request precise, product-specific, thermo-tested surgical components and spare parts."
        }
    ];

    return (
        <section className="bg-primary py-20 text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <p className="uppercase text-xs font-bold tracking-[0.2em] mb-4 opacity-80">Why EMOS?</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        High quality endoscopes for medicine & industry
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs font-bold bg-white text-primary">1</span>
                            <span className="text-xs font-bold uppercase">Pioneer in the medical technology industry</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs font-bold bg-white text-primary">2</span>
                            <span className="text-xs font-bold uppercase">Specialist repair services</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs font-bold bg-white text-primary">3</span>
                            <span className="text-xs font-bold uppercase">Development &amp; manufacturing of medical products &quot;Made in Germany&quot;</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm p-10 flex flex-col md:flex-row gap-8 border border-white/20 hover:bg-white/15 transition-all"
                            data-aos="fade-left"
                            data-aos-delay={index * 150}
                        >
                            <div className="text-7xl font-bold opacity-50 shrink-0 leading-none">{point.number}</div>
                            <div className="flex-1">
                                <h4 className="text-xl font-bold mb-4">{point.title}</h4>
                                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                                    {point.description}
                                </p>
                                <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                                    Read more <span>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyEmos;
