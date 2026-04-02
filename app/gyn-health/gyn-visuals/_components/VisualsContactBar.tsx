import Link from 'next/link';
import React from 'react';

export default function VisualsContactBar() {
    return (
        <div className="bg-primary text-white text-sm">
            <div className="site-container flex flex-col sm:flex-row justify-between items-stretch h-auto sm:h-[42px] text-[12px] font-medium tracking-wide">
                <div className="flex items-center flex-wrap shrink-0 border-l border-white/20">
                    <a href="tel:+1800001658" className="flex items-center gap-2 hover:text-gray-200 transition-colors h-full px-5 border-r border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        +1800-001-658
                    </a>
                    <a href="mailto:team@gyn-health.ch" className="flex items-center gap-2 hover:text-gray-200 transition-colors h-full px-5 border-r border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        team@gyn-health.ch
                    </a>
                </div>
                <div className="flex bg-primary-dark self-stretch items-center text-[11px] font-bold uppercase tracking-wider">
                    <Link href="https://gyn-health.clinicalvisuals.com/freetrial" target='_blank' className="flex items-center px-8 h-full hover:bg-black/10 transition-colors border-x border-white/20 bg-primary/30 shine-effect">
                        Free Trail
                    </Link>
                    <Link href="https://gyn-health.clinicalvisuals.com/login" target='_blank' className="flex items-center px-8 h-full hover:bg-black/10 transition-colors border-r border-white/20 shine-effect">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
