import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="pb-20 pt-5 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        High quality endoscopes for medicine & industry
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <div className="w-40 h-0.5 bg-primary"></div>
                        <p className=" text-gray-700 text-xl! font-bold">OEM | Development projects</p>
                        <div className="w-40 h-0.5 bg-primary"></div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1" data-aos="fade-right">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center lg:text-left">With passion and attention to the detail</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed text-justify">
                            We already set the course for an efficient and reliable process during the product development phase! This process
                            from the customer&apos;s vision to the first prototype is crucial and decisive for the product&apos;s success. Together with our
                            customers we develop a target-oriented concept. This basis for a precise and serialization production.
                        </p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed text-justify">
                            The journey from an idea to the first prototype is crucial and decisive for the product&apos;s success. At EMOS Technology
                            flexible we work closely with our customers to develop target-oriented concepts that go beyond basic functionality.
                            Implementing the most suitable preparation processes facilitates improving. This approach is base the foundation
                            for reliable, process-safe series production techniques.
                        </p>
                    </div>
                    <div className="flex-1 w-full" data-aos="fade-left">
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={`/emos-technology/images/home/endoscopes.jpg`}
                                alt="Product detail"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
