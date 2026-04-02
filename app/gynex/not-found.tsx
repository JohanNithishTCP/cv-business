import Link from "next/link";
import Button from "./_components/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#7C2B83]/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7C2B83]/5 rounded-full blur-3xl z-0" />

            {/* Plus motifs */}
            <div className="absolute top-20 left-20 text-[#7C2B83]/10 text-6xl font-thin rotate-12 select-none pointer-events-none">+</div>
            <div className="absolute bottom-20 right-20 text-[#7C2B83]/10 text-8xl font-thin -rotate-12 select-none pointer-events-none">+</div>

            <div className="max-w-xl w-full text-center relative z-10" data-aos="fade-up">
                <div className="-mt-12 md:-mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-[#64748B] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/gynex">
                            <Button variant="primary" className="flex items-center gap-2 group shadow-lg shadow-[#7C2B83]/20">
                                <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
                                <span>Return Home</span>
                            </Button>
                        </Link>

                        <Link href="/gynex">
                            <Button variant="outline" className="flex items-center gap-2">
                                <ArrowLeft className="w-5 h-5" />
                                <span>Go Back</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Support Link */}
                <p className="mt-12 text-sm text-[#64748B]">
                    Need help? <Link href="/gynex#contact" className="text-[#7C2B83] font-bold underline hover:no-underline">Contact Support</Link>
                </p>
            </div>
        </div>
    );
}
