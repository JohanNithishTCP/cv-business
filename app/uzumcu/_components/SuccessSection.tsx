import Button from "./Button";

export default function SuccessSection() {
    const boxes = [
        {
            title: "Catalogs",
            description: "Innovative operating room and medical gas solutions for modern healthcare.",
            img: "/images/home/broucher.png",
        },
        {
            title: "Company Profile",
            description: "A trusted provider of advanced medical and operating room solutions.",
            img: "/images/home/company.png",
        },
        {
            title: "Company Video",
            description: "Discover our journey of innovation and dedication to healthcare.",
            img: "/images/home/company.png",
        },
        {
            title: "Latest News",
            description: "Explore our newest developments, events, and achievements.",
            img: "/images/home/news.png",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
                    {/* Left Column - Image Placeholder */}
                    <div className="lg:col-span-6 w-full h-[350px] md:h-[450px] bg-gray-50 rounded-lg overflow-hidden relative flex items-center justify-center border border-gray-100" data-aos="fade-right">
                        {/* Checkered pattern for placeholder */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAADVJREFUKFNj/MzAwH+YgQQwMSAAoxZJGAaG//8ZiDKJEoNo+A/URJhiUv0N08hEGBio6R80AQDRoBUoN1Y2fAAAAABJRU5ErkJggg==')" }}
                        ></div>
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-sm relative z-10">IMAGE SPACE</span>
                    </div>

                    {/* Right Column - Text */}
                    <div className="lg:col-span-6" data-aos="fade-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-[#3183C0]">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                                </svg>
                            </div>
                            <span className="text-2xl md:text-3xl font-bold text-gray-700 leading-tight">Global Trusted Experience</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                            We Are With You On The Road To Success.
                        </h2>

                        <p className="leading-relaxed mb-6 text-justify">
                            We carry the excitement of the first day with over 50 years of experience. We produce in our 30,000 m2 facility located in Ankara. Thanks to our production in accordance with international ISO 9001 VE 13485 standards, we offer all operating room equipment with CE marking. With over 50 years of experience in production and sales, our company offers operating room solutions to more than 100 countries in the world with an innovative, reliable and human health-centered approach. We are happy to contribute to the country's economy while expanding the markets of the products we promote by participating in domestic and international fairs.
                        </p>

                        <hr className="border-gray-100 my-8 w-full" />

                        <Button variant="primary" size="md" radius="full">
                            Explore Our Solutions
                        </Button>
                    </div>
                </div>

                {/* Bottom Section - 4 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" data-aos="fade-up">
                    {boxes.map((box, i) => (
                        <div key={i} className="flex bg-white rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100/50 hover:-translate-y-1 transition-transform duration-300">
                            {/* Cyan Square icon container */}
                            <div className="h-full p-4">
                                <div className="w-[85px] h-full rounded-[8px] bg-[#31BACF] flex-shrink-0 flex items-center justify-center">
                                    <img src={`/uzumcu/${box.img}`} alt={box.title} className="w-[80%] h-[80%] object-contain" />
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="p-4 py-5 flex flex-col justify-center bg-white flex-1">
                                <h3 className="text-[16px] font-bold text-gray-900 mb-1 leading-tight">{box.title}</h3>
                                <p className="text-[13px]! text-gray-500 leading-snug">
                                    {box.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
