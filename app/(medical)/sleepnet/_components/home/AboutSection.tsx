import Image from "next/image";
import Link from "next/link";
import { Globe, Briefcase } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">

                    {/* Left Column */}
                    <div className="w-full lg:w-3/5 flex flex-col gap-8 md:gap-10" data-aos="fade-right">
                        <div>
                            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-4 sm:mb-6 max-w-xl leading-snug sm:leading-tight">
                                At Sleepnet Corporation, we create innovative respiratory solutions.
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed lg:pr-10">
                                Since we were founded in 1990, Sleepnet has been committed to building high-quality respiratory products that help people lead healthier lives. Our passion for innovation is at the core of everything we do, creating a strong foundation for new ideas and better products that are accessible to all.  Our products are also compliant with the Buy America Act (BAA).
                            </p>
                        </div>

                        {/* the two small cards */}
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 md:gap-8">
                            <div className="flex flex-1 gap-4 items-start xl:items-start group cursor-pointer hover:-translate-y-1 transition-transform" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-surface border-l-2 border-secondary flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Globe strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="pt-0.5 flex-1">
                                    <h3 className="text-primary font-bold text-sm sm:text-[15px] md:text-base mb-1 md:mb-1.5 transition-colors group-hover:text-secondary">Explore Sleepnet</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pr-2 sm:pr-4">
                                        From sales to service and manufacturing to marketing, learn more about our different departments and how they can serve you.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-4 items-start xl:items-start group cursor-pointer hover:-translate-y-1 transition-transform" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-surface border-l-2 border-secondary flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Briefcase strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="pt-0.5 flex-1">
                                    <h3 className="text-primary font-bold text-sm sm:text-[15px] md:text-base mb-1 md:mb-1.5 transition-colors group-hover:text-secondary">Careers</h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pr-2 sm:pr-4">
                                        We're always looking for talented people to join our team. If you're interested in working at Sleepnet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image: Two people */}
                        <div className="w-full" data-aos="zoom-in" data-aos-delay="300">
                            <img src={`/sleepnet/home/about-1.png`} alt="" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-6 md:gap-8 mt-4 lg:mt-0" data-aos="fade-left">
                        {/* Image: Masks */}
                        <div className="w-full">
                            <img src={`/sleepnet/home/about-2.png`} alt="" />
                        </div>

                        {/* 35+ Years of Experience */}
                        <div className="flex items-center gap-3 sm:gap-4 mt-2 px-2 sm:px-4" data-aos="zoom-in" data-aos-delay="200">
                            <span className="text-secondary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">35+</span>
                            <span className="text-primary text-sm sm:text-lg lg:text-xl font-bold leading-tight">
                                Years of<br />Experience
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
