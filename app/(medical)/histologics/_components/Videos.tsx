import Image from "next/image";
import homeData from "../_data/homeData.json";

export default function Videos() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-2xl md:text-[27px] font-bold text-[#0073CF] mb-6">
                        Recent Articles & Insights
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-center">
                        Stay informed with the latest research, innovations, and best practices in gynecological care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {homeData.videos.map((video, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-[#F9F9F9] rounded-xl overflow-hidden flex flex-col h-full border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="relative h-48 w-full cursor-pointer">
                                <img
                                    src={`/histologics/${video.image}`}
                                    alt={video.title}
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow items-center">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2 text-left w-full line-clamp-1">
                                    {video.title}
                                </h3>
                                <p className="text-xs! text-gray-400 mb-4 text-left w-full leading-relaxed">
                                    {video.date} | Histologics Women's Health | <br className="hidden lg:block lg:mb-1" /> Histologics GX
                                </p>
                                <p className="text-sm! text-gray-600 mb-6 text-left w-full leading-relaxed flex-grow line-clamp-2">
                                    {video.description}
                                </p>
                                <div className="mt-auto w-full flex justify-center">
                                    <button className="bg-[#A43B7F] text-white px-8 py-2.5 rounded-md text-sm font-medium hover:bg-[#8f326e] transition-colors cursor-pointer">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
