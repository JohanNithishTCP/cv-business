import Link from 'next/link';
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar isHome={false} />
            <main className="flex-1 flex items-center justify-center pt-32 pb-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-primary/20 leading-none">404</h1>
                        <div className="mt-[-2rem]">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-md mx-auto mb-10 text-lg italic">
                        &quot;Precision is at our core, but it seems we couldn&apos;t find the exact page you were looking for.&quot;
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="bg-primary text-white px-8 py-3 font-bold uppercase text-sm tracking-widest hover:bg-primary-dark transition-all rounded-sm flex items-center gap-2"
                        >
                            Back to Home <span>→</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-primary text-primary px-8 py-3 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all rounded-sm"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
