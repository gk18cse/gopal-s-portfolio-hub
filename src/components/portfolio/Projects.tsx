import { motion } from "framer-motion";
import { Rocket, Github, ExternalLink, Sparkles } from "lucide-react";
import { featuredProject, profile } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const p = featuredProject;
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Projects" title="Currently Building" subtitle="A featured ongoing project I'm actively developing." />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Rocket className="h-3.5 w-3.5" /> {p.status}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently Developing
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-lg glass px-3 py-1 text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={profile.github}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-4 py-2.5 text-sm font-semibold"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground opacity-70 cursor-not-allowed"
                >
                  <ExternalLink className="h-4 w-4" /> Live Preview (Coming Soon)
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-gradient" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Features Under Development</p>
                </div>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
