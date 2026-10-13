import React, { useState, useEffect } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AiIntroBanner } from './components/AiIntroBanner';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ChatbotButton } from './components/chat/ChatbotButton';
import { AsrafulAIChat } from './components/chat/AsrafulAIChat';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleOpenChatWithQuery = (query: string) => {
    setChatInitialQuery(query);
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    if (isChatOpen) {
      setIsChatOpen(false);
      setChatInitialQuery('');
    } else {
      setIsChatOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F5F7FA] relative selection:bg-[#4F8CFF]/30 selection:text-white">
      {/* Subtle Background Glow & Grid */}
      <BackgroundGlow />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        
        {/* Extra Feature: Meet My AI Assistant Banner */}
        <AiIntroBanner onOpenChatWithQuery={handleOpenChatWithQuery} />

        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact onOpenResume={handleOpenResume} />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal — global, triggered from Navbar / Hero / Contact */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />

      {/* Floating AI Assistant Trigger Button */}
      <ChatbotButton
        isOpen={isChatOpen}
        onToggle={handleToggleChat}
      />

      {/* Asraful AI Chatbot Panel */}
      <AsrafulAIChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialQuery={chatInitialQuery}
      />
    </div>
  );
}
