'use client';

export default function Footer() {
    const socialIcons = [
        { name: 'LinkedIn', d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
        { name: 'X', d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" },
        { name: 'Facebook', d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
    ];

    return (
        <footer className="bg-gradient-to-r from-secondary to-primary pt-24 pb-2 border-t border-white/10 text-white">
            <div className="container mb-10! grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-8">
                        <img src={`/bytec-healthcare/logo-white.png`} alt="logo" />
                    </div>
                    <div className="text-white/90 text-sm leading-relaxed space-y-1 max-w-sm">
                        <p>Bytec Healthcare Limited,</p>
                        <p>Unit A, City Park, 401 Faraday Avenue,</p>
                        <p>Risley, Warrington, Cheshire WA3 6GA,</p>
                        <p>United Kingdom. +44 (0)1925 831600</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-8 text-white">Products</h4>
                    <ul className="space-y-4 text-white/90 font-medium text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">SmartLine</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">MediLine</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Liteline</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                    </ul>
                </div>
                {/* <div>
                    <h4 className="font-bold text-lg mb-8 text-white">Products</h4>
                    <ul className="space-y-4 text-white/90 font-medium text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Medical AIO PCs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Medical AI PC</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Medical Monitor</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terminal Monitor</a></li>
                    </ul>
                </div> */}
                <div>
                    <h4 className="font-bold text-lg mb-8 text-white">Solutions</h4>
                    <ul className="space-y-4 text-white/90 font-medium text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">RMA Support</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-8 text-white">Company</h4>
                    <ul className="space-y-4 text-white/90 font-medium text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Our Partners</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Staff Portal</a></li>
                    </ul>
                </div>
            </div>

            <div className="container grid lg:grid-cols-3 grid-cols-1 justify-between items-center pt-10 border-t border-white/10">
                <p className="text-white/90 text-[10px] mt-2 lg:text-left text-center">
                    Bytec Healthcare © 1999–2026. All rights reserved.
                </p>

                <div className="flex justify-center gap-4 mt-2">
                    {socialIcons.map((icon, i) => (
                        <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={icon.d} /></svg>
                        </a>
                    ))}
                </div>

                <div className="flex items-center lg:justify-end justify-center gap-2 mt-2">
                    <img src={`/bytec-healthcare/home/footer-1.png`} width={`220px`} alt="footer" />
                </div>
            </div>
        </footer>
    );
}
