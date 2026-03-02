"use client";

import { GraduationCap } from "lucide-react";

interface EducationItem {
  school: string;
  degree: string;
  location: string;
  year: string;
  coursework?: string[];
}

const education: EducationItem[] = [
  {
    school: "University of Southern California",
    degree: "Master of Science in Computer Science",
    location: "Los Angeles, CA",
    year: "May 2024",
    coursework: [
      "Web Technologies",
      "Database Systems",
      "Analysis of Algorithms",
      "Information Retrieval",
      "Deep Learning",
      "Machine Learning for Data Science",
      "Foundations of Artificial Intelligence",
    ],
  },
  {
    school: "Cal Poly Pomona",
    degree: "Bachelor of Science in Computer Science",
    location: "Pomona, CA",
    year: "May 2022",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Software Engineering",
      "Database Systems",
      "Social Network Analysis",
      "Machine Learning",
      "Artificial Intelligence",
    ],
  },
];

export function Education() {
  return (
    <section id="about" className="py-24 px-8 lg:px-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary">01</span>
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Education
          </h2>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground font-mono">{edu.location}</p>
                  </div>
                  {edu.coursework && (
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                        Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-2.5 py-1 bg-secondary border border-border text-muted-foreground rounded font-mono"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
