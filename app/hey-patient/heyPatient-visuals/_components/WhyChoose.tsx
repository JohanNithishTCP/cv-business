import SectionTitle from "./SectionTitle";
interface WhyChooseProps {
    whyChoose: React.RefObject<HTMLDivElement> | null;
}

export default function WhyChoose({ whyChoose }: WhyChooseProps) {
    const cdn = "https://d1gdtgnr73w1vu.cloudfront.net/site_static_content";
    return (
        <>
            <section
                ref={whyChoose}
                className="w-full py-15 overflow-hidden bg-linear-to-b from-primary-dark to-primary-dark/80"
            >
                <SectionTitle
                    title="Why Doctors Choose heyPatient Visuals"
                    className="text-white!"
                />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-15 px-4">
                    <div className="relative group overflow-hidden" data-aos="fade-right">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="choose-rd top-[-89px] left-[calc(-20%-34px)]"></div>
                            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full relative z-10">
                                <img src={`${cdn}/client/img/liger-visuals/education.png`} alt="Boost Patient Retention" className="w-12 h-12 object-contain" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-primary relative z-10">Boost Patient Retention</h4>
                            <p className="text-gray-600 leading-relaxed font-medium relative z-10">Turn confusion into clarity with heyPatient Visuals. Our 3D animations make conditions easy to understand, helping patients feel confident and loyal to your practice.</p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden" data-aos="fade-up">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="choose-rd bottom-[-100px] right-[-126px]"></div>
                            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full relative z-10">
                                <img src={`${cdn}/client/img/liger-visuals/patient.png`} alt="Clear Explanations, Stronger Connections" className="w-12 h-12 object-contain" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-primary relative z-10">Clear Explanations, Stronger Connections</h4>
                            <p className="text-gray-600 leading-relaxed font-medium relative z-10">Clear explanations make information easier to understand, helping people feel more confident, supported, and aligned. This strengthens relationships, builds trust, and enables everyone to move forward with clarity and purpose.</p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden" data-aos="fade-left">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="choose-rd top-[-89px] right-[calc(-20%-34px)]"></div>
                            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full relative z-10">
                                <img src={`${cdn}/client/img/liger-visuals/marketing.png`} alt="Practice Growth Made Simple" className="w-12 h-12 object-contain" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-primary relative z-10">Practice Growth Made Simple</h4>
                            <p className="text-gray-600 leading-relaxed font-medium relative z-10">Why stop at the clinic? With heyPatient Visuals, you can share animations across websites, social media, emails, and patient portals—strengthening your reputation and digital reach.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}