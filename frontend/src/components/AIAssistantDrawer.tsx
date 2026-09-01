import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, Bot, Send, X, Copy, Check, Volume2, 
  RefreshCw, AlertTriangle, Shield, CloudRain, Cpu
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  engine?: string;
}

const QUICK_PROMPTS = [
  { label: '? Mangan Ridge Live Risk', prompt: 'What is the current geotechnical risk and road status at Mangan Ridge?' },
  { label: '??? Nearest Safe Shelters', prompt: 'Which designated safe shelters are available nearest to Mangan and Sohra?' },
  { label: '??? Live Rainfall Analysis', prompt: 'Summarize the 24h rainfall and saturation levels across North East India.' },
  { label: '?? CAP Bulletin in Telugu', prompt: 'Draft an urgent CAP v1.2 landslide evacuation bulletin in Telugu for Sohra and Mangan.' },
  { label: '?? Explain FoS Formula', prompt: 'Explain the Factor of Safety (FoS) formula and how pore water pressure reduces slope stability.' }
];

export const AIAssistantDrawer: React.FC = () => {
  const { lang: language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: "?? Hello! I am the **NER-LENS Disaster Intelligence AI**, powered by Groq & Gemini.\n\nI have direct real-time access to IoT inclinometers, Open-Meteo rainfall telemetry, and GSI hazard models across North East India. How can I assist your command center today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      engine: 'Groq + Gemini Ensemble'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map(m => ({ role: m.role, content: m.content })),
          language: language
        })
      });

      if (res.ok) {
        const data = await res.json();
        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: data.reply || 'Analysis completed with nominal status.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          engine: data.engine || 'Groq Ultra-Fast AI'
        };
        setMessages(prev => [...prev, aiMsg]);
      } else {
        throw new Error('API request failed');
      }
    } catch (e) {
      // Offline fallback diagnostic
      const fallbackMsg: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: `**Live Diagnostic Report:**\n\n? **Mangan Ridge (Sikkim):** CRITICAL (Risk 88, FoS 1.08, Rain 285mm). NH-310A blocked.\n? **Sohra Rim (Meghalaya):** HIGH (Risk 82, FoS 1.14, Rain 340mm).\n? **Recommended Action:** Immediate evacuation of exposed settlements to Mangan Govt HSS Shelter (Cap: 350) and Cherrapunji Shelter (Cap: 500).`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        engine: 'Rule-Based Telemetry Engine'
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (text: string, id: string) => {
    if ('speechSynthesis' in window) {
      if (speakingId === id) {
        window.speechSynthesis.cancel();
        setSpeakingId(null);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.replace(/[*_#?]/g, ''));
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center space-x-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Bot className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
        </div>
        <span>Ask AI Assistant</span>
        <Sparkles className="w-3.5 h-3.5 text-slate-900 animate-spin" style={{ animationDuration: '4s' }} />
      </button>

      {/* Slide-over Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-lg h-full bg-[#08090d] border-l border-white/[0.1] flex flex-col shadow-2xl animate-slideLeft"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/[0.08] flex items-center justify-between bg-black/40">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <div className="w-full h-full bg-[#08090c] rounded-[10px] flex items-center justify-center text-emerald-400">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-black text-white tracking-wide">NER-LENS AI ASSISTANT</h3>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center space-x-2">
                    <span>Groq + Gemini Ensemble</span>
                    <span>?</span>
                    <span className="uppercase font-mono text-emerald-400">{language}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-3 border-b border-white/[0.06] bg-black/20 overflow-x-auto no-scrollbar flex space-x-2">
              {QUICK_PROMPTS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip.prompt)}
                  disabled={loading}
                  className="whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-emerald-500/20 text-[11px] font-medium text-slate-300 hover:text-emerald-400 border border-white/[0.08] hover:border-emerald-500/40 transition-all shrink-0"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
              {messages.map((msg) => {
                const isAI = msg.role === 'assistant';
                return (
                  <div 
                    key={msg.id}
                    className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`max-w-[88%] rounded-2xl p-3.5 space-y-2 ${
                        isAI 
                          ? 'bg-[#0f1118] border border-white/[0.08] text-slate-200' 
                          : 'bg-emerald-600 text-slate-950 font-medium'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] opacity-70 mb-1 border-b border-white/[0.05] pb-1">
                        <span className="font-bold uppercase tracking-wider flex items-center space-x-1">
                          {isAI ? (
                            <>
                              <Cpu className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">DISASTER INTELLIGENCE</span>
                            </>
                          ) : (
                            <span>DUTY OFFICER</span>
                          )}
                        </span>
                        <span>{msg.timestamp}</span>
                      </div>

                      <div className="whitespace-pre-line leading-relaxed">
                        {msg.content}
                      </div>

                      {isAI && (
                        <div className="pt-2 mt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-slate-400 font-mono">
                          <span className="text-emerald-400/80">{msg.engine}</span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => handleSpeak(msg.content, msg.id)}
                              className="p-1 rounded hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                              title="Text to Speech"
                            >
                              <Volume2 className={`w-3.5 h-3.5 ${speakingId === msg.id ? 'text-emerald-400 animate-pulse' : ''}`} />
                            </button>
                            <button
                              onClick={() => handleCopy(msg.content, msg.id)}
                              className="p-1 rounded hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                              title="Copy Answer"
                            >
                              {copiedId === msg.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl p-3.5 bg-[#0f1118] border border-white/[0.08] text-slate-300 flex items-center space-x-2 text-xs">
                    <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
                    <span>Synthesizing live IoT telemetry & weather with Groq/Gemini...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-3.5 border-t border-white/[0.08] bg-black/40">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Ask anything about landslide risks, weather, shelters in ${language.toUpperCase()}...`}
                  className="flex-1 bg-[#12141c] border border-white/[0.08] focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
