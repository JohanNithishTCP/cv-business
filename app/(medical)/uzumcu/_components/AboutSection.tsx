import Button from "./Button";

export default function AboutSection() {
    const checkItems = [
        "Customer focus",
        "Expert staff",
        "Internal trainings",
        "Best support",
        "Special projects",
        "Sustainable production",
    ];

    return (
        <section className="pb-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column */}
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-[#3183C0]">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                                </svg>
                            </div>
                            <span className="text-2xl md:text-3xl font-bold text-gray-700 leading-tight">About Us</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                            We Pay Attention to Details to Achieve Perfection
                        </h2>

                        <p className="text-gray-800 mb-8 text-[17px]">
                            We handle all processes from planning to shipment in the most detailed way
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                            {checkItems.map((item) => (
                                <div key={item} className="flex items-center gap-3 text-[15px] font-bold text-gray-700">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                                        <img src={`/uzumcu/images/home/tick.svg`} alt="" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-gray-200 mb-6" />

                        <div className="space-y-4 leading-relaxed mb-10">
                            <p>
                                We offer practical, modern and innovative products that pay attention to the needs of the user to create maximum comfort for both surgeons and patients.
                            </p>
                            <p>
                                Since 1968, we have been manufacturing operating room equipment and medical gas systems for more than 50 years. With the excitement of our first day, we adopt the principle of being one step ahead of change and in line with this vision, we aim to contribute to human health not only in Turkey but all over the world.
                            </p>
                        </div>

                        <Button variant="primary" size="md" radius="full" className="px-12 py-4 shadow-xl shadow-[#3183C0]/10">
                            Show more About Us
                        </Button>
                    </div>

                    {/* Right Column - Single Large Image */}
                    <div className="lg:w-1/2 relative w-full" data-aos="fade-left">
                        <div className="rounded-[2.5rem] overflow-hidden">
                            <img
                                src={`/uzumcu/images/home/abt-2.jpg`}
                                alt="Uzumcu Operating Table"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

