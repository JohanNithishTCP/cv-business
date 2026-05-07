import SectionTitle from "./SectionTitle";
import { Check } from "lucide-react";

export default function Offer() {

    const cdn = "https://d1gdtgnr73w1vu.cloudfront.net/site_static_content";
    return (
        <>
            <section style={{ backgroundImage: `url('${cdn}/client/img/liger-visuals/offers-bg.webp')` }} className={`w-full py-20 overflow-hidden relative bg-cover bg-no-repeat`}>
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180.7deg,#08949E5e_0.65%,#08949E5e_99.45%)]"></div>
                <div className="relative">
                    <SectionTitle
                        title="What We Offer You"
                        className="text-white!"
                    />
                    <hr className="w-[10%] mt-3 mx-auto border-3 border-primary-light/50 rounded-lg" />
                    <div className="container mx-auto grid grid-cols-1 mt-12 justify-items-center">
                        <div className="w-full lg:w-2/3 bg-primary/60 text-white! p-5 md:p-10 rounded-2xl backdrop-blur-md" data-aos="fade-up" data-aos-delay={200}>
                            <div>
                                <h4 className="text-3xl font-semibold mb-4 text-white! ">heyPatient Visuals Library</h4>
                                <p className="mb-6 text-justify text-white!">Enjoy 30-days free access to the heyPatient Visuals library of explainer animations. View & share unlimited animations with your patients & colleagues by email & SMS. At the conclusion of your 30-day free trial, you will automatically become a monthly subscriber and enjoy ongoing access to our ever-expanding library of videos.</p>
                            </div>
                            <div>
                                <ul>
                                    <li className="mb-2 flex items-start gap-4">
                                        <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white">
                                            <Check className="w-4 h-4 text-primary shrink-0" />
                                        </div>
                                        Ever-expanding content library</li>
                                    <li className="mb-2 flex items-start gap-4">
                                        <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        Help explain conditions, symptoms and treatments</li>
                                    <li className="mb-2 flex items-start gap-4">
                                        <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        Easy to send to patients</li>
                                    <li className="mb-2 flex items-start gap-4">
                                        <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        Use in your waiting room</li>
                                    <li className="mb-2 flex items-start gap-4">
                                        <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        Insurance billable</li>
                                    <li className="mb-2 flex items-start gap-4">
                                        <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-white">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        Improve your Google Reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}