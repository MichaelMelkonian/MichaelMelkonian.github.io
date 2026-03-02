"use client";

import { Shield, Code, Cloud, Database, Lock } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security",
    skills: [
      "Vulnerability Assessment",
      "Threat Modeling",
      "SIEM (Wazuh, Datadog)",
      "Penetration Testing",
      "SBOM Management",
      "ISO 27001",
      "GDPR",
      "CMMC",
    ],
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Programming",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React.js",
      "Angular",
      "C++",
      "SQL",
      "Flask",
    ],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, RDS)",
      "GitLab CI/CD",
      "Docker",
      "Terraform",
      "Snyk",
      "Tenable",
      "Rapid7",
    ],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data & ML",
    skills: [
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "PostgreSQL",
      "Jupyter Notebook",
      "DOMO",
    ],
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Security Tools",
    skills: [
      "Nessus",
      "OpenVAS",
      "STIG Viewer",
      "AWS Inspector",
      "BeautifulSoup",
      "Node-Red",
      "MQTT",
    ],
  },
];

export function Skills() {
  return (
    <section className="py-24 px-8 lg:px-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary">03</span>
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Skills & Technologies
          </h2>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="grid gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="font-medium text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 bg-secondary border border-border text-muted-foreground rounded font-mono hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
