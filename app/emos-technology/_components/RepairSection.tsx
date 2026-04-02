import Image from 'next/image';

const RepairSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

                    {/* Left Block: About EMOS */}
                    <div className="flex flex-col" data-aos="fade-right">
                        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden group">
                            <img
                                src={`/emos-technology/images/home/repair-1.jpg`}
                                alt="About EMOS"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-primary"></div>
                                <span className="text-xs font-bold text-primary uppercase">About EMOS</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6">
                                Endoscopes MADE IN GERMANY successfully for many years
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                EMOS Technology GmbH is a globally operating manufacturer and service company.
                                With passion and attention to detail, our team has been developing and producing high-quality endoscopic
                                MADE IN GERMANY since 2003. Based on our company&apos;s founding.
                            </p>
                            <button className="bg-primary text-white flex items-center gap-4 px-6 py-3 text-xs font-bold hover:bg-primary-dark transition-all rounded-sm uppercase tracking-widest">
                                Learn More <span>›</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Block: Repair Service */}
                    <div className="flex flex-col md:flex-col-reverse" data-aos="fade-left">
                        <div className="relative h-96 w-full mb-8 md:mb-0 md:mt-8 rounded-lg overflow-hidden group">
                            <img
                                src={`/emos-technology/images/home/repair-2.jpg`}
                                alt="Repair Service"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-[1px] bg-primary"></div>
                                <span className="text-xs font-bold text-primary uppercase">Repair Service</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6">
                                High quality at Fair prizes - rely on our professional service department
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                We are an independent endoscopes repair service provider. We place great importance on providing
                                you our customer, with a detailed cost estimate that is comprehensive, so you know what your
                                needs in return, operational repair during minimum response means. We are happy to provide you with a
                                loan device for the duration of the repair.
                            </p>
                            <button className="bg-primary text-white flex items-center gap-4 px-6 py-3 text-xs font-bold hover:bg-primary-dark transition-all rounded-sm uppercase tracking-widest">
                                Endoscopy Solutions <span>›</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RepairSection;
