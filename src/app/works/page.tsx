import { useState } from "react";
import Image from "@/components/Img";
import { Link, type MetaFunction } from "react-router";
import Navbar from "@/components/Navbar";

export const meta: MetaFunction = () => [
  { title: "Works — Anvik Labs" },
  {
    name: "description",
    content: "Selected brand, editorial, and web projects by Anvik Labs.",
  },
  {
    property: "og:title",
    content: "Works — Anvik Labs",
  },
  {
    property: "og:description",
    content: "Selected brand, editorial, and web projects by Anvik Labs.",
  },
];

const palmerProjects = [
  {
    id: "sonder-goods",
    number: "(01)",
    title: "Sonder Goods",
    category: "Branding",
    year: "2024",
    bgImage: "/palmer/wA52DtSvQDx894hqLZv4ezfKfz8.png",
    insetImage: "/palmer/WSIwyrpSzX4O0fiESBwPTjSWBE.png",
    aspect: "aspect-[698/749]",
    status: "Completed",
  },
  {
    id: "halo-wear",
    number: "(02)",
    title: "Halo Wear",
    category: "Web Design",
    year: "2024",
    bgImage: "/palmer/IhwR33YbJAKylGnbmoCW4maBHI.png",
    insetImage: "/palmer/tkYEeCoj1udozbnzQynoaYqCI.png",
    aspect: "aspect-[698/749]",
    status: "Completed",
  },
  {
    id: "lucent-lab",
    number: "(03)",
    title: "Lucent Lab",
    category: "Creative Direction",
    year: "2023",
    bgImage: "/palmer/G891sPJdh93gPfGSBboEt88Now.png",
    insetImage: "/palmer/YIi7jRxIe8p6gLtM1ZMNpJyVYs.jpeg",
    aspect: "aspect-[698/749]",
    status: "In Progress",
  },
  {
    id: "arc-bloom",
    number: "(04)",
    title: "Arc & Bloom",
    category: "Identity Design",
    year: "2023",
    bgImage: "/palmer/kSBqNFitJQuBzXuk7tl1FqlAHhs.png",
    insetImage: "/palmer/Jt7zqgTjQMYT15YvEkLGKiF9Cw.png",
    aspect: "aspect-[698/749]",
    status: "Completed",
  },
  {
    id: "atelier-nara",
    number: "(05)",
    title: "Atelier Nara",
    category: "Portfolio Site",
    year: "2023",
    bgImage: "/palmer/svmMd86RbsKfib7KzvpKAUsHrk.png",
    insetImage: "/palmer/7WVAcnCw5jrTdcET3CmMrpU7gf0.png",
    aspect: "aspect-[698/749]",
    status: "In Progress",
  },
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
      "Standard one-page or showcase projects typically take 7 to 14 business days. Comprehensive brand systems or multi-page CMS platforms usually take 3 to 5 weeks from kickoff to final deployment.",
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
    question: "What's your process like?",
    answer:
      "Each project begins with a discovery call, followed by design phases, client reviews, and hands-on development.",
  },
];

export default function WorksPage() {
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

      <main className="min-h-screen bg-background text-foreground pt-24 md:pt-32 select-none overflow-x-clip">
        {/* ── Main Work Split Layout ─────────────────────────── */}
        <div className="max-w-[1480px] mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
            {/* Sticky Left Column */}
            <aside className="w-full lg:w-[45%] lg:sticky lg:top-32 self-stretch lg:self-start pt-4 z-10">
              <div className="lg:sticky lg:top-32 flex items-start gap-4">
                <h1 className="font-sans text-[clamp(3.5rem,9.5vw,10rem)] font-bold tracking-[-0.04em] leading-[0.92] text-white whitespace-pre-line uppercase">
                  All{"\n"}Works
                </h1>
                <span className="font-sans text-[clamp(1.5rem,3vw,3rem)] font-medium text-white/90 mt-2">
                  ({palmerProjects.length})
                </span>
              </div>
            </aside>

            {/* Right Scrollable Cards Feed */}
            <div className="w-full lg:w-[55%] flex flex-col gap-16 lg:border-l lg:border-white/15 lg:pl-10 pt-4">
              {palmerProjects.map((project, idx) => (
                <Link
                  key={project.id}
                  to={`/works/${project.id}`}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Card Media Container */}
                  <div
                    className={`relative w-full ${project.aspect} rounded-xl overflow-hidden bg-neutral-950 border border-white/10`}
                  >
                    {/* Background Full-Bleed Image */}
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                    />

                    {/* Centered Floating Inset Thumbnail */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:shadow-[0_32px_65px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out z-10 border border-white/10">
                      <Image
                        src={project.insetImage}
                        alt=""
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Center Horizontal Hairline Banner on Hover */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/90 z-20 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 origin-center pointer-events-none" />
                  </div>

                  {/* Card Bottom Meta Bar */}
                  <div className="pt-4 flex items-center justify-between text-[18px] md:text-[19px] font-medium tracking-tight">
                    <div className="flex items-center gap-3">
                      <div className="h-[25px] overflow-hidden flex flex-col">
                        <span className="text-white group-hover:-translate-y-[25px] transition-transform duration-300 ease-out">
                          {project.title}
                        </span>
                        <span className="text-neutral-300 group-hover:-translate-y-[25px] transition-transform duration-300 ease-out">
                          {project.title}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
                          project.status === "Completed"
                            ? "border-emerald-400/40 text-emerald-300"
                            : "border-amber-400/40 text-amber-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <span className="font-mono text-[16px] text-white/80">
                      {project.number}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Clarifying Deliverables FAQ Section ────────────── */}
          <section className="mt-28 md:mt-36 pt-8 border-t border-white/15">
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

              {/* Right Column: Portrait & Headline */}
              {/* <div className="lg:col-span-7 flex flex-col items-start">
                <div className="relative w-[136px] h-[180px] rounded-xl overflow-hidden mb-8 border border-white/10">
                  <Image
                    src="/profile/harshita.jpeg"
                    alt="Harshita Upadhyay | harshi.designs"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <h2 className="font-sans text-[clamp(1.75rem,3.2vw,3rem)] font-medium leading-[1.15] tracking-tight text-white whitespace-pre-line">
                  Clarifying Deliverable&apos;s Before They Begin{"\n"}with Real
                  Process and Honest アンサー.
                </h2>
              </div> */}
            </div>
          </section>
        </div>

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
        <section className="max-w-[1480px] mx-auto px-6 md:px-10 pb-12 pt-6">
          <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.08em] text-neutral-400 pb-6 border-b border-white/15">
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold">
                © FINAL SECTION クロージング
              </span>
              <span className="text-neutral-500">(WDX® — 12)</span>
            </div>
            <span className="text-neutral-500">STUDIO WRAP</span>
          </div>

          <p className="font-sans text-[clamp(1.5rem,3.4vw,2.75rem)] font-medium leading-[1.25] tracking-tight text-white max-w-4xl my-12">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/15 text-[14px] text-neutral-400">
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
    </>
  );
}