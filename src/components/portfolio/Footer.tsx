import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-12 mt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-3xl p-8 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-bold">
              Gopalakrishnan<span className="text-gradient">.dev</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Aspiring software engineer building thoughtful interfaces and AI-powered experiences.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Quick Links</p>
            <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Connect</p>
            <div className="flex items-center gap-2">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 inline-flex items-center justify-center rounded-xl glass glass-hover">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="h-10 w-10 inline-flex items-center justify-center rounded-xl glass glass-hover">
                <Github className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="h-10 w-10 inline-flex items-center justify-center rounded-xl glass glass-hover">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Designed and Developed by <span className="text-foreground font-medium">Gopalakrishnan A.P</span></p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full glass glass-hover px-4 py-2"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
