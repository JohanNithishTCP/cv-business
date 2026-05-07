import Link from "next/link";
import Footer from "./_components/Footer";
import Button from "./_components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-[#FFFFFF] px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 
            data-aos="fade-up"
            className="text-9xl font-bold text-[#059347] mb-4">
            404
          </h1>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-semibold text-[#000000] mb-6">
            Oops! Page Not Found
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#666666] text-lg md:text-xl mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button 
              href="/delphos-implants"
              variant="primary"
              size="lg"
              rounded="full"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
