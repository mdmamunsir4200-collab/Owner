import React, { useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  CheckCircle2,
  Calendar,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A0E1A] border border-[#1F293D] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#E8EDF5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0D1220] border-b border-[#1F293D] shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-[#35D6E8]">
            <FileText className="w-4 h-4 text-[#35D6E8]" />
            <span className="font-semibold text-white">Curriculum Vitae</span>
            <span className="hidden sm:inline text-[#A7B0C0]">— MD Asraful Islam</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Button */}
            <a
              href="/cv.pdf"
              download="MD_Asraful_Islam_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] text-white text-xs font-medium hover:opacity-95 transition-opacity shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open Raw PDF */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] text-[#A7B0C0] hover:text-white text-xs font-mono transition-colors"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Raw PDF</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] text-[#A7B0C0] hover:text-white text-xs font-mono transition-colors"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A7B0C0] hover:text-white hover:bg-[#111827] border border-transparent hover:border-[#1F293D] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-7 bg-[#080B14]">
          {/* Header */}
          <div className="border-b border-[#1F293D] pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              MD ASRAFUL ISLAM
            </h1>
            <p className="text-sm sm:text-base font-medium text-[#35D6E8] mt-1">
              Full-Stack Web Developer | Mobile & ML/DL (Secondary)
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#A7B0C0] mt-3 pt-3 border-t border-[#1F293D]/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Bangladesh</span>
              </span>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#35D6E8] transition-colors text-white"
              >
                <Mail className="w-3.5 h-3.5 text-[#35D6E8]" />
                <span>{DEVELOPER_INFO.email}</span>
              </a>
              <a
                href={`tel:${DEVELOPER_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-white"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{DEVELOPER_INFO.phone} (+880 1626676752)</span>
              </a>
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>github.com/asraful808088</span>
              </a>
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#35D6E8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#4F8CFF]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] uppercase tracking-wider mb-2 font-bold">
              <span>// PROFILE</span>
            </div>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Dedicated Full-Stack Web Developer, self-taught and highly motivated, with a strong foundation across modern frontend and backend technologies. Builds fast, adapts quickly, and ships working products. Carries additional working skills in Mobile Development and Machine Learning / Deep Learning as secondary strengths, offering flexible support beyond core web work when a project needs it. Actively seeking a full-time role, internship, or freelance opportunity to apply this dedication immediately.
            </p>
          </div>

          {/* Core Skills Section */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4F8CFF] uppercase tracking-wider mb-3 font-bold">
              <span>// CORE SKILLS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D]">
                <span className="font-semibold text-white block mb-1 text-[#35D6E8]">Frontend & Frameworks</span>
                <p className="text-[#A7B0C0] leading-relaxed">
                  HTML5, CSS3, SCSS, JavaScript (ES6+), Tailwind CSS, Bootstrap, React.js, Next.js, Angular, Vue.js, Nuxt.js, Redux
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D]">
                <span className="font-semibold text-white block mb-1 text-[#4F8CFF]">Backend & Languages</span>
                <p className="text-[#A7B0C0] leading-relaxed">
                  Node.js (Express, Raw Node), Django, FastAPI, Gin (Go), Nest.js, .NET, Laravel, JavaScript, TypeScript, Python, Go, Dart, Java, C#
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D]">
                <span className="font-semibold text-white block mb-1 text-emerald-400">Databases & Cloud Services</span>
                <p className="text-[#A7B0C0] leading-relaxed">
                  PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Firebase, Cloudinary, Neon, Upstash, Vercel, Render
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D]">
                <span className="font-semibold text-white block mb-1 text-fuchsia-400">Mobile, AI & Real-Time</span>
                <p className="text-[#A7B0C0] leading-relaxed">
                  Flutter (Provider, BLoC, Rx-Dart), Java (Android), TensorFlow, Scikit-learn, Pandas, NumPy, WebSocket/Socket.IO, WebRTC, Claude, ChatGPT, DeepSeek, Google AI Studio, Ollama
                </p>
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#fbbf24] uppercase tracking-wider mb-3 font-bold">
              <span>// FEATURED PROJECTS</span>
            </div>
            <div className="space-y-4">
              {/* Project 1: NexTrade */}
              <div className="p-4 rounded-xl bg-[#0D1220] border border-[#1F293D] flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-sm font-bold text-white">
                    NexTrade — Trading Web Application
                  </h4>
                  <a
                    href="https://nex-client-kappa.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#35D6E8] hover:underline font-mono"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-2.5">
                  Angular frontend with an Express.js backend, styled in SCSS, using Firebase for backend services and authentication. Deployed on Vercel.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#A7B0C0]">
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Angular</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Express.js</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">SCSS</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Firebase</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Vercel</span>
                </div>
              </div>

              {/* Project 2: Chain Hook Wallet */}
              <div className="p-4 rounded-xl bg-[#0D1220] border border-[#1F293D] flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-sm font-bold text-white">
                    Chain Hook Wallet — Web Application
                  </h4>
                  <a
                    href="https://chain-hook-client.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#35D6E8] hover:underline font-mono"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-2.5">
                  React.js frontend with a Django backend, styled with Tailwind CSS, backed by PostgreSQL. A money transfer and holding platform that uses a secure OAuth flow to provide a trusted payment service, connected as the payment layer behind Bigbiz's buy flow. Deployed on Vercel.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#A7B0C0]">
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">React.js</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Django</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Tailwind CSS</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">OAuth</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Vercel</span>
                </div>
              </div>

              {/* Project 3: Bigbiz */}
              <div className="p-4 rounded-xl bg-[#0D1220] border border-[#1F293D] flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-sm font-bold text-white">
                    Bigbiz — Social Commerce Platform
                  </h4>
                  <a
                    href="https://bigbiz-client.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#35D6E8] hover:underline font-mono"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-2.5">
                  A social commerce web app where sellers and buyers can post listings much like an e-commerce marketplace, with a built-in buy option that connects through to Chain Hook Wallet for secure payment processing. Next.js frontend (Tailwind CSS) with a Go backend, PostgreSQL (Neon) and Redis (Upstash) for data and caching, and Cloudinary for media. Next.js deployed on Vercel, Go server deployed on Render.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#A7B0C0]">
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Next.js</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Go (Gin)</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">PostgreSQL (Neon)</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Redis (Upstash)</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Cloudinary</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Vercel</span>
                  <span className="px-2 py-0.5 rounded bg-[#111827] border border-[#1F293D]">Render</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 font-bold">
              <span>// EDUCATION</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D] flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Honours (Bachelor's Degree)</span>
                  <span className="text-[#A7B0C0] text-[11px]">Final year examinations recently completed</span>
                </div>
                <span className="font-mono text-[#35D6E8] text-[11px]">2020 – 2021</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D] flex items-center justify-between">
                <span className="font-semibold text-white">Higher Secondary Certificate (HSC)</span>
                <span className="font-mono text-[#A7B0C0] text-[11px]">2020</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1220] border border-[#1F293D] flex items-center justify-between">
                <span className="font-semibold text-white">Secondary School Certificate (SSC)</span>
                <span className="font-mono text-[#A7B0C0] text-[11px]">2018</span>
              </div>
            </div>
          </div>

          {/* Currently Deepening & What I Bring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#0D1220] border border-[#1F293D]">
              <span className="text-xs font-mono text-[#35D6E8] uppercase tracking-wider block mb-2 font-bold">
                Currently Deepening
              </span>
              <ul className="space-y-1.5 text-[#CBD5E1]">
                <li>• <strong>React & Next.js:</strong> Advanced patterns, SSR/SSG, App Router</li>
                <li>• <strong>Flutter & Mobile:</strong> BLoC pattern, Rx-Dart, cross-platform apps</li>
                <li>• <strong>AI & Machine Learning:</strong> TensorFlow, Sklearn model integration</li>
                <li>• <strong>Real-Time Systems:</strong> Socket.IO, WebRTC collaborative features</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#0D1220] border border-[#1F293D]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold">
                What I Bring & Availability
              </span>
              <ul className="space-y-1.5 text-[#CBD5E1]">
                <li>• Strong, dependable full-stack web engineering focus</li>
                <li>• Fast adaptation to new tools under time pressure</li>
                <li>• Flexible secondary support in mobile and ML/DL</li>
                <li>• <strong>Available immediately</strong> for full-time roles, internships, or remote contracts</li>
              </ul>
            </div>
          </div>

          {/* Bottom Direct CTA */}
          <div className="pt-4 border-t border-[#1F293D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#A7B0C0]">
              Interested in working together or hiring? Reach out anytime!
            </span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] text-white font-medium hover:opacity-95 transition-opacity"
              >
                Email Directly
              </a>
              <a
                href="/cv.pdf"
                download="MD_Asraful_Islam_CV.pdf"
                className="px-4 py-2 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] text-[#35D6E8] font-mono transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
