import Link from "next/link";
import { Home, Stethoscope, HeartPulse, ShoppingBag, Handshake } from "lucide-react"; // Using reasonable replacements for icons

export default function AudienceSection() {
    return (
        <section className="bg-primary-muted py-24">
            <div className="container mx-auto px-6">
                <h2
                    className="text-center text-white text-3xl md:text-4xl font-semibold mb-16 tracking-wide font-oswald"
                    data-aos="fade-up"
                >
                    What are you looking for?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div
                        className="bg-primary p-8 flex flex-col relative group hover:-translate-y-1 transition-transform cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        <div className="flex justify-between items-start mb-6 text-secondary relative z-10">
                            <Home size={40} strokeWidth={1.5} />
                            <span className="text-5xl font-bold opacity-20 font-oswald">01</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-4 relative z-10">I'm a Distributor</h3>
                        <p className="text-white/60 text-md leading-relaxed mb-6 relative z-10">
                            Access these resources to learn more about our products and to become a Sleepnet distribution partner.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-primary p-8 flex flex-col relative group hover:-translate-y-1 transition-transform cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="flex justify-between items-start mb-6 text-secondary relative z-10">
                            <Stethoscope size={40} strokeWidth={1.5} />
                            <span className="text-5xl font-bold opacity-20 font-oswald">02</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-4 relative z-10">I'm a Provider</h3>
                        <p className="text-white/60 text-md leading-relaxed mb-6 relative z-10">
                            Access resources to help healthcare professionals do what they do best - care for their patients.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-primary p-8 flex flex-col relative group hover:-translate-y-1 transition-transform cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="flex justify-between items-start mb-6 text-secondary relative z-10">
                            <HeartPulse size={40} strokeWidth={1.5} />
                            <span className="text-5xl font-bold opacity-20 font-oswald">03</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-4 relative z-10">I'm a Patient</h3>
                        <p className="text-white/60 text-md leading-relaxed mb-6 relative z-10">
                            Access articles, videos, and quick start guides to learn more about our products and get the most out of your therapy.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div
                        className="bg-primary p-8 flex flex-col relative group hover:-translate-y-1 transition-transform cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="flex justify-between items-start mb-6 text-secondary relative z-10">
                            <ShoppingBag size={40} strokeWidth={1.5} />
                            <span className="text-5xl font-bold opacity-20 font-oswald">04</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Where to Buy Our Products</h3>
                        <p className="text-white/60 text-md leading-relaxed mb-6 relative z-10">
                            Sleepnet products are distributed worldwide through online and local partners.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div
                        className="bg-primary p-8 flex flex-col relative group hover:-translate-y-1 transition-transform cursor-pointer"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="flex justify-between items-start mb-6 text-secondary relative z-10">
                            <Handshake size={40} strokeWidth={1.5} />
                            <span className="text-5xl font-bold opacity-20 font-oswald">05</span>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-4 relative z-10">Become a Partner</h3>
                        <p className="text-white/60 text-md leading-relaxed mb-6 relative z-10">
                            Considering a Partnership with Sleepnet?
                        </p>
                    </div>

                    {/* Action Area */}
                    <div
                        className="p-8 flex flex-col items-center justify-center text-center"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <p className="text-white/80 text-sm mb-6 max-w-xs leading-relaxed">
                            Access these resources to learn more about our products and to become a Sleepnet distribution partner.
                        </p>
                        <Link
                            href="/services"
                            className="bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold px-8 py-3 rounded transition-colors inline-block"
                        >
                            View All Services
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
