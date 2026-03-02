"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8 lg:px-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary">05</span>
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            {"I'm always interested in discussing new opportunities, cybersecurity challenges, or innovative projects. Feel free to reach out."}
          </p>
          <div className="grid gap-4">
            <ContactItem
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              value="mikemel20@gmail.com"
              href="mailto:mikemel20@gmail.com"
            />
            <ContactItem
              icon={<Phone className="w-5 h-5" />}
              label="Phone"
              value="(323) 399-1792"
              href="tel:+13233991792"
            />
            <ContactItem
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
              value="michael-melkonian"
              href="https://linkedin.com/in/michael-melkonian"
            />
            <ContactItem
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
              value="michaelmelkonian"
              href="https://github.com/michaelmelkonian"
            />
            <ContactItem
              icon={<MapPin className="w-5 h-5" />}
              label="Location"
              value="Los Angeles, CA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all group">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">{icon}</div>
      <div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {label}
        </p>
        <p className="text-foreground group-hover:text-primary transition-colors font-mono">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return content;
}
