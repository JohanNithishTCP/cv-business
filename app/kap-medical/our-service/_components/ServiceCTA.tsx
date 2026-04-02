import Button from '../../_components/Button';

export default function ServiceCTA() {
    return (
        <section className="py-20 bg-[#002B49] text-white text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl! font-semibold! mb-8! text-white!">
                    Have a Project in Mind? Let's<br />Engineer the Right Solution
                </h2>
                <Button href="/contact" variant="secondary" className="px-10 py-3">
                    Get in touch
                </Button>
            </div>
        </section>
    );
}
