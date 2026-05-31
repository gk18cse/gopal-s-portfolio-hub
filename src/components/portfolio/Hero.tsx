import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { profile, typingRoles } from "@/lib/portfolio-data";
import { Particles } from "./Particles";
import { TypingText } from "./TypingText";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <Particles />
      <div className="relative mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internships & Placements
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            <TypingText words={typingRoles} />
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95 transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-3 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass glass-hover"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass glass-hover"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full glass p-2 ring-glow">
            <div className="h-full w-full rounded-full bg-gradient-primary flex items-center justify-center text-7xl font-bold text-primary-foreground select-none">
              GA
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-xs whitespace-nowrap">
            B.E CSE · 3rd Year
          </div>
        </motion.div>
      </div>
    </section>
  );
}
