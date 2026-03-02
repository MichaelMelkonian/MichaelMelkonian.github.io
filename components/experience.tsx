"use client";

import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack?: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Product Security Engineer",
    company: "Safran Cabin",
    location: "Costa Mesa, CA",
    period: "April 2025 - Present",
    description: [
      "Conducting security risk assessments for cabin products to ensure compliance with aeronautical (RTCA) and internal standards",
      "Performing performance testing on Reticulum and MQTT communication protocols across sub-system products",
      "Delivering cybersecurity training to multiple divisions across the broader organization, including Landing Systems",
      "Developing and maintaining SBOMs for embedded systems; executing vulnerability scans across sub-system firmware, AWS, and GitLab repositories; and integrating automated security scanning into CI/CD pipelines",
    ],
  },
  {
    title: "Cybersecurity Engineer",
    company: "S2 Global",
    location: "Torrance, CA",
    period: "March 2024 - April 2025",
    description: [
      "Led development of automation scripts for S-BOM update analysis, maintaining the latest software versions and reducing task time from 40 hours to 10 minutes",
      "Setup Wazuh SIEM to centralize and analyze over 500,000 logs daily, reducing threat detection time by 60% and enabling automated alerts for 80% of critical security events",
      "Spearheaded site surveys for international customs and border protection agencies, analyzing infrastructure, hardware, and software data to inform strategic decisions",
      "Performed comprehensive threat modeling for critical systems, pinpointing and mitigating potential attack vectors",
      "Coordinated ISO 27001, GDPR, and CMMC compliance efforts by centralizing security policies, procedures, and artifacts across engineering departments",
    ],
    techStack: [
      "Python",
      "JavaScript",
      "Node.js",
      "Tenable",
      "Rapid7",
      "AWS",
      "STIG Viewer",
      "Snyk",
      "Wazuh",
      "Datadog",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Singer Vehicle Design",
    location: "Torrance, CA",
    period: "October 2023 - March 2024",
    description: [
      "Streamlined technician operations and optimized inventory management using CNNs and association rule mining on specification option-codes, cutting task time by 27%",
      "Developed and managed data analytics dashboards (SQL, Jupyter Notebook, DOMO) to analyze and validate bills of materials, installation processes, and assembly workflows",
      "Engineered and deployed a full-stack QR code-based MES sign-in system, reducing user authentication time by 33% and enhancing operational efficiency",
      "Designed and implemented an ETL pipeline for real-time torque wrench data via MQTT and Node-Red, enabling performance anomaly detection and improving predictive maintenance",
    ],
    techStack: ["Python", "Jupyter Notebook", "SQL", "DOMO", "MESTEC", "Node-Red", "IoT"],
  },
  {
    title: "Consultant, Cloud and Custom Apps",
    company: "Capgemini SE",
    location: "Burbank, CA",
    period: "June 2022 - January 2023",
    description: [
      "Created and implemented staging environments in APEX to rigorously test code prior to development deployment, reducing production stage errors by approximately 13%",
      "Managed and optimized AWS infrastructure, overseeing EC2 instances, S3 buckets, and RDS databases to ensure scalable, secure, and efficient cloud operations",
      "Crafted and customized analytical reports and dashboards to provide in-depth insights into NBC Universal's subscription revenue streams, supporting strategic business decisions",
    ],
    techStack: ["Python", "Apex", "AWS", "Salesforce", "Jupyter Notebook", "PostgreSQL"],
  },
  {
    title: "Cybersecurity/ML Research Engineer",
    company: "Cyber Adaptive Learning Systems Lab",
    location: "Pomona, CA",
    period: "September 2021 - May 2022",
    description: [
      "Produced a darkweb crawler using BeautifulSoup package in collecting and storing relevant cyberthreat forum and marketplace data",
      "Conducted regular vulnerability assessments using tools like Nessus and OpenVAS, remediating critical findings within 72 hours and reducing exploitable attack surfaces by 30%",
      "Performed advanced threat modeling informed by dark web intelligence, identifying emerging TTPs to proactively enhance security posture",
      "Leveraged social network analysis (SNA) and decision trees to model information diffusion relative to hacker communities to investigate influential and topological patterns",
    ],
    techStack: [
      "Python",
      "Psycopg2",
      "NumPy",
      "Pandas",
      "BeautifulSoup",
      "TensorFlow",
      "PostgreSQL",
      "Tenable",
      "AWS Inspector",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-8 lg:px-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary">02</span>
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
              {experience.title}
              {experience.link && (
                <ExternalLink className="w-4 h-4" />
              )}
            </h3>
            <p className="text-muted-foreground">
              {experience.company}
              <span className="mx-2 text-border">|</span>
              <span className="font-mono text-sm">{experience.location}</span>
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground whitespace-nowrap bg-secondary px-2 py-1 rounded">
            {experience.period}
          </span>
        </div>
        <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
          {experience.description.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary font-mono">{">"}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {experience.techStack && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
