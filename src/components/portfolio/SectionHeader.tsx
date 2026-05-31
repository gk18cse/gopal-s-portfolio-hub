import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
