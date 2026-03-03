"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const subjects = [
  "General Inquiry",
  "AI Consulting Services",
  "Partnership",
  "Events",
  "Press",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@geteducated.ai?subject=${encodeURIComponent(
      `[${form.subject}] from ${form.name}`
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section className="min-h-screen bg-cream py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white text-ink text-xs font-semibold px-4 py-2 rounded-full border border-border shadow-sm font-body">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
              Let&apos;s Talk
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-center text-ink mb-4">
            Get in{" "}
            <span className="font-serif italic font-bold">touch</span>
          </h1>
          <p className="text-muted text-center font-body mb-12 max-w-md mx-auto">
            Whether you&apos;re ready to build or just curious — we&apos;d love to hear from you.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[20px] p-12 text-center shadow-sm border border-border"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-xl font-bold text-ink mb-2">Message sent</h2>
              <p className="text-muted font-body text-sm">We&apos;ll get back to you at {form.email}</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-border space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-ink/60 mb-2 font-body uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 transition font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink/60 mb-2 font-body uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 transition font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink/60 mb-2 font-body uppercase tracking-wide">
                  Subject
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink/30 transition font-body appearance-none cursor-pointer"
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink/60 mb-2 font-body uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-ink/30 transition font-body resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink text-white text-sm font-semibold py-3.5 rounded-full hover:opacity-90 transition font-display btn-press"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-muted font-body">
                Or email us directly at{" "}
                <a href="mailto:info@geteducated.ai" className="text-ink hover:underline">
                  info@geteducated.ai
                </a>
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
