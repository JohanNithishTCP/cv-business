import Image from "next/image";
import homeData from "../_data/homeData.json";
import Button from "./Button";

export default function OtherDepartments() {
    return (
        <section className="py-24 bg-[#A43B7F]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-down">
                <h2 className="text-[27px] font-bold text-white mb-4">
                    Visit Our Other Departments
                </h2>
                <p className="text-white opacity-80 mb-12 max-w-3xl mx-auto">
                    Explore our comprehensive range of medical solutions across multiple specialties.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 mx-auto">
                    {homeData.departments.map((dept, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-xl shadow-xl p-10 flex-1 flex flex-col items-center justify-between transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="relative w-48 h-48 sm:w-[200px] sm:h-[200px] mb-6">
                                <img
                                    src={`/histologics/${dept.logo}`}
                                    alt="Department Logo"
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-medium text-gray-800 text-center mb-8 max-w-lg min-h-[48px] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                                <span>{dept.title}</span> <span className="font-bold text-[#0073CF]">{dept.subtitle} ?</span>
                            </p>
                            <Button href={dept.link} className="w-full sm:w-auto">
                                Visit Website
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
