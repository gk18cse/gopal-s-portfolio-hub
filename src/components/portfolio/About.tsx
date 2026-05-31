import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Heart } from "lucide-react";
import { education, interests, strengths } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      content: (
        <div className="space-y-1.5 text-sm">
          <p className="font-semibold text-foreground">{education.degree}</p>
          <p className="text-muted-foreground">{education.college}</p>
          <p className="text-muted-foreground">Currently: {education.year}</p>
        </div>
      ),
    },
    {
      icon: Sparkles,
      title: "Areas of Interest",
      content: (
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {interests.map((i) => (
            <li key={i} className="flex gap-2"><span className="text-gradient">▸</span>{i}</li>
          ))}
        </ul>
      ),
    },
    {
      icon: Heart,
      title: "Strengths",
      content: (
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {strengths.map((i) => (
            <li key={i} className="flex gap-2"><span className="text-gradient">▸</span>{i}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="About Me" title="A glimpse into who I am" subtitle="Driven by curiosity, design, and the desire to build things that matter." />
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground mb-4">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{c.title}</h3>
              {c.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
