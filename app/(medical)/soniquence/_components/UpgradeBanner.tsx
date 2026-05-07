export default function UpgradeBanner() {
    return (
        <section className="w-full py-12 md:py-16 pt-2! bg-white">
            <div className="site-container">
                <div
                    data-aos="zoom-in"
                    className="w-full brand-gradient rounded-3xl py-14 px-8 flex flex-col items-center justify-center text-center shadow-lg"
                >
                    <h2 className="text-[1.8rem] md:text-[1.7rem] font-bold text-white mb-8 leading-tight tracking-tight">
                        Upgrade your technology today<br />with Soniquence
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button className="px-8 py-2.5 rounded-lg bg-[#B000F5] border border-white text-white font-bold transition-colors text-sm tracking-wide shadow-sm hover:bg-[#E54DFF]">
                            Contact Us
                        </button>
                        <button className="px-8 py-2.5 rounded-lg bg-[#B000F5] border border-white text-white font-bold transition-colors text-sm tracking-wide shadow-sm hover:bg-[#E54DFF]">
                            Upgrade Program
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}
