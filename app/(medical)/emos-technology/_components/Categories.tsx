import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        title: "HUMAN",
        slug: "human",
        description: "Endoscopes MADE IN GERMANY for the various medical subjects.",
        buttonText: "Endoscopy Solutions",
        image: "/images/home/human.jpg"
    },
    {
        title: "VETERINARY",
        slug: "veterinary",
        description: "Special products and services for veterinary procedures.",
        buttonText: "Endoscopy Solutions",
        image: "/images/home/veterinary.jpg"
    },
    {
        title: "INDUSTRY",
        slug: "industry",
        description: "Endoscopes for inspection and analysis.",
        buttonText: "Endoscopy Solutions",
        image: "/images/home/industry.jpg"
    }
];

const Categories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => {
                        const isLink = cat.slug === "human";

                        const CardContent = (
                            <>
                                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                                    <img
                                        src={`/emos-technology${cat.image}`}
                                        alt={cat.title}
                                        className={`object-cover transition-transform duration-500 ${isLink ? 'group-hover:scale-110' : ''}`}
                                    />
                                </div>
                                <h3 className="text-primary font-bold mb-2 text-sm">{cat.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 max-w-[250px]">{cat.description}</p>
                                <button className={`flex items-center gap-2 text-white px-4 py-2 text-xs font-bold w-max transition-colors rounded-sm uppercase tracking-wider ${isLink ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-400 cursor-not-allowed'}`}>
                                    {isLink ? cat.buttonText : 'Coming Soon'}
                                    {isLink && <span>›</span>}
                                </button>
                            </>
                        );

                        if (isLink) {
                            return (
                                <Link
                                    href={`/category/${cat.slug}`}
                                    key={index}
                                    className="group cursor-pointer block"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    {CardContent}
                                </Link>
                            );
                        }

                        return (
                            <div
                                key={index}
                                className="group block"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
