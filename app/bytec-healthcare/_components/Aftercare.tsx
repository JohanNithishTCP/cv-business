'use client';

export default function Aftercare() {
    return (
        <section className="section pt-10! bg-white text-primary">

            <div className="container">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-secondary font-bold mb-4" style={{ fontSize: 'var(--fs-h2)' }}>Aftercare Services</h2>
                    <p className="text-light font-medium">Keep delivering exceptional patient care</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Standard Warranty", desc: "Standard coverage for your platform, your investment from day one.", active: false },
                        { title: "Extended Warranty", desc: "Additional peace of mind & coverage beyond your guarantee.", active: true },
                        { title: "Maintenance Plans", desc: "Professional options to keep your equipment performing at its best.", active: false }
                    ].map((card, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className={`p-10 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${card.active ? 'bg-secondary text-white border-secondary shadow-2xl shadow-secondary/30 -translate-y-2' : 'bg-white text-primary border-gray-100 hover:shadow-xl hover:-translate-y-1'}`}>
                            <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-colors ${card.active ? 'bg-white/20' : 'bg-secondary/10 group-hover:bg-secondary group-hover:text-white'}`}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p className={`text-sm leading-relaxed ${card.active ? 'text-white/80' : 'text-light'}`}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
