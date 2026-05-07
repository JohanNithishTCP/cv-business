import Link from "next/link";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Button from "./_components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-8xl md:text-9xl font-bold text-[#A43B7F] mb-6 drop-shadow-sm">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0073CF] mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex justify-center">
            <Button href="/">
              Return to Homepage
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
