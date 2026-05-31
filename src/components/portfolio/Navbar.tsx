import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3 ${
            scrolled ? "ring-glow" : ""
          }`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary font-bold text-primary-foreground">
              G
            </span>
            <span className="hidden sm:inline font-semibold tracking-tight">
              Gopalakrishnan<span className="text-gradient">.dev</span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 glass rounded-2xl p-3"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => go(l.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm ${
                        active === l.id
                          ? "bg-white/10 text-foreground"
                          : "text-muted-foreground hover:bg-white/5"
                      }`}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={profile.resumeUrl}
                    download
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
