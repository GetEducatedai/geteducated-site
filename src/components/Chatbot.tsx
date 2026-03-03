"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  text: string;
};

const faq: Record<string, string> = {
  "what is geteducated":
    "GetEducated.ai is the anti-university for AI creators. We're a community, academy, and launchpad for people who want to learn AI skills, build real income, and lead the future — without the debt, the degree, or the 4-year detour.",
  "how much":
    "We have two tiers: Members at $97/mo and Architects at $199/mo (billed quarterly). Annual plans save you 20%. We also have a Founding Member program — free for the first 50 people.",
  "what courses":
    "We offer four core courses: AI Consultant Blueprint (free), AI Content Engine, AI Automation Mastery, and Build Your AI Brand. All courses are built by practitioners, not professors.",
  "how do i join":
    "Head to go.geteducated.ai to join the community. Pick your tier, and you'll get instant access to the community, all courses, templates, and upcoming events.",
  cost: "Members: $97/mo, Architects: $199/mo (quarterly billing). Save 20% with annual billing. 7-day money-back guarantee.",
  courses:
    "AI Consultant Blueprint (free), AI Content Engine, AI Automation Mastery, and Build Your AI Brand.",
  join: "Visit go.geteducated.ai to join instantly.",
  events:
    "We host RE:WIRE in Dubai and Visionaries in Paradise in Tulum. Plus regular virtual events for all members.",
  community:
    "A curated network of AI builders, creators, and entrepreneurs. Weekly calls, collabs, and real connections.",
};

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, answer] of Object.entries(faq)) {
    if (lower.includes(key)) return answer;
  }
  return "Great question. For anything specific, reach out to us at go.geteducated.ai or explore the site — most answers are covered in our sections above.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey — welcome to GetEducated.ai. Ask me anything about the community, courses, pricing, or events.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: findAnswer(userMsg) },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating button — black circle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-ink text-white rounded-full shadow-lg shadow-ink/20 flex items-center justify-center hover:opacity-90 transition hover:scale-105 active:scale-95"
        aria-label="Open chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
      </button>

      {/* Chat modal — clean white */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white border border-border rounded-[20px] shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center">
                <span className="text-ink text-sm font-bold font-display">G</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink font-display">GetEducated.ai</p>
                <p className="text-xs text-muted font-body">Ask us anything</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed font-body ${
                      msg.role === "user"
                        ? "bg-ink text-white rounded-br-md"
                        : "bg-cream text-ink rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={send} className="p-3 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-cream border border-border rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-violet/50 transition font-body"
                />
                <button
                  type="submit"
                  className="bg-ink text-white w-10 h-10 rounded-xl flex items-center justify-center hover:opacity-90 transition flex-shrink-0"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
