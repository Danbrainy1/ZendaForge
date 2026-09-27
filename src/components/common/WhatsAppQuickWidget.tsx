import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Sparkles, Send, GraduationCap, UtensilsCrossed, Hotel, Building2, Zap } from "lucide-react";

interface QuickPrompt {
  id: string;
  icon: React.ElementType;
  label: string;
  message: string;
}

const quickPrompts: QuickPrompt[] = [
  {
    id: "school",
    icon: GraduationCap,
    label: "School / Academy Portal",
    message: "Hello Zendaforge, I need a website and student admissions portal for my school.",
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    label: "Restaurant / Food Ordering",
    message: "Hello Zendaforge, I need a website with dynamic digital food menu and online ordering for my restaurant.",
  },
  {
    id: "hotel",
    icon: Hotel,
    label: "Hotel & Suite Booking",
    message: "Hello Zendaforge, I need a luxury hospitality website with room booking & suite showcase.",
  },
  {
    id: "business",
    icon: Building2,
    label: "Corporate Business Website",
    message: "Hello Zendaforge, I would like to build a modern corporate business website for my company.",
  },
  {
    id: "fast",
    icon: Zap,
    label: "Fast Launch (5-7 Days)",
    message: "Hello Zendaforge, I need a fast-turnaround website delivered within 5-7 business days.",
  },
];

export const WhatsAppQuickWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const handleSendPrompt = (text: string) => {
    const url = `https://wa.me/2348142720498?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Expanded Quick Launcher Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm rounded-3xl bg-white dark:bg-zinc-950 border-2 border-emerald-500/40 dark:border-emerald-500/60 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-600 dark:bg-emerald-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    <MessageSquare size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-emerald-950" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider">Zendaforge</div>
                  <div className="text-[10px] text-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                    <span>Online & Ready to Chat</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-emerald-700/50 text-emerald-100 transition-colors"
                aria-label="Close WhatsApp widget"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content body */}
            <div className="p-4 space-y-3 bg-slate-50/50 dark:bg-zinc-900/50">
              <p className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                👋 Hi there! What type of website would you like to build? Tap any quick option:
              </p>

              {/* Quick Prompts */}
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {quickPrompts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSendPrompt(item.message)}
                      className="w-full p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 text-left flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        <Icon size={14} className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span>{item.label}</span>
                      </div>
                      <Send size={12} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                    </button>
                  );
                })}
              </div>

              {/* Custom message input */}
              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex gap-1.5">
                <input
                  type="text"
                  placeholder="Type a custom question..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && customMsg.trim()) {
                      handleSendPrompt(customMsg);
                    }
                  }}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
                <button
                  onClick={() => customMsg.trim() && handleSendPrompt(customMsg)}
                  disabled={!customMsg.trim()}
                  className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white transition-colors"
                >
                  <Send size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-[0_10px_25px_rgba(16,185,129,0.4)] border-2 border-white/20 transition-all"
        aria-label="Open WhatsApp Quick Chat"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare size={18} className="fill-white" />
        <span className="hidden sm:inline">Chat with Us</span>
      </motion.button>
    </div>
  );
};
