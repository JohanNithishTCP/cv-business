export default function HistorySection() {
    const steps = [
        { num: 1, year: "1989", title: "Collagen Technology", offset: "mt-0", img: "/integra/home/timeline-1.png" },
        { num: 2, year: "1996", title: "Dermal Regeneration", offset: "mt-20", img: "/integra/home/timeline-2.png" },
        { num: 3, year: "1999", title: "Tissue Regeneration", offset: "mt-36", img: "/integra/home/timeline-3.png" },
        { num: 4, year: "2001", title: "Nerve Guide", offset: "mt-52", img: "/integra/home/timeline-4.png" }
    ];

    return (
        <section className="relative w-full bg-[#1e6f54] text-white overflow-hidden py-16 md:py-24 px-4 md:px-8 min-h-[600px] md:min-h-[800px]">
            {/* Background Decoratives (Leaves / Waves placeholders) */}
            <div className="absolute top-0 left-0  pointer-events-none z-0">
                <img src={`/integra/home/flower-1.png`} alt="Asterisk" className="w-55" />
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none opacity-20 z-0">
                <img src={`/integra/home/flower-2.png`} alt="Asterisk" className="w-45" />
            </div>

            <div className="relative z-10 max-w-[1440px] w-full mx-auto flex flex-col items-center">
                <h3 data-aos="fade-up" className="text-[16px] font-semibold tracking-wider text-white/90 mb-2 mt-4">
                    Our History
                </h3>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-[28px] md:text-[36px] font-bold text-white tracking-tight mb-12 md:mb-20 text-center leading-[1.2]">
                    How We Transform Your Aesthetic Goals
                </h2>

                {/* Timeline Desktop grid */}
                <div className="hidden md:flex w-full justify-between items-start px-4">
                    {steps.map((step, index) => (
                        <div key={step.num} data-aos="fade-up" data-aos-delay={200 + index * 100} className={`flex flex-col items-center flex-1 max-w-[250px]`}>
                            {/* Step Pill */}  <h4 className="font-bold text-[16px] mb-6 text-center h-[20px] flex items-center justify-center">
                                {step.title}
                            </h4>

                            <div className="border border-[#7cd1b0] rounded-full px-5 py-1 text-[13px] text-[#b8ebd6] bg-[#1e6f54]">
                                {step.year}
                            </div>

                            {/* Dashed Line */}
                            {/* <div className="w-[1px] h-14 border-l-[1.5px] border-dashed border-[#7cd1b0] mb-2 relative">
                                <div className="absolute -bottom-[2px] -left-[4.5px] w-2 h-2 border-r-[1.5px] border-b-[1.5px] border-[#7cd1b0] rotate-45" />
                            </div> */}

                            {/* Title */}

                            {/* Image Box */}
                            <div className="w-full relative overflow-hidden">
                                <img src={`${step.img}`} alt="History" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View - simple stacked */}
                <div className="md:hidden flex flex-col gap-12 w-full mt-10">
                    {steps.map((step, index) => (
                        <div key={step.num} data-aos="fade-up" data-aos-delay={index * 100} className="flex flex-col items-center w-full">
                            <div className="border border-[#7cd1b0] rounded-full px-5 py-1 text-[13px] text-[#b8ebd6] mb-4">
                                Step {step.num}
                            </div>
                            <h4 className="font-bold text-[18px] mb-4">{step.title}</h4>
                            <div className="w-full max-w-[300px] relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-medium">
                                    <img src={`${step.img}`} alt="History" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
