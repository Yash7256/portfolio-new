"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="w-full px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start justify-between py-4 text-[13px] leading-snug md:py-5 md:text-[14px]"
        >
          <div className="flex flex-col">
            <Link
              to="/"
              aria-label="Anvik Labs home"
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-70"
            >
              <img
                src="/logo.svg"
                alt="Anvik Labs"
                width={1010}
                height={118}
                className="h-5 w-auto md:h-6"
              />
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <div className="flex items-center gap-1.5 font-sans text-neutral-300">
              {quickLinks.map((item, index) => (
                <span key={item.label} className="inline-flex items-center gap-1.5">
                  <Link
                    to={item.href}
                    className="underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
                  >
                    {item.label}
                  </Link>
                  {index < quickLinks.length - 1 && (
                    <span aria-hidden="true" className="font-normal text-neutral-500">
                      ,
                    </span>
                  )}
                </span>
              ))}
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="font-mono text-[12px] font-semibold uppercase tracking-wider text-neutral-300 transition-opacity duration-200 hover:opacity-60 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            [ MENU ]
          </button>
        </motion.div>
      </div>

      <div aria-hidden className="w-full px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw]">
        <div className="h-px w-full origin-bottom scale-y-50 bg-white/15" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 px-4 py-5 backdrop-blur-xl sm:px-[4vw] md:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                aria-label="Anvik Labs home"
                className="inline-flex items-center"
              >
                <img
                  src="/logo.svg"
                  alt="Anvik Labs"
                  width={1010}
                  height={118}
                  className="h-6 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-mono text-[12px] font-semibold uppercase tracking-wider text-neutral-300"
                aria-label="Close navigation menu"
              >
                [ CLOSE ]
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-12 flex flex-col gap-5">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
                Quick links
              </span>
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[22px] font-medium tracking-tight text-foreground transition-opacity duration-200 hover:opacity-60"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-6 text-[13px]">
              <span className="font-sans font-medium text-foreground">
                Independent product studio
              </span>
              <span className="font-sans text-neutral-400">
                Based in India, working globally
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
