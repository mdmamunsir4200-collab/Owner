import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1F293D] bg-[#06080F] py-12 relative z-10 text-xs text-[#A7B0C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Developer Note */}
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-base text-[#F5F7FA] tracking-tight">
              ASRAFUL
            </span>
            <span className="text-[#1F293D]">|</span>
            <span>Full-Stack Web Developer & AI Developer</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-sm">
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#35D6E8] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={DEVELOPER_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors text-xs font-bold font-mono"
              aria-label="X (Twitter)"
            >
              𝕏
            </a>
            <a
              href={DEVELOPER_INFO.kaggle}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors text-xs font-bold font-mono"
              aria-label="Kaggle"
            >
              K
            </a>
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="hover:text-[#4F8CFF] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="text-[#1F293D]">·</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-[#A7B0C0]">
              <MapPin className="w-3 h-3 text-[#35D6E8]" />
              {DEVELOPER_INFO.location}
            </span>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-[#1F293D]/40 text-center">
          <p className="text-[#717E94] text-xs">
            © 2026 MD Asraful Islam. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};
