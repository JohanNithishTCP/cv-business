import Image from 'next/image';

interface CategoryIntroProps {
    title: string;
    subTitle: string;
    description: string;
    image: string;
}

const CategoryIntro = ({ title, subTitle, description, image }: CategoryIntroProps) => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {title}
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 w-full" data-aos="fade-right">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src={`/emos-technology/${image}`}
                                alt={title}
                                className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="flex-1" data-aos="fade-left">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">{subTitle}</h2>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryIntro;
