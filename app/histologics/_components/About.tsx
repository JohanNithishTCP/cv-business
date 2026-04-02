import Image from "next/image";
import Button from "./Button";

export default function About() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start" data-aos="fade-right">
                        <div className="relative w-full max-w-xl mb-8 lg:mb-0">
                            {/* Purple Background offset */}
                            <div className="absolute top-[10%] left-[15%] w-[95%] h-[100%] bg-[#A43B7F] rounded-2xl z-0">
                                {/* The text vertically centered on the right strip */}
                                <div className="absolute top-0 bottom-0 right-0 w-[15%] flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold whitespace-nowrap transform -rotate-90 tracking-widest origin-center">
                                        18 years of experience
                                    </span>
                                </div>
                            </div>

                            {/* Image bounding box */}
                            <div className="relative z-10 w-[95%] aspect-[3/3] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                                <img
                                    src={`/histologics/images/abt-histologics.png`}
                                    alt="About Histologics"
                                    className="object-cover object-right"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Text Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                        <h2 className="text-2xl md:text-[27px] font-bold text-[#0073CF] mb-6">
                            About Histologics LLC
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                            Histologics LLC’s primary objective is to advance the field of tissue sampling into the 21st century. Proper tissue sampling and care during colposcopic practice and other medical settings should serve to save lives, worldwide.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                            Histologics LLC was established in 2008 out of a dedication to women undergoing evaluation for abnormal cervical cancer screening and a need for better histologic sampling. The founders, including Ob/Gyn inventor Dr. Neal Lonky, developed Speculoscopy (PapSure ®) and Spirabrush CX® in the 1980's and early 1990's (respectively). Years of dedication to improving women's healthcare led the company to innovate a different approach to obtain tissue samples from the cervix, lower genital tract, and other epithelium.
                        </p>
                        <div>
                            <Button>
                                Know More
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
