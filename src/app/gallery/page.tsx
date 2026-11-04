import { useState } from "react";
import Image from "@/components/Img";
import { Link, type MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";

export const meta: MetaFunction = () => [
  { title: "Gallery — Anvik Labs" },
  {
    name: "description",
    content: "Photography and visual studies from Anvik Labs.",
  },
  {
    property: "og:title",
    content: "Gallery — Anvik Labs",
  },
  {
    property: "og:description",
    content: "Photography and visual studies from Anvik Labs.",
  },
];

const heroImages = [
  {
    id: 1,
    src: "/palmer/gallery/hero_1.png",
    alt: "Woman On The Grass",
    className: "w-[240px] aspect-[16/10] top-[38%] left-[6%]",
    width: 240,
    height: 150,
  },
  {
    id: 2,
    src: "/palmer/gallery/hero_2.png",
    alt: "Woman Portrait",
    className: "w-[180px] aspect-[3/4] top-[14%] left-[26%]",
    width: 180,
    height: 240,
  },
  {
    id: 3,
    src: "/palmer/gallery/hero_3.png",
    alt: "Afro Woman in White Suit",
    className: "w-[195px] aspect-[3/4] top-[22%] left-[70%]",
    width: 195,
    height: 260,
  },
  {
    id: 4,
    src: "/palmer/gallery/hero_4.png",
    alt: "Man Reading Book",
    className: "w-[230px] aspect-[16/10] top-[40%] left-[88%]",
    width: 230,
    height: 144,
  },
  {
    id: 5,
    src: "/palmer/gallery/hero_5.png",
    alt: "Woman in Warm Light",
    className: "w-[210px] aspect-square top-[68%] left-[10%]",
    width: 210,
    height: 210,
  },
  {
    id: 6,
    src: "/palmer/gallery/hero_6.png",
    alt: "Portrait in Patterned Shirt",
    className: "w-[215px] aspect-[16/10] top-[76%] left-[34%]",
    width: 215,
    height: 135,
  },
  {
    id: 7,
    src: "/palmer/gallery/hero_7.png",
    alt: "Carousel Portrait",
    className: "w-[190px] aspect-square top-[72%] left-[60%]",
    width: 190,
    height: 190,
  },
  {
    id: 8,
    src: "/palmer/gallery/hero_8.png",
    alt: "Woman Garden Pose",
    className: "w-[185px] aspect-[3/4] top-[66%] left-[84%]",
    width: 185,
    height: 246,
  },
];

const marqueeImages = [
  { id: 1, src: "/palmer/gallery/marq_1.png", aspect: "w-[220px] aspect-[3/4]" },
  { id: 2, src: "/palmer/gallery/marq_2.png", aspect: "w-[300px] aspect-[16/9]" },
  { id: 3, src: "/palmer/gallery/marq_3.png", aspect: "w-[210px] aspect-[3/4]" },
  { id: 4, src: "/palmer/gallery/marq_4.png", aspect: "w-[220px] aspect-square" },
  { id: 5, src: "/palmer/gallery/marq_5.png", aspect: "w-[300px] aspect-[16/9]" },
  { id: 6, src: "/palmer/gallery/marq_6.png", aspect: "w-[210px] aspect-[3/4]" },
  { id: 7, src: "/palmer/gallery/marq_7.png", aspect: "w-[290px] aspect-[16/10]" },
  { id: 8, src: "/palmer/gallery/marq_8.png", aspect: "w-[210px] aspect-[3/4]" },
];

const faqs = [
  {
    id: "01",
    question: "What services do you offer?",
    answer:
      "I provide creative direction, branding, UI/UX design, and Framer development tailored for modern digital experiences.",
  },
  {
    id: "02",
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround depends on the project scope, but most sites are delivered within 2–4 weeks from initial kickoff.",
  },
  {
    id: "03",
    question: "Do you only work in Framer?",
    answer:
      "While Framer is my primary tool, I also work with Figma, Webflow, and occasionally deliver HTML/CSS code.",
  },
  {
    id: "04",
    question: "Can you handle both design and build?",
    answer:
      "Absolutely. I specialize in merging design and development to create clean, efficient, and cohesive results.",
  },
  {
    id: "05",
    question: "Do you offer brand strategy too?",
    answer:
      "Yes, I offer strategy sessions to align design with business goals, especially for startups and creative teams.",
  },
  {
    id: "06",
    question: "What’s your process like?",
    answer:
      "Each project begins with a discovery call, followed by design phases, client reviews, and hands-on development.",
  },
];

export default function GalleryPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("01");

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground select-none overflow-x-clip pt-20 md:pt-24">
        {/* ── Hero Constellation Section ────────────────────── */}
        <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4">
          {/* Centered Gallery Title & Contact Button */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center my-auto py-16 pointer-events-auto mix-blend-difference">
            <h1 className="font-sans text-[clamp(4.5rem,14vw,13.5rem)] font-bold tracking-[-0.04em] leading-none text-white whitespace-nowrap">
              Gallery©
            </h1>

            <Link
              to="/contact"
              className="mt-8 px-8 py-3.5 rounded-full border border-white/40 bg-black/40 backdrop-blur-md text-white font-mono text-[13px] md:text-[14px] font-bold tracking-[0.08em] uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl cursor-pointer"
            >
              CONTACT NOW
            </Link>
          </div>

          {/* Desktop Floating Photo Constellation */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
            <div className="relative w-full h-full max-w-[1520px] mx-auto">
              {heroImages.map((img) => (
                <div
                  key={img.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.8)] pointer-events-auto hover:scale-105 hover:z-30 hover:border-white/30 transition-all duration-500 ease-out bg-neutral-900 ${img.className}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Photography Grid (< lg) */}
          <div className="lg:hidden w-full max-w-xl mx-auto grid grid-cols-2 gap-4 pb-16 z-10">
            {heroImages.map((img) => (
              <div
                key={img.id}
                className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Clarifying Deliverables FAQ Section ────────────── */}
        <section className="max-w-[1480px] mx-auto px-6 md:px-10 mt-16 md:mt-24 pt-8 border-t border-white/15">
          {/* Meta Line */}
          <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.08em] text-neutral-400 pb-6 border-b border-white/15">
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold">
                © HELP CENTER ヘルプ
              </span>
              <span className="text-neutral-500">(WDX® — 01)</span>
            </div>
            <span className="text-neutral-500">CLARIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            {/* Left Column: Portrait & Headline */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="relative w-[136px] h-[180px] rounded-xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src="/palmer/kDDFdQi11eufzZl2QNW6DZQPHc.png"
                  alt="Help Center Portrait"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <h2 className="font-sans text-[clamp(1.75rem,3.2vw,3rem)] font-medium leading-[1.15] tracking-tight text-white whitespace-pre-line">
                Clarifying Deliverable&apos;s Before They Begin{"\n"}with Real
                Process and Honest アンサー.
              </h2>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 flex flex-col">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-t border-white/15 last:border-b"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-[13px] text-neutral-500 w-12 shrink-0">
                        {faq.id}
                      </span>
                      <span className="font-sans text-[18px] md:text-[22px] font-medium text-white flex-1 pr-4 group-hover:text-neutral-200 transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`text-2xl font-light text-neutral-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-400 ease-out ${
                        isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-sans text-[15px] md:text-[16px] text-neutral-400 leading-relaxed pl-12 max-w-xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Infinite Horizontal Photo Marquee Strip ──────── */}
        <section className="mt-28 md:mt-36 overflow-hidden">
          <div className="max-w-[1480px] mx-auto px-6 md:px-10 pb-6">
            <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.08em] text-neutral-400 pb-6 border-b border-white/15">
              <div className="flex items-center gap-6">
                <span className="text-white font-semibold">
                  © FINAL SECTION クロージング
                </span>
                <span className="text-neutral-500">(WDX® — 12)</span>
              </div>
              <span className="text-neutral-500">STUDIO WRAP</span>
            </div>
          </div>

          {/* Marquee Track */}
          <div className="relative w-full py-6 overflow-hidden flex select-none">
            <div className="flex gap-6 animate-marquee shrink-0 items-center">
              {[...marqueeImages, ...marqueeImages].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`relative ${item.aspect} rounded-xl overflow-hidden border border-white/10 shrink-0 bg-neutral-900 shadow-xl`}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4-Pillar Strip ─────────────────────────────────── */}
        <section className="w-full bg-white text-black py-7 my-16 select-none border-y border-neutral-300">
          <div className="max-w-[1480px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/15">
            <div className="text-center font-mono text-[13px] md:text-[14px] font-bold tracking-[0.14em] uppercase py-2">
              INDEPENDENT
            </div>
            <div className="text-center font-mono text-[13px] md:text-[14px] font-bold tracking-[0.14em] uppercase py-2">
              OVERVIEW
            </div>
            <div className="text-center font-mono text-[13px] md:text-[14px] font-bold tracking-[0.14em] uppercase py-2 border-t lg:border-t-0 border-black/15">
              MULTIDISCIPLINARY
            </div>
            <div className="text-center font-mono text-[13px] md:text-[14px] font-bold tracking-[0.14em] uppercase py-2 border-t lg:border-t-0 border-black/15">
              FOCUSED
            </div>
          </div>
        </section>

        {/* ── Closing Studio Wrap ─────────────────────────── */}
        <section className="max-w-[1480px] mx-auto px-6 md:px-10 pb-12 pt-6 text-center">
          <p className="font-sans text-[clamp(1.5rem,3.4vw,2.75rem)] font-medium leading-[1.25] tracking-tight text-white max-w-4xl mx-auto my-12">
            I build expressive, performance-driven websites by blending clean
            design and native development inside Framer to help creative teams and
            modern brands stand out with intention.
          </p>

          <div className="mb-14">
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black font-mono text-[12px] md:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>

          {/* Bottom Nav Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/15 text-[14px] text-neutral-400 text-left">
            <div>
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-3">
                Quick Links
              </h5>
              <div className="flex gap-2 flex-wrap">
                <Link to="/" className="text-white hover:underline">
                  Home
                </Link>
                ,
                <Link to="/gallery" className="text-white hover:underline">
                  Gallery
                </Link>
                ,
                <Link to="/works" className="text-white hover:underline">
                  Work
                </Link>
                ,
                <Link to="/contact" className="text-white hover:underline">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="text-white">
                Based in Tokyo 東京
                <br />
                <span className="text-neutral-500 text-[13px]">
                  Art Director + Framer Developer
                </span>
              </p>
            </div>

            <div>
              <h5 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-3">
                Networks
              </h5>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                >
                  Instagram
                </a>
                ,
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                >
                  Dribbble
                </a>
                ,
                <a
                  href="https://framer.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                >
                  Framer
                </a>
                ,
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:underline"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Giant Watermark */}
          <div
            className="font-sans text-[clamp(5rem,20vw,18rem)] font-extrabold tracking-tight text-white/[0.04] text-center select-none pointer-events-none leading-[0.8] mt-16 -mb-6"
            aria-hidden="true"
          >
            ©2026
          </div>
        </section>
      </main>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
