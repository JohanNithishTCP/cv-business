import Button from "./Button";

export default function HelpSection() {
    return (
        <section className="py-16 bg-[url('/uzumcu/images/home/help-bg.png')] bg-cover bg-center relative overflow-hidden">


            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center" data-aos="zoom-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center leading-tight tracking-tight text-shadow-md">
                    Need Help?
                </h2>
                <p className="text-xl! text-white! font-bold mb-12 text-center leading-relaxed text-shadow-sm">
                    You can share all your questions and opinions with us. It is our pleasure to meet your needs.
                </p>

                <Button
                    variant="outline"
                    size="md"
                    radius="full"
                    iconPosition="left"
                    icon={<svg className="w-5 h-5 fill-current transition-colors" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>}
                >
                    Contact Us
                </Button>
            </div>
        </section>
    );
}

