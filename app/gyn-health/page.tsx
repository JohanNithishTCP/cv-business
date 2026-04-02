import Header from './_components/Header';
import HeroBanner from './_components/HeroBanner';
import BookingForm from './_components/BookingForm';
import AboutSection from './_components/AboutSection';
import ServicesSection from './_components/ServicesSection';
import ExperienceSection from './_components/ExperienceSection';
import LocationsSection from './_components/LocationsSection';
import ActionCards from './_components/ActionCards';
import Footer from './_components/Footer';
import ContactBar from './_components/ContactBar';

export default function Home() {
  return (
    <div className="bg-white flex flex-col font-sans text-gray-900">
      <ContactBar />
      <Header />
      <main className="grow">
        <HeroBanner />

        <div className="bg-white py-16">
          <BookingForm />
        </div>

        <AboutSection />

        <ServicesSection />

        <ExperienceSection />

        <LocationsSection />

        <ActionCards />
      </main>

      <Footer />
    </div>
  );
}
