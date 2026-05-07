import Button from "./Button";

export default function Compassionate() {
    return (
        <section className="relative py-40 bg-[url('/histologics/images/home/colposcopy-bg.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-[#A43B7F]/35"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl" data-aos="zoom-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Compassionate Colposcopy<sup className="text-2xl leading-[65px]">®</sup> Devices
                    </h2>
                    <Button variant="white">
                        Request Samples
                    </Button>
                </div>
            </div>
        </section>
    );
}
