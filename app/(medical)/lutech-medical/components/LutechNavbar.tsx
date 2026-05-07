"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ChevronDown, Menu, Search, X } from "lucide-react";


const navItems = [
  "Home",
  "Colposcopes",
  "Services",
  "About Us",
  "Resources",
  "Contact",
];

export default function LutechNavbar() {
   const [show, setShow] = useState(false);
   const [lastScroll, setLastScroll] = useState(0);
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       const currentScroll = window.scrollY;

       if (currentScroll > 100) {
         setShow(true);
       } else {
         setShow(false);
         setMenuOpen(false);
       }

       setLastScroll(currentScroll);
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScroll]);

   return (
     <div
       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-black ${
         show ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
       }`}
     >
       <div className="max-w-380 mx-auto px-6 py-2 flex items-center justify-between">
         {/* Logo */}
         <div className="flex items-center gap-2 cursor-pointer shrink-0">
           <img src="/lutech-medical/assets/lutech-white.png" alt="Lutech Logo" className="w-36 h-auto md:w-44 md:h-15 shrink-0" />
         </div>

         {/* Desktop Menu */}
         <nav className="hidden lg:flex items-center gap-8 text-base font-rubik">
           {navItems.map((item, i) => (
             <div
               key={i}
               className={`flex items-center gap-1 cursor-pointer ${i === 0 ? "font-bold text-gray-900" : ""}cursor-pointer hover:text-[#00769E] transition`}
             >
               {item}
               <ChevronDown size={18} className="mt-1"/>
             </div>
           ))}
         </nav>

         {/* Hamburger Button — mobile & tablet */}
         <button
           className="lg:hidden flex items-center justify-center w-11 h-11 text-white hover:text-[#00769E] transition"
           onClick={() => setMenuOpen((prev) => !prev)}
           aria-label={menuOpen ? "Close menu" : "Open menu"}
         >
           {menuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>

       {/* Mobile / Tablet Dropdown Menu */}
       <div
         className={`lg:hidden overflow-hidden transition-all duration-300 ${
           menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
         } bg-black`}
       >
         <nav className="flex flex-col px-6 pb-4 pt-2 gap-1 font-rubik">
           {navItems.map((item, i) => (
             <button
               key={i}
               onClick={() => setMenuOpen(false)}
               className={`flex items-center justify-between w-full min-h-[44px] px-2 py-3 text-left text-base text-white hover:text-[#00769E] transition border-b border-white/10 last:border-0 ${
                 i === 0 ? "font-bold" : ""
               }`}
             >
               {item}
               <ChevronDown size={18} />
             </button>
           ))}
         </nav>
       </div>
     </div>
   )
}