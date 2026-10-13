import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ArrowUpRight,
  ExternalLink,
  Briefcase,
  Compass,
  ChevronDown,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { chatService, ChatMessage, ChatMode } from '../../services/chatService';
import { NeuralIndicator } from './NeuralIndicator';

interface AsrafulAIChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const AsrafulAIChat: React.FC<AsrafulAIChatProps> = ({
  isOpen,
  onClose,
  initialQuery,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<ChatMode>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Welcome Message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome-msg',
          sender: 'assistant',
          text: "Hi! I'm Asraful AI 👋\n\nI can introduce you to MD Asraful Islam, explain his skills and projects, and help you find the information you're looking for.",
          timestamp: new Date(),
          suggestions: [
            'Who is Asraful?',
            'What are his skills?',
            'Show me his projects',
            'What can he build?',
            'How can I contact him?',
            'Why should I work with him?',
          ],
        },
      ]);
    }
  }, []);

  // Handle Initial Query if passed from external banner/button
  useEffect(() => {
    if (isOpen && initialQuery) {
      handleSendMessage(initialQuery);
    }
  }, [isOpen, initialQuery]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    setInputText('');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await chatService.sendMessage(text, [...messages, userMessage], activeMode);

      const aiMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date(),
        suggestions: response.suggestions,
        actions: response.actions,
        projectCards: response.projectCards,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: "AI assistant is temporarily unavailable. You can still explore my portfolio or contact me directly.",
        timestamp: new Date(),
        actions: [
          { label: 'View Projects →', actionType: 'navigate', target: '#projects' },
          { label: 'Contact Directly →', actionType: 'navigate', target: '#contact' },
        ],
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleActionClick = (action: { label: string; actionType: string; target: string }) => {
    if (action.actionType === 'navigate') {
      const targetElement = document.querySelector(action.target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // On mobile, close chatbot so user sees the section
        if (window.innerWidth < 768) {
          onClose();
        }
      }
    } else if (action.actionType === 'custom_prompt') {
      handleSendMessage(action.target);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: "Hi! I'm Asraful AI 👋\n\nI can introduce you to MD Asraful Islam, explain his skills and projects, and help you find the information you're looking for.",
        timestamp: new Date(),
        suggestions: [
          'Who is Asraful?',
          'What are his skills?',
          'Show me his projects',
          'What can he build?',
          'How can I contact him?',
          'Why should I work with him?',
        ],
      },
    ]);
    setActiveMode('general');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[420px] h-[calc(100dvh-48px)] sm:h-[620px] max-h-[700px] flex flex-col rounded-2xl bg-[#0D1220]/95 backdrop-blur-xl border border-[#233152] shadow-2xl shadow-black/60 overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-200"
      role="dialog"
      aria-label="Asraful AI Chatbot"
    >
      {/* Glow highlight along the top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4F8CFF] via-[#35D6E8] to-[#8B5CF6]" />

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080B14]/80 border-b border-[#1F293D]/80">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4F8CFF]/20 to-[#35D6E8]/20 border border-[#35D6E8]/40 flex items-center justify-center text-[#35D6E8]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080B14]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-sm text-[#F5F7FA] tracking-tight">
                Asraful AI
              </h3>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#4F8CFF]/15 text-[#35D6E8] rounded border border-[#35D6E8]/20">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-[#A7B0C0] leading-tight">
              Your AI guide to Asraful's work
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Reset Conversation */}
          <button
            onClick={handleResetChat}
            className="p-1.5 text-[#A7B0C0] hover:text-[#F5F7FA] hover:bg-[#1A2338] rounded-lg transition-colors text-xs"
            title="Reset conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Close Chatbot */}
          <button
            onClick={onClose}
            className="p-1.5 text-[#A7B0C0] hover:text-white hover:bg-[#1A2338] rounded-lg transition-colors"
            title="Close chatbot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mode Bar (Discovery & Hiring Modes) */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#090D18] border-b border-[#1F293D]/60 text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setActiveMode('project_discovery');
              handleSendMessage('Find the right project');
            }}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded transition-colors ${
              activeMode === 'project_discovery'
                ? 'bg-[#18233C] text-[#35D6E8] font-semibold'
                : 'text-[#A7B0C0] hover:text-white'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span>Discover Projects</span>
          </button>

          <span className="text-[#1F293D]">|</span>

          <button
            onClick={() => {
              setActiveMode('hiring');
              handleSendMessage("I'm looking for a developer");
            }}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded transition-colors ${
              activeMode === 'hiring'
                ? 'bg-[#18233C] text-[#4F8CFF] font-semibold'
                : 'text-[#A7B0C0] hover:text-white'
            }`}
          >
            <Briefcase className="w-3 h-3" />
            <span>Hiring Mode</span>
          </button>
        </div>

        <span className="text-[#717E94] text-[10px] hidden sm:inline">Active</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
        {messages.map((message) => {
          const isUser = message.sender === 'user';
          return (
            <div
              key={message.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
            >
              <div
                className={`flex items-start gap-2.5 max-w-[88%] ${
                  isUser ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Sender Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                    isUser
                      ? 'bg-[#4F8CFF] text-white'
                      : 'bg-[#151D33] text-[#35D6E8] border border-[#233152]'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    isUser
                      ? 'bg-gradient-to-r from-[#4F8CFF] to-[#3B82F6] text-white rounded-tr-none shadow-md'
                      : 'bg-[#111827] text-[#E8EDF5] border border-[#1F293D] rounded-tl-none shadow-sm'
                  }`}
                >
                  {message.text}

                  {/* Render In-Chat Project Cards if present */}
                  {message.projectCards && message.projectCards.length > 0 && (
                    <div className="mt-3 space-y-2 pt-2 border-t border-[#1F293D]">
                      {message.projectCards.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-2.5 rounded-xl bg-[#090D18] border border-[#1F293D] hover:border-[#35D6E8]/40 transition-colors"
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono text-[#35D6E8] mb-1">
                            <span>{proj.category}</span>
                          </div>
                          <p className="font-semibold text-xs text-white">
                            {proj.title}
                          </p>
                          <p className="text-[11px] text-[#A7B0C0] line-clamp-2 mt-0.5">
                            {proj.description}
                          </p>
                          <div className="flex items-center gap-1.5 flex-wrap mt-1.5">
                            {proj.technologies.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#111827] text-[#A7B0C0] border border-[#1F293D]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Navigation Buttons */}
                  {message.actions && message.actions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#1F293D] flex flex-wrap gap-2">
                      {message.actions.map((act, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionClick(act)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-[#35D6E8] bg-[#090D18] hover:bg-[#151D33] border border-[#35D6E8]/30 hover:border-[#35D6E8] transition-all"
                        >
                          <span>{act.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Contextual Suggestions Chips */}
              {!isUser && message.suggestions && message.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pl-9 pt-1 max-w-[95%]">
                  {message.suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSendMessage(suggestion)}
                      disabled={isLoading}
                      className="px-2.5 py-1 text-[11px] text-[#A7B0C0] hover:text-white bg-[#090D18] hover:bg-[#151D33] border border-[#1F293D] hover:border-[#4F8CFF]/50 rounded-lg transition-all text-left"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Neural Network Processing Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#151D33] text-[#35D6E8] border border-[#233152] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <NeuralIndicator />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form & Footer */}
      <div className="p-3 bg-[#080B14]/90 border-t border-[#1F293D]">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about skills, projects, capabilities..."
            disabled={isLoading}
            className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-[#0D1220] border border-[#1F293D] focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] text-xs sm:text-sm text-[#F5F7FA] placeholder-[#4A5568] outline-none transition-colors"
          />

          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isLoading}
            className="absolute right-1.5 p-1.5 text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-90 disabled:opacity-30 rounded-lg transition-opacity"
            title="Send query"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Privacy Note */}
        <p className="text-[10px] text-[#717E94] text-center mt-2 font-mono">
          AI responses are generated from Asraful's portfolio information.
        </p>
      </div>
    </div>
  );
};
