import Image from 'next/image';

interface CategoryExpertiseProps {
    subTitle: string;
    title: string;
    image: string;
    features: string[];
}

const CategoryExpertise = ({ subTitle, title, image, features }: CategoryExpertiseProps) => {
    return (
        <section className="bg-primary py-20 text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <p className="text-sm font-medium mb-4 italic opacity-90">{subTitle}</p>
                    <h2 className="text-3xl md:text-3xl font-bold mb-8">
                        {title}
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl mx-auto">
                    <div className="flex-1 w-full" data-aos="fade-right">
                        <div className="relative h-[250px] md:h-[350px] w-full rounded-md overflow-hidden shadow-sm bg-white p-4">
                            <img
                                src={`${image}`}
                                alt={title}
                                className="object-contain p-8 transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4 w-full" data-aos="fade-left">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm p-4 rounded-md flex items-center gap-4 cursor-default"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <div className="w-12 h-12 bg-white rounded-md shrink-0 shadow-sm"></div>
                                <span className="text-sm font-bold">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryExpertise;
