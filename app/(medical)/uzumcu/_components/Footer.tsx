import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-6 overflow-hidden" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 items-start mb-20 leading-relaxed text-[#111827]">
                    {/* Logo Column */}
                    <div className="lg:col-span-1">
                        <img src={`/uzumcu/images/uzumcu-logo.png`} alt="UZUMCU" className="h-10 mb-8" />

                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4 ">
                        <h4 className="font-black mb-6">Quick Links</h4>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/catalog" className="hover:text-primary transition-colors">Catalogue</Link>
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <Link href="/news" className="hover:text-primary transition-colors">News</Link>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-black mb-6">Company</h4>
                        <Link href="/corporate" className="hover:text-primary transition-colors">Corporate</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-black mb-6">Social Media Links</h4>
                        <div className="flex gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.612 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>
                            </div>
                        </div>
                        <div className="text-[9px] font-bold flex flex-col gap-3 opacity-90">
                            <span className="flex items-center gap-2">E-POSTA@uzumcu.com.tr <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                            <span className="flex items-center gap-2">+90 (212) 615 33 33 | FAX | 1184 <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-[8px] font-black ">
                    <p className="text-[16px]!">2026 ÜZÜMCÜ</p>
                    <img src={`/uzumcu/images/home/biltek.svg`} alt="bilok" className="h-5" />
                </div>
            </div>
        </footer>
    );
}
