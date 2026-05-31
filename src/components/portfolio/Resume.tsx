import { motion } from "framer-motion";
import { FileText, Download, Eye, Mail, Phone, Github, Linkedin, GraduationCap } from "lucide-react";
import { profile, education } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

export function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Resume" title="Resume" subtitle="View and download my latest resume." />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass glass-hover rounded-3xl p-8 flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-40" />
              <div className="relative h-32 w-24 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-xl">
                <FileText className="h-12 w-12" />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold">Gopalakrishnan_AP_Resume.pdf</h3>
            <p className="text-sm text-muted-foreground mt-1">Latest version · PDF</p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 w-full">
              <a
                href={profile.resumeUrl}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-4 py-2.5 text-sm font-semibold"
              >
                <Eye className="h-4 w-4" /> View Resume
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="h-4 w-4" /> Download
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-lg font-semibold mb-4">Resume Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <Detail icon={<GraduationCap className="h-4 w-4" />} label="Degree" value={education.degree} />
              <Detail label="College" value={education.college} />
              <Detail icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <Detail icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <Detail icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="gopalakrishnan-a-p" href={profile.linkedin} />
              <Detail icon={<Github className="h-4 w-4" />} label="GitHub" value="gk18cse" href={profile.github} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon, label, value, href }: { icon?: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="glass rounded-xl p-4 h-full">
      <p className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
        {icon}{label}
      </p>
      <p className="mt-1 font-medium break-words">{value}</p>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block glass-hover rounded-xl">{content}</a> : content;
}
