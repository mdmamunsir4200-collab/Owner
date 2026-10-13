import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/85 backdrop-blur-md border-b border-[#1F293D]/60 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF] rounded-md"
          >
            <span className="font-display text-xl font-bold tracking-tight text-[#F5F7FA] group-hover:text-white transition-colors">
              ASRAFUL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#35D6E8] group-hover:scale-125 transition-transform" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A7B0C0]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors hover:text-[#F5F7FA] ${
                    isActive ? 'text-[#35D6E8] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#35D6E8] bg-[#0D1220] hover:bg-[#151D33] border border-[#233152] hover:border-[#35D6E8]/60 rounded-lg transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-95 rounded-lg transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D6E8]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#A7B0C0] hover:text-[#F5F7FA] hover:bg-[#111827] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF]"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D1220]/95 backdrop-blur-xl border-b border-[#1F293D] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#A7B0C0]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#35D6E8] bg-[#111827] font-semibold'
                      : 'hover:text-[#F5F7FA] hover:bg-[#111827]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-[#1F293D] flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-center text-sm font-medium text-[#35D6E8] bg-[#111827] border border-[#233152] rounded-lg shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href="/cv.pdf"
                download="MD_Asraful_Islam_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-2 text-center text-xs font-mono text-[#A7B0C0] hover:text-white"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] rounded-lg shadow-md transition-opacity hover:opacity-90 active:scale-98"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
