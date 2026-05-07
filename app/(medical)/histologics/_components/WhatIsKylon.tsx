import Image from "next/image";
import Button from "./Button";

export default function WhatIsKylon() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-12 rounded-[10px] overflow-hidden drop-shadow-sm mx-auto">
                    {/* Left Text Box */}
                    <div className="lg:col-span-7 p-12 md:p-20 lg:p-28 xl:p-32 flex flex-col justify-center bg-[#A43B7F] text-white" data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl lg:text-[27px] font-bold mb-6">What is Kylon?</h2>
                        <p className="mb-6 text-base md:text-lg font-medium tracking-wide opacity-95">
                            Kylon® — gentle micro-hook fabric for precise debridement and biopsy.
                        </p>
                        <p className="mb-10 text-base md:text-lg leading-[1.8] font-normal opacity-90 text-justify">
                            Kylon® is a patented medical fabric made of fenestrated loop "micro-hooks" woven
                            into nylon; when lightly pressed and rotated, the hooks flex to engage epithelium,
                            lift tissue by frictional de-bonding, and trap the sample within the fabric. It
                            enables selective, layer-by-layer removal and specimen capture with a minimally
                            invasive, "compassionate" technique used across women's health (e.g.,
                            SoftBiopsy®) and wound care.
                        </p>
                        <div>
                            <Button className="!text-[#A43B7F] bg-white hover:bg-gray-100 normal-case tracking-normal font-bold px-8 py-3 rounded text-base shadow-sm border-none" variant="white">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="lg:col-span-5 bg-[#f4f4f4] flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[700px]" data-aos="fade-left">
                        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                            <img
                                src={`/histologics/images/kylon.png`}
                                alt="Kylon device close up"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
