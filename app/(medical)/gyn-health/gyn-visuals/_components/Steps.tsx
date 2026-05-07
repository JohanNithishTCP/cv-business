import SectionTitle from "./SectionTitle";

interface StepsProps {
    stepsRef: React.RefObject<HTMLDivElement> | null;
}

export default function Steps({ stepsRef }: StepsProps) {

    const cdn = "https://d1gdtgnr73w1vu.cloudfront.net/site_static_content";

    return (
        <section
            ref={stepsRef}
            className="w-full py-20 bg-white overflow-hidden"
        >
            <SectionTitle
                title="From Consultation to Care – GYN Health Makes Every Step Visual"
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-12 mx-10 md:mx-20">
                <div data-aos="fade-right">
                    <div className="steps-card">
                        <div className="steps-round">1</div>
                        <div className="steps-br"></div>
                        <div className="steps-bg"></div>
                        <div className="absolute right-[90px] bottom-[-5%] transform translate-x-1/2 sm:translate-x-0 rotate-90 sm:rotate-0 sm:right-[-18px] sm:top-[43%]">
                            <svg width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,0 24,13.5 0,27" fill="#9b8ab2" />
                            </svg>
                        </div>
                        <div className="relative z-2">
                            <img src={`${cdn}/client/img/liger-visuals/game_changer_patient_health_concern_compress.webp`}
                                alt="From Concern to Appointment"
                                className="rounded-lg"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg mt-5">From Concern to Appointment</h3>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100">
                    <div className="steps-card">
                        <div className="steps-round">2</div>
                        <div className="steps-br"></div>
                        <div className="steps-bg"></div>
                        <div className="absolute right-[90px] bottom-[-5%] transform translate-x-1/2 sm:translate-x-0 rotate-90 sm:rotate-0 sm:right-[-18px] sm:top-[43%]">
                            <svg width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,0 24,13.5 0,27" fill="#9b8ab2" />
                            </svg>
                        </div>
                        <div className="relative z-2">
                            <img src={`${cdn}/client/img/liger-visuals/game_changer_arrange_appointments_compress.webp`}
                                alt="Animations Prepare Patient"
                                className="rounded-lg"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg mt-5">Animations Prepare Patient</h3>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200">
                    <div className="steps-card">
                        <div className="steps-round">3</div>
                        <div className="steps-br"></div>
                        <div className="steps-bg"></div>
                        <div className="absolute right-[90px] bottom-[-5%] transform translate-x-1/2 sm:translate-x-0 rotate-90 sm:rotate-0 sm:right-[-18px] sm:top-[43%]">
                            <svg width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,0 24,13.5 0,27" fill="#9b8ab2" />
                            </svg>
                        </div>
                        <div className="relative z-2">
                            <img src={`${cdn}/client/img/liger-visuals/game_changer_waiting_room_compress.webp`}
                                alt="Waiting Room Patient Education"
                                className="rounded-lg"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg mt-5">Waiting Room Patient Education</h3>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200">
                    <div className="steps-card">
                        <div className="steps-round">4</div>
                        <div className="steps-br"></div>
                        <div className="steps-bg"></div>
                        <div className="absolute right-[90px] bottom-[-5%] transform translate-x-1/2 sm:translate-x-0 rotate-90 sm:rotate-0 sm:right-[-18px] sm:top-[43%]">
                            <svg width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,0 24,13.5 0,27" fill="#9b8ab2" />
                            </svg>
                        </div>
                        <div className="relative z-2">
                            <img src={`${cdn}/client/img/liger-visuals/game_changer_doctors_3d_animation_compress.webp`}
                                alt="From Concern to Appointment"
                                className="rounded-lg"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg mt-5">Doctor Uses Animation; Explains Condition</h3>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="400">
                    <div className="steps-card">
                        <div className="steps-round">5</div>
                        <div className="steps-br"></div>
                        <div className="steps-bg"></div>
                        <div className="absolute right-[90px] bottom-[-5%] transform translate-x-1/2 sm:translate-x-0 rotate-90 sm:rotate-0 sm:right-[-18px] sm:top-[43%]">
                            <svg width="24" height="27" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="0,0 24,13.5 0,27" fill="#9b8ab2" />
                            </svg>
                        </div>
                        <div className="relative z-2">
                            <img src={`${cdn}/client/img/liger-visuals/game_changer_patient_trust_compress.webp`}
                                alt="Patient Leaves; Clearer Understanding; More Trust"
                                className="rounded-lg"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg mt-5">Patient Leaves; Clearer Understanding; More Trust</h3>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="500">
                    <div className="steps-card">
                        <div className="steps-round">6</div>
                        <div className="steps-br"></div>
                        <div className="steps-bg"></div>
                        <div className="relative z-2">
                            <img src={`${cdn}/client/img/liger-visuals/game_changer_patient_satisfaction_compress.webp`}
                                alt="Improved Patient Satisfaction & Review Scores"
                                className="rounded-lg"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg mt-5">Improved Patient Satisfaction & Review Scores</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
