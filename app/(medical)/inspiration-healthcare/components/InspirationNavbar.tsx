"use client"

import { useEffect, useState } from "react"
import { Search, Globe, Phone, Menu, X } from "lucide-react"

export default function InspirationNavbar() {
  const [show, setShow] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (!show) setMenuOpen(false)
  }, [show])

  const navLinks = ["Home", "Company", "Products", "News", "Contact us", "Anesthesia Machines n2"]

  return (
    <div
      className={`fixed bg-white top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Main bar */}
      <div className="mx-auto max-w-380 h-[64px] flex items-center justify-between px-4 lg:px-6">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/inspiration-healthcare/assets/inspiration-logo.png"
            alt="Inspiration Healthcare Logo"
            className="h-8 lg:h-10"
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-sm xl:text-base text-gray-700 overflow-hidden">
          {navLinks.map((link, i) => (
            <span
              key={link}
              className={`cursor-pointer hover:text-gray-500 whitespace-nowrap ${i === 0 ? "font-medium text-black" : ""}`}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 lg:gap-4 shrink-0">
          <span className="hidden md:block text-sm lg:text-base text-black cursor-pointer hover:text-gray-500">EN</span>
          <Globe size={26} color="black" className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300" />
          <Phone size={26} color="black" className="bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300" />

          <div className="hidden sm:flex cursor-pointer items-center bg-black text-white rounded-full px-3 lg:px-4 py-1 gap-2">
            <span className="text-sm lg:text-base">Search</span>
            <Search size={13} />
          </div>

          {/* Hamburger — mobile/tablet only */}
          <button
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />}
          </button>
        </div>
      </div>

      {/* Mobile/tablet dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-white text-sm text-gray-700">
          {navLinks.map((link, i) => (
            <span
              key={link}
              className={`py-2 px-2 rounded-md cursor-pointer hover:bg-gray-50 hover:text-gray-900 ${
                i === 0 ? "font-medium text-black" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </span>
          ))}
          {/* Search row in mobile menu */}
          <div className="mt-3 flex items-center bg-black text-white rounded-full px-4 py-2 gap-2 w-fit">
            <span>Search</span>
            <Search size={13} />
          </div>
        </nav>
      </div>
    </div>
  )
}
