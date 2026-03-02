"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 lg:px-12">
      <div className="max-w-xl w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-wider">
              Available for opportunities
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground text-balance">
            Michael Melkonian
          </h1>
          <p className="text-lg md:text-xl text-primary font-mono font-medium tracking-wide">
            Product Security Engineer
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty">
            I build secure systems and protect critical infrastructure. Currently
            at <span className="text-foreground font-medium">Safran Cabin</span>,
            conducting security risk assessments for aeronautical products and
            integrating automated security scanning into CI/CD pipelines.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg font-mono">
            {"// 60% faster threat detection | ML-powered security | Cloud architecture"}
          </p>
        </div>

        <nav className="mt-12 flex flex-col gap-3">
          <NavLink href="#about" index="01">About</NavLink>
          <NavLink href="#experience" index="02">Experience</NavLink>
          <NavLink href="#projects" index="03">Projects</NavLink>
          <NavLink href="#contact" index="04">Contact</NavLink>
        </nav>

        <div className="mt-12 flex items-center gap-4">
          <Link
            href="https://linkedin.com/in/michael-melkonian"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/michaelmelkonian"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:mikemel20@gmail.com"
            className="p-2.5 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="tel:+13233991792"
            className="p-2.5 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NavLink({
  href,
  children,
  index,
}: {
  href: string;
  children: React.ReactNode;
  index: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all"
    >
      <span className="font-mono text-xs text-primary/60 group-hover:text-primary transition-colors">
        {index}
      </span>
      <span className="h-px w-6 bg-border group-hover:w-12 group-hover:bg-primary transition-all" />
      <span className="text-sm font-medium uppercase tracking-widest">
        {children}
      </span>
    </Link>
  );
}
