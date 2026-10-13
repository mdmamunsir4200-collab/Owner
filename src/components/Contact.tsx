import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  Phone,
  FileText,
  Download,
  Eye,
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { sendContactEmail } from '../services/contactService';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web',
    timeline: '',
    subject: '',
    message: '',
  });

  const projectTypes = [
    'Full-Stack Web',
    'Agentic AI / LLMs',
    'Mobile (Flutter)',
    'Backend & APIs',
    'DevOps / Cloud',
    'Security Audit',
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successInfo, setSuccessInfo] = useState<{ message: string; sentFrom?: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectProjectType = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const result = await sendContactEmail(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setSuccessInfo({
        message: result.message || 'Message delivered successfully to Asraful!',
        sentFrom: result.sentFrom,
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web',
        timeline: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(
        err?.message ||
          "Couldn't send your message right now. Please try again later or email directly."
      );
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#1F293D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] tracking-widest uppercase mb-3">
            <span>Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] font-display text-balance mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed">
            Have an idea, project, or opportunity? Reach out via direct email, phone call, or send a project inquiry.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Contact Methods & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-5 h-full">
            {/* Box 1: Direct Contact Card (Email & Phone) */}
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-[#1F293D] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#111827] border border-[#1F293D] text-[#35D6E8]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F7FA]">Email Directly</h3>
                      <p className="text-[11px] text-[#A7B0C0]">Primary correspondence</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="p-1.5 text-[#A7B0C0] hover:text-[#35D6E8] hover:bg-[#111827] rounded-lg transition-colors border border-transparent hover:border-[#1F293D] flex items-center gap-1 text-[11px] font-mono"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-2.5 rounded-xl bg-[#080B14] border border-[#1F293D] text-xs font-mono text-[#E8EDF5] break-all flex items-center justify-between mb-3">
                  <span>{DEVELOPER_INFO.email}</span>
                  <a
                    href={`mailto:${DEVELOPER_INFO.email}`}
                    className="text-[10px] text-[#35D6E8] hover:underline font-sans ml-2"
                  >
                    Open Mail →
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp Row */}
              <div className="pt-3 border-t border-[#1F293D]/60">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-medium text-white">Direct Phone & WhatsApp</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyPhoneToClipboard}
                    className="text-[10px] font-mono text-[#A7B0C0] hover:text-emerald-400"
                  >
                    {copiedPhone ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#080B14] border border-[#1F293D] text-xs font-mono">
                  <span className="text-emerald-400 font-semibold">{DEVELOPER_INFO.phone}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${DEVELOPER_INFO.phone}`}
                      className="px-2 py-0.5 rounded bg-[#111827] hover:bg-[#182238] border border-[#1F293D] text-[#35D6E8] text-[10px]"
                    >
                      Call
                    </a>
                    <a
                      href="https://wa.me/8801626676752"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-0.5 rounded bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-[10px]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Resume & Availability Card */}
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-[#1F293D] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#111827] border border-[#1F293D] text-[#4F8CFF]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F7FA]">Curriculum Vitae</h3>
                      <p className="text-[11px] text-[#A7B0C0]">Verified Developer Resume</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    A4 PDF
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-[#2D3F66] hover:border-[#35D6E8]/60 text-xs font-medium text-[#35D6E8] transition-all active:scale-95 shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>

                  <a
                    href="/cv.pdf"
                    download="MD_Asraful_Islam_CV.pdf"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-95 text-xs font-semibold text-white transition-opacity active:scale-95 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1F293D]/60 mt-3 flex items-center justify-between text-xs text-[#A7B0C0]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#35D6E8]" />
                  <span>{DEVELOPER_INFO.location} 🇧🇩 (Global Remote)</span>
                </div>
                <span className="text-emerald-400 font-mono text-[10px]">Ready to Join</span>
              </div>
            </div>

            {/* Box 3: Social Channels / Professional Profiles */}
            <div className="p-6 rounded-2xl bg-[#0D1220] border border-[#1F293D] flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-[#F5F7FA]">Professional Profiles</h3>
                <span className="text-[10px] font-mono text-[#35D6E8]">Verified Links</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] hover:border-[#4F8CFF]/50 text-xs font-medium text-[#E8EDF5] transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-white shrink-0" />
                  <span className="truncate">GitHub</span>
                </a>

                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] hover:border-[#35D6E8]/50 text-xs font-medium text-[#E8EDF5] transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 text-[#35D6E8] shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </a>

                <a
                  href={DEVELOPER_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] hover:border-sky-400/50 text-xs font-medium text-[#E8EDF5] transition-all hover:-translate-y-0.5"
                >
                  <span className="text-sm font-bold text-sky-400 shrink-0">𝕏</span>
                  <span className="truncate">X (Twitter)</span>
                </a>

                <a
                  href={DEVELOPER_INFO.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] hover:border-cyan-400/50 text-xs font-medium text-[#E8EDF5] transition-all hover:-translate-y-0.5"
                >
                  <span className="text-xs font-bold text-cyan-400 shrink-0">K</span>
                  <span className="truncate">Kaggle</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0D1220] border border-[#1F293D] relative shadow-xl flex-1 flex flex-col justify-between h-full">
              {submitted ? (
                <div className="py-12 flex-1 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Dispatched to Inbox!
                  </h3>
                  <p className="text-sm text-[#A7B0C0] max-w-md leading-relaxed">
                    {successInfo?.message || 'Thank you for reaching out! Your inquiry has been emailed to Asraful via rotating Nodemailer relay.'}
                  </p>
                  <div className="p-3 rounded-xl bg-[#080B14] border border-[#1F293D] text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Delivered via serverless relay · Typically reply in &lt; 24h</span>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSuccessInfo(null);
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-medium text-[#35D6E8] bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] hover:border-[#35D6E8]/40 rounded-xl transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs font-mono font-medium text-[#A7B0C0]">
                          Your Name <span className="text-[#35D6E8]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#080B14] border border-[#1F293D] focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] text-sm text-[#F5F7FA] placeholder-[#4A5568] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-mono font-medium text-[#A7B0C0]">
                          Email Address <span className="text-[#35D6E8]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#080B14] border border-[#1F293D] focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] text-sm text-[#F5F7FA] placeholder-[#4A5568] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Area of Interest / Domain Selector */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-medium text-[#A7B0C0]">
                        Project Domain / Service Needed
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleSelectProjectType(type)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                              formData.projectType === type
                                ? 'bg-[#182238] text-[#35D6E8] border-[#35D6E8]/40 shadow-sm'
                                : 'bg-[#080B14] text-[#A7B0C0] border-[#1F293D] hover:text-white hover:border-[#2D3F66]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject & Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="subject" className="block text-xs font-mono font-medium text-[#A7B0C0]">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry / Job Opportunity"
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#080B14] border border-[#1F293D] focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] text-sm text-[#F5F7FA] placeholder-[#4A5568] outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="timeline" className="block text-xs font-mono font-medium text-[#A7B0C0]">
                          Timeline / Role Scope
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-[#080B14] border border-[#1F293D] focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] text-sm text-[#F5F7FA] outline-none transition-colors"
                        >
                          <option value="" className="bg-[#080B14] text-[#A7B0C0]">
                            Flexible / Exploring Options
                          </option>
                          <option value="immediate" className="bg-[#080B14]">
                            Immediate Start (&lt; 1 month)
                          </option>
                          <option value="1-3-months" className="bg-[#080B14]">
                            1 – 3 Months Project
                          </option>
                          <option value="contract" className="bg-[#080B14]">
                            Full-time / Contract Hiring
                          </option>
                          <option value="consultation" className="bg-[#080B14]">
                            General Consultation
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-mono font-medium text-[#A7B0C0]">
                        Your Message <span className="text-[#35D6E8]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project vision, requirements, technical preferences, or timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-[#080B14] border border-[#1F293D] focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] text-sm text-[#F5F7FA] placeholder-[#4A5568] outline-none transition-colors resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5 animate-in fade-in">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="font-medium">{errorMessage}</p>
                          <p className="text-[11px] text-rose-300/80">
                            You can also email directly at{' '}
                            <a
                              href={`mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
                                formData.subject || 'Portfolio Inquiry'
                              )}&body=${encodeURIComponent(formData.message)}`}
                              className="underline hover:text-white font-mono"
                            >
                              {DEVELOPER_INFO.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button & SLA / Security Badges */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-95 rounded-xl shadow-lg shadow-[#4F8CFF]/20 transition-all duration-200 active:scale-98 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D6E8]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#A7B0C0] px-1 pt-1 border-t border-[#1F293D]/50 gap-2">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Response Time: &lt; 24h</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-[#A7B0C0]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#35D6E8]" />
                        <span>Confidentiality Respected</span>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
