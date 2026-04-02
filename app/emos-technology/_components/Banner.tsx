import Image from 'next/image';

const Banner = () => {
    return (
        <section className="w-full bg-[#fcfcfc] flex flex-col lg:relative lg:h-[93vh] lg:justify-end overflow-hidden">
            {/* Main Product Image - Full width on desktop, contained on mobile */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:absolute lg:inset-0 lg:h-full z-0" data-aos="zoom-in" data-aos-duration="1000">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://cdn.clinicalvisuals.com/medical/emos/shortclips/emos_04.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                {/* 
                <img
                    src={`/emos-technology/images/home/bg-passion.jpg`}
                    alt="EMOS Precision Instrument"
                    className="object-contain lg:object-cover object-bottom lg:object-center"
                />
                */}
            </div>

            {/* Typography Overlay */}
            <div className="container mx-auto relative z-10 py-8 px-4 sm:px-6 lg:px-8 lg:pb-20 text-center lg:text-left">
                <div className="max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="300">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-[1.2] lg:leading-[0.9] tracking-tighter">
                        Pure passion & <br className="hidden sm:block" /> attention to detail
                    </h2>
                </div>
            </div>

            {/* Subtle Gradient Bottom to ensure text pop on desktop */}
            <div className="hidden lg:block absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent pointer-events-none z-[1]"></div>
        </section>
    );
};

export default Banner;
