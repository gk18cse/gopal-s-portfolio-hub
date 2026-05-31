import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Experience" title="Where I've worked" subtitle="Hands-on internship experience building real products." />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/40 to-cyan-400/20" />
          {experience.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-8"
            >
              <div className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 top-4 h-4 w-4 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="sm:text-right sm:pr-8">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />{e.duration}
                </div>
              </div>
              <div className="glass glass-hover rounded-2xl p-6 sm:ml-2">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{e.role}</h3>
                    <p className="text-sm text-gradient font-medium">{e.company}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-gradient mt-0.5">▸</span>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
