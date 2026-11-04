"use client";

import { Link } from "react-router";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "X", href: "https://x.com" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="-mx-4 select-none border-t border-white/10 sm:-mx-[4vw] lg:-mx-[5vw] xl:-mx-[6vw]">
      <div className="container-page py-14 md:py-20">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 md:text-[11px]">
          <span>Technology studio</span>
        </div>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[minmax(0,1fr)_280px] md:gap-10 lg:gap-16">
          <div>
            <p className="max-w-[16ch] font-sans text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-foreground">
              Where ideas become <span className="text-accent">real products.</span>
            </p>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-relaxed text-neutral-400 md:text-[15px]">
              We design, develop, and launch digital products for ambitious ideas.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-accent pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:text-accent"
            >
              Start a conversation
              <span aria-hidden="true" className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            <nav aria-label="Footer navigation">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Explore
              </p>
              <div className="flex flex-col items-start gap-3 font-sans text-[14px] text-neutral-300">
                {footerLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div>
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Elsewhere
              </p>
              <div className="flex flex-col items-start gap-3 font-sans text-[14px] text-neutral-300">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group transition-colors duration-200 hover:text-accent"
                  >
                    {social.label} <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
                Contact
              </p>
              <a
                href="mailto:hello@anviklabs.com"
                className="group inline-flex items-center gap-2 break-all font-sans text-[14px] text-neutral-300 transition-colors duration-200 hover:text-accent"
              >
                hello@anviklabs.com
                <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-5 md:mt-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Link to="/" aria-label="Anvik Labs home" className="inline-flex">
              <img
                src="/logo.svg"
                alt="Anvik Labs"
                width={1010}
                height={118}
                className="h-8 w-auto md:h-10"
              />
            </Link>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
              <span>© 2026 Anvik Labs</span>
              <span>All rights reserved</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="text-neutral-300 transition-colors duration-200 hover:text-accent"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
