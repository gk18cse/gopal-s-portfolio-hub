import { motion } from "framer-motion";
import { technicalSkills, toolSkills } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

type Skill = { name: string; icon: React.ComponentType<{ className?: string }>; level: number; color: string };

function SkillCard({ s, i }: { s: Skill; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="glass glass-hover rounded-2xl p-5 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform"
          style={{ color: s.color }}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">{s.name}</p>
          <p className="text-xs text-muted-foreground">{s.level}% proficiency</p>
        </div>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${s.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-primary"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Skills" title="Tools & Technologies" subtitle="What I use to bring ideas to life." />

        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {technicalSkills.map((s, i) => <SkillCard key={s.name} s={s} i={i} />)}
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Design & Development Tools</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {toolSkills.map((s, i) => <SkillCard key={s.name} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
