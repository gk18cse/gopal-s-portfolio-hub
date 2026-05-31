import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    const subj = encodeURIComponent(form.subject);
    window.location.href = `mailto:${profile.email}?subject=${subj}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const contacts = [
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "gopalakrishnan-a-p", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "gk18cse", href: profile.github },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Contact" title="Let's connect" subtitle="Open to internships, placements, and collaborations." />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="font-medium truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 sm:p-8 space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Full Name" value={form.name} onChange={onChange} error={errors.name} />
              <Field name="email" label="Email Address" type="email" value={form.email} onChange={onChange} error={errors.email} />
            </div>
            <Field name="subject" label="Subject" value={form.subject} onChange={onChange} error={errors.subject} />
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                maxLength={1000}
                className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-blue-400/60 resize-none"
                placeholder="Tell me about your opportunity..."
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95 transition"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-400"
              >
                <CheckCircle2 className="h-4 w-4" /> Thanks! Your email client should open with the message.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, value, onChange, error, type = "text" }: {
  name: string; label: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={255}
        className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-blue-400/60"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
