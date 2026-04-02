import Link from "next/link";
import { Button } from "./_components/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#08949E]/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#08949E]/5 rounded-full blur-3xl z-0" />

            {/* Plus motifs */}
            <div className="absolute top-20 left-20 text-[#08949E]/10 text-6xl font-thin rotate-12 select-none pointer-events-none">+</div>
            <div className="absolute bottom-20 right-20 text-[#08949E]/10 text-8xl font-thin -rotate-12 select-none pointer-events-none">+</div>

            <div className="max-w-xl w-full text-center relative z-10" data-aos="fade-up">
                {/* Large 404 text with gradient/styling */}
                {/* <h1 className="text-[120px] md:text-[180px] font-black text-[#08949E]/10 leading-none select-none">
                    404
                </h1> */}

                <div className="-mt-12 md:-mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-[#64748B] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button variant="primary" className="px-8 py-3.5 flex items-center gap-2 group shadow-lg shadow-[#08949E]/20">
                                <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
                                <span>Return Home</span>
                            </Button>
                        </Link>

                        <Link href="/heyPatient-visuals">
                            <Button variant="outline" className="px-8 py-3.5 flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50">
                                <span>Explore Visuals</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Support Link */}
                <p className="mt-12 text-sm text-[#64748B]">
                    Need help? <Link href="/#support" className="text-[#08949E] font-bold underline hover:no-underline">Contact Support</Link>
                </p>
            </div>
        </div>
    );
}
