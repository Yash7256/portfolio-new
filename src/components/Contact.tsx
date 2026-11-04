"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const servicesOptions = [
  "Brand Identity",
  "Web Design",
  "Framer Development",
  "Motion Design",
  "Full Package",
];

const budgetOptions = [
  "Under $5k",
  "$5k — $10k",
  "$10k — $25k",
  "$25k+",
];

export default function Contact({ standalone = false }: { standalone?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("Web Design");
  const [selectedBudget, setSelectedBudget] = useState("$5k — $10k");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Direct Inquiry</span>
          <span className="text-neutral-500 font-sans">お問い合わせ</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — CONTACT)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">24/7 Remote</span>
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <h1 className="font-sans text-[clamp(2.8rem,8vw,7.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
          Call Me
        </h1>
        <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>
      </div>

      {/* Main Grid: Direct Channels (Left) + Interactive Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-12 items-start">
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 block mb-2">
              DIRECT EMAIL
            </span>
            <a
              href="mailto:sayhi@akihiko.com"
              className="font-sans text-[22px] md:text-[28px] font-semibold text-white hover:text-neutral-300 transition-colors underline decoration-white/20 underline-offset-8"
            >
              sayhi@akihiko.com
            </a>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 block mb-2">
              TELEPHONE / WHATSAPP
            </span>
            <a
              href="tel:+1345664565"
              className="font-sans text-[20px] md:text-[24px] font-medium text-neutral-200 hover:text-white transition-colors"
            >
              +1 34566 4565
            </a>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 block mb-2">
              STUDIO LOCATION
            </span>
            <p className="font-sans text-[15px] text-neutral-300 leading-relaxed">
              Office: Shibuya-ku, Tokyo, Japan.<br />
              Working with global clients across Tokyo (JST), London (GMT), and New York (EST).
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              SOCIAL CHANNELS
            </span>
            <div className="flex flex-wrap gap-4 text-[13px] font-sans text-neutral-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram ↗</a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dribbble ↗</a>
              <a href="https://framer.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Framer ↗</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter ↗</a>
            </div>
          </div>
        </div>

        {/* Right Column: High Craft Form */}
        <div className="lg:col-span-7 bg-neutral-900/40 border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-2xl">
          {status === "success" ? (
            <div className="py-16 text-center select-none animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                ✓
              </div>
              <h3 className="font-sans text-[24px] font-semibold text-white mb-2">
                Message Received.
              </h3>
              <p className="font-sans text-[14px] text-neutral-400 max-w-sm mx-auto">
                Thank you for reaching out. We will review your project details and respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              >
                [ SEND ANOTHER MESSAGE ]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Kenji Sato"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 font-sans text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 font-sans text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-2">
                  Select Service
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesOptions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedService(s)}
                      className={`px-3 py-1.5 rounded-lg text-[12px] font-sans transition-all cursor-pointer ${
                        selectedService === s
                          ? "bg-white text-black font-semibold"
                          : "bg-neutral-950 border border-white/10 text-neutral-400 hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-2">
                  Estimated Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={`px-3 py-1.5 rounded-lg text-[12px] font-sans transition-all cursor-pointer ${
                        selectedBudget === b
                          ? "bg-white text-black font-semibold"
                          : "bg-neutral-950 border border-white/10 text-neutral-400 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-2">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your brand, goals, target launch date, and scope..."
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl p-4 font-sans text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-full bg-white text-black font-sans font-semibold text-[14px] hover:bg-neutral-200 transition-colors shadow-lg disabled:opacity-50 cursor-pointer"
              >
                {status === "sending" ? "Transmitting..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
