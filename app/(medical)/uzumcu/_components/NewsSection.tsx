export default function NewsSection() {
    const news = [
        {
            title: "Innovation in Operating Room Technology",
            description: "Discover how Uzumcu Medical is advancing surgical environments with modern operating tables",
            img: "/images/home/news-1.png"
        },
        {
            title: "Improving Surgical Efficiency with Smart Medical Equipment",
            description: "Discover how innovative operating room solutions improve surgical efficiency, patient care, and safety.",
            img: "/images/home/news-2.png"
        },
        {
            title: "The Future of Sterilization and Infection Control",
            description: "Explore modern sterilization technologies that ensure high hygiene standards and patient safety.",
            img: "/images/home/news-3.png"
        },
        {
            title: "Designing Modern Hospitals for Better Healthcare",
            description: "See how advanced medical equipment and smart hospital design improve workflow and surgical outcomes.",
            img: "/images/home/news-4.png"
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center" data-aos="fade-up">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="text-primary">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                        </svg>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold leading-tight">Latest News & Updates</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center leading-tight">
                    Explore our journey of growth, innovation, and global expansion.
                </h2>
                <p className="text-xs md:text-sm font-medium mb-16 text-center max-w-6xl leading-relaxed whitespace-pre-line">
                    Stay updated with our latest developments, product launches, international fair participations, certifications, and technological advancements. See our line up
                    continue to innovate and contribute to global healthcare.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {news.map((item, i) => (
                        <div key={i} className="bg-[#EEEEF0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group group-hover:bg-white border border-gray-100 h-full flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="h-60 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                <span className="text-white text-[10px] font-black tracking-widest uppercase">
                                    <img src={`/uzumcu/${item.img}`} alt={item.title} className="w-full h-full object-cover" />
                                </span>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="p-6 text-center flex-grow flex flex-col justify-center">
                                <h3 className="text-md font-black mb-3">{item.title}</h3>
                                <p className="text-[14px]! mx-auto">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
