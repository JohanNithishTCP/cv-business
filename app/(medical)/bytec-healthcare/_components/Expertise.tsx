'use client';

export default function Expertise() {
    return (
        <section className="section">
            <div className="container text-center mb-20" data-aos="fade-up">
                <h2 className="text-primary text-gradient-blue mb-4" style={{ fontSize: 'var(--fs-h2)' }}>Built on 25 years of expertise.</h2>
                <div className="w-20 h-1.5 bg-secondary mx-auto mb-4 rounded-full"></div>
                <p className="text-light font-bold tracking-[0.2em] text-xs uppercase opacity-80">From Local Needs to Global Frontline</p>
            </div>
            <div className="container">
                <div className="flex justify-center mt-6" data-aos="zoom-in" data-aos-delay="200">
                    <img src={`/bytec-healthcare/home/yoe.png`} alt="Built on 25 years of expertise." />
                </div>
            </div>
        </section>
    );
}
