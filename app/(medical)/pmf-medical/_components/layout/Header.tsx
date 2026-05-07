"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Globe, Phone, Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <Link href={href} className="text-text-dark font-medium 2xl:text-[16px] text-[14px] hover:text-primary transition-colors">
    {children}
  </Link>
);

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white fixed top-0 left-0 z-[100] w-full border-b border-gray-100 shadow-sm transition-all duration-300 transform ${(isVisible || isMenuOpen) ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
      <Container>
        <div className="flex justify-between items-center h-[70px] md:h-[90px]">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <img src={`/pmf-medical/logo.png`} className="w-32 md:w-50" alt="Logo" />
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavItem href="/products">Products</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/application-fields">Application fields</NavItem>
            <NavItem href="/knowledge">Knowledge</NavItem>
            <NavItem href="/company">Company</NavItem>
            <NavItem href="/press">Press</NavItem>
            <NavItem href="/career">Career</NavItem>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            <button className="flex items-center gap-2 bg-primary text-white px-[22px] py-1.5 rounded-full text-[14px] font-medium hover:bg-opacity-90 transition-all">
              Search
              <Search size={18} />
            </button>

            <div className="h-6 w-[1px] bg-gray-300"></div>

            <div className="flex items-center space-x-3">
              <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Language">
                <Globe size={20} />
              </button>
              <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Contact">
                <Phone size={16} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-text-dark p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col h-[100vh] bg-white overflow-y-auto pt-28 pb-10 px-8">
          {/* Close button inside overlay (redundant but helpful) */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-8 p-2 text-text-dark"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col space-y-6">
            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Products</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Services</Link>
            <Link href="/application-fields" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Application fields</Link>
            <Link href="/knowledge" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Knowledge</Link>
            <Link href="/company" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Company</Link>
            <Link href="/press" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Press</Link>
            <Link href="/career" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-text-dark hover:text-primary transition-colors">Career</Link>
          </div>

          <div className="mt-10 pt-10 border-t border-gray-100 flex flex-col space-y-8">
            <button className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-md">
              Search
              <Search size={22} />
            </button>

            <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all">
                  <Globe size={28} />
                </button>
                <span className="text-xs font-bold text-text-dark uppercase tracking-wider">Language</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all">
                  <Phone size={24} />
                </button>
                <span className="text-xs font-bold text-text-dark uppercase tracking-wider">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
