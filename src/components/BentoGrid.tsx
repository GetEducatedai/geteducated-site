"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=face",
];

const categories = ["AI", "Business", "Creativity", "Mindset", "Marketing"];

function AvatarCircle({
  src,
  size = 48,
  className = "",
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-full overflow-hidden border-2 border-white shadow-md ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Card 1: Community ─── */
function CommunityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0 }}
      className="group relative bg-white border border-border rounded-[20px] p-8 flex flex-col justify-between md:row-span-2 hover:shadow-lg hover:shadow-violet/5 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Floating avatar cluster */}
      <div className="relative h-40 mb-6">
        <div className="absolute top-2 left-4">
          <AvatarCircle src={avatars[0]} size={56} />
        </div>
        <div className="absolute top-6 left-16">
          <AvatarCircle src={avatars[1]} size={48} className="-ml-3" />
        </div>
        <div className="absolute top-0 left-32">
          <AvatarCircle src={avatars[2]} size={52} />
        </div>
        {/* Decorative dots */}
        <div className="absolute top-16 left-8 w-2 h-2 rounded-full bg-violet/30" />
        <div className="absolute top-24 left-28 w-3 h-3 rounded-full bg-purple/20" />
        <div className="absolute top-10 left-48 w-2 h-2 rounded-full bg-blue/20" />
      </div>

      <div>
        <p className="text-xs font-display font-semibold uppercase tracking-widest text-violet mb-2">
          Community
        </p>
        <h3 className="font-display text-xl font-bold text-ink mb-3 leading-snug">
          Surround yourself with vetted creators and entrepreneurs who rise
          together.
        </h3>
        <p className="text-muted text-sm leading-relaxed font-body">
          A private network of AI builders, creators, and entrepreneurs. No
          lurkers. No fluff. Just people shipping real work, every single day.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Card 2: Academy ─── */
function AcademyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className="group relative bg-white border border-border rounded-[20px] overflow-hidden md:col-span-2 hover:shadow-lg hover:shadow-violet/5 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-violet mb-2">
              Academy
            </p>
            {/* Scrollable category pills */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="flex-shrink-0 px-3 py-1 rounded-full bg-cream text-xs font-display font-medium text-ink border border-border"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="font-display text-xl font-bold text-ink mb-3 leading-snug">
              Structured courses that actually teach you how to use AI to
              generate income.
            </h3>
            <p className="text-muted text-sm leading-relaxed font-body">
              Not theory. Execution. From prompt engineering to full AI business
              models — learn what works right now.
            </p>
          </div>
        </div>

        {/* Right photo */}
        <div className="relative w-full sm:w-[45%] min-h-[240px] sm:min-h-0">
          <Image
            src="/images/emaan-headshot.jpg"
            alt="Emaan — GetEducated Academy"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 45vw"
          />
          {/* Overlay label */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-white text-sm font-display font-semibold">
              The AI Academy
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Card 3: Templates ─── */
function TemplatesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0.16 }}
      className="group relative rounded-[20px] p-8 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Swirling gradient background */}
      <div className="absolute inset-0 bg-[#1a0a2e]">
        <div className="absolute inset-0 opacity-80">
          <div
            className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,40,100,0.8) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(30,80,60,0.7) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(100,20,60,0.6) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/60 mb-2">
          Templates
        </p>
        <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">
          Stop building from scratch. Use what works.
        </h3>
        <p className="text-white/70 text-sm leading-relaxed font-body">
          Plug-and-play AI business templates. Proposals, workflows,
          automations&nbsp;— ready to deploy in minutes, not days.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Card 4: Collaborations ─── */
function CollaborationsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0.24 }}
      className="group relative bg-white border border-border rounded-[20px] p-8 hover:shadow-lg hover:shadow-violet/5 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Mock chat UI */}
      <div className="mb-6 space-y-3">
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 rounded-full bg-violet/10 flex-shrink-0" />
          <div className="bg-cream rounded-2xl rounded-tl-sm px-4 py-2.5">
            <p className="text-sm text-ink font-body">
              Hey, I love your work! 🔥
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 justify-end">
          <div className="bg-violet text-white rounded-2xl rounded-tr-sm px-4 py-2.5">
            <p className="text-sm font-body">Let&apos;s collaborate! →</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-blue/10 flex-shrink-0" />
        </div>
      </div>

      <p className="text-xs font-display font-semibold uppercase tracking-widest text-violet mb-2">
        Collaborations
      </p>
      <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug">
        Find your co-founder. Your creative partner. Your first client.
      </h3>
      <p className="text-muted text-sm leading-relaxed font-body">
        We connect builders who are ready to create together.
      </p>
    </motion.div>
  );
}

/* ─── Card 5: Events ─── */
function EventsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0.32 }}
      className="group relative rounded-[20px] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Resort background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80"
          alt="Tropical resort aerial view"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 p-8 flex flex-col justify-end min-h-[260px]">
        <p className="text-xs font-display font-semibold uppercase tracking-widest text-white/70 mb-2">
          Events
        </p>
        <h3 className="font-display text-xl font-bold text-white mb-2 leading-snug">
          Masterminds, workshops, and retreats.
        </h3>
        <p className="text-white/80 text-sm leading-relaxed font-body">
          In-person and virtual events in Dubai, Tulum, and beyond. Connect with
          the community IRL.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Card 6: Find Your People ─── */
function FindYourPeopleCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="group relative bg-[#0D0F17] rounded-[20px] p-8 md:col-span-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Stacked avatars */}
      <div className="flex items-center mb-8">
        <div className="flex -space-x-3">
          {avatars.map((src, i) => (
            <AvatarCircle key={i} src={src} size={42} />
          ))}
        </div>
        <div className="ml-2 w-10 h-10 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
          <span className="text-[10px] text-white/80 font-display font-bold">
            +53
          </span>
        </div>
      </div>

      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight">
        Find Your People.
      </h3>
      <h3 className="font-serif italic text-2xl sm:text-3xl text-white/80 mb-6 leading-tight">
        Build Your Future.
      </h3>

      <a
        href="#pricing"
        className="inline-flex items-center gap-2 bg-white text-ink px-6 py-3 rounded-full font-display font-semibold text-sm hover:bg-violet hover:text-white transition-all duration-300"
      >
        Get Started
        <span className="text-base">→</span>
      </a>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function BentoGrid() {
  return (
    <section id="community" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet/10 text-violet text-xs font-display font-semibold uppercase tracking-widest mb-5">
              Ecosystem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mb-4">
              A platform designed for
              <br />
              <span className="font-serif italic font-normal">
                collective growth.
              </span>
            </h2>
            <p className="text-muted max-w-xl mx-auto font-body">
              Six pillars. One ecosystem. Built for people who want to stop
              consuming and start creating.
            </p>
          </div>
        </AnimateIn>

        {/* Bento grid — asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {/* Row 1-2: Community (tall left) + Academy (wide right) */}
          <CommunityCard />
          <AcademyCard />

          {/* Row 2 continues: Templates + Collaborations fill under Academy */}
          <TemplatesCard />
          <CollaborationsCard />

          {/* Row 3: Events + Find Your People (wide) */}
          <EventsCard />
          <FindYourPeopleCard />
        </div>
      </div>
    </section>
  );
}
