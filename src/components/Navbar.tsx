import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#E8E8E1] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="brand-logo"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF35] inline-block ring-2 ring-[#111111]" />
          <span className="font-sans font-extrabold tracking-tighter text-lg sm:text-xl">
            Harsh<span className="text-[#666666] font-normal">_Disgn</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#B7FF35] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-cta-button"
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B7FF35] text-[#111111] border border-[#111111] text-[13px] font-semibold transition-all duration-200 hover:bg-[#a6f026] hover:shadow-[0_4px_16px_rgba(183,255,53,0.35)] active:scale-95 cursor-pointer"
          >
            <span>Let's Work</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#111111] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#F0F0EB] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FAFAF7] border-b border-[#E8E8E1] px-6 py-6 transition-all duration-300 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#111111] hover:text-[#B7FF35] hover:bg-[#111111] px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E8E8E1]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#111111] text-white font-medium hover:bg-[#222222]"
              >
                <span>Let's Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#B7FF35]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
