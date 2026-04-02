import SectionTitle from "./SectionTitle";

export default function PoweredBy() {
    const cdn = "https://d1gdtgnr73w1vu.cloudfront.net/site_static_content";
    return (
        <>
            <section className="w-full py-20 overflow-hidden bg-[#08949E0f]">
                <SectionTitle
                    title="Designed with doctors. Delivered by experts. Powered by heyPatient"
                />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-12 gap-12">
                    <div data-aos="fade-up">
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary">Instant Support</h4>
                            <p className="my-3 text-lg">Send animations by email, SMS, <br /> WhatsApp...</p>
                        </div>
                        <img src={`${cdn}/client/img/liger-visuals/userfriendly_email.webp`} alt="Instant Support" className="rounded-xl" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay={100}>
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary">Universal Access</h4>
                            <p className="my-3 text-lg">Formatted to play on any Internet <br /> connected device</p>
                        </div>
                        <img src={`${cdn}/client/img/liger-visuals/userFriendly_internet.webp`} alt="Universal Access" className="rounded-xl" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay={200}>
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary">Clear Communication</h4>
                            <p className="my-3 text-lg">Combines high quality animation with easy to follow audio voice-overs on every animation</p>
                        </div>
                        <img src={`${cdn}/client/img/liger-visuals/userFriendly_track.webp`} alt="Clear Communication" className="rounded-xl" />
                    </div>
                    <div data-aos="fade-up">
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary">Viewer Analytics</h4>
                            <p className="my-3 text-lg">Track usage by your physicians and viewing by your patients.</p>
                        </div>
                        <img src={`${cdn}/client/img/liger-visuals/userFriendly_track.webp`} alt="Viewer Analytics" className="rounded-xl" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay={100}>
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary">Looped Display</h4>
                            <p className="my-3 text-lg">Create a loop of animations to display in your patient waiting areas</p>
                        </div>
                        <img src={`${cdn}/client/img/liger-visuals/userFriendly_loopdisplay.webp`} alt="Looped Display" className="rounded-xl" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay={200}>
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary">Online Presence</h4>
                            <p className="my-3 text-lg">Use the animations on your social media pages and websites.</p>
                        </div>
                        <img src={`${cdn}/client/img/liger-visuals/userFriendly_socialmedia.webp`} alt="Online Presence" className="rounded-xl" />
                    </div>
                </div>
            </section>
        </>
    )
}