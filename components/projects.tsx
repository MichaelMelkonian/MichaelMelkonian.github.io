"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  details: string[];
  techStack?: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Reactokey.com",
    description:
      "A typing reaction speed website with real-time metrics including WPM, reaction time, accuracy, and streak tracking.",
    details: [
      "Implemented accurate timing mechanisms and algorithms to capture and calculate typing speed, reaction time, accuracy, and streak metrics",
      "Utilized React.js to create dynamic and responsive web pages with enhanced user experience",
      "Integrated a robust backend system using Node.js and Express.js to handle user interactions and data storage",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
    link: "https://reactokey.com",
  },
  {
    title: "Sport Video Classification Model",
    description:
      "A video classification model using transfer learning techniques to distinguish videos of 5 different sport activities.",
    details: [
      "Implemented transfer learning with pre-trained models ResNet50, EfficientNetB0, and VGG16",
      "Utilized RNN-CNN architecture and moving averages to capture temporal nature of videos",
      "Achieved approximately 71.23% accuracy with comprehensive performance metrics",
    ],
    techStack: ["Python", "Keras", "TensorFlow", "OpenCV", "ResNet50", "VGG16"],
  },
  {
    title: "Business Search App",
    description:
      "A cross-platform business search application using Angular 14, Python Flask, and Android Studio.",
    details: [
      "Leveraged Google Cloud for deploying web and mobile app backends",
      "Integrated Yelp Fusion, Google Maps, and IPInfo APIs for tailored business data",
      "Established seamless data flow between frontend and backend through async fetch calls",
    ],
    techStack: [
      "Angular 14",
      "Python",
      "Flask",
      "Java",
      "Node.js",
      "Google Cloud",
      "Yelp API",
      "Google Maps API",
    ],
  },
  {
    title: "PolyPathway.com",
    description:
      "A campus navigation system for Cal Poly Pomona with real-time GPS tracking and custom markers.",
    details: [
      "Developed a dynamic, responsive front-end with Angular.js for enhanced user experience",
      "Built a scalable back-end with Python and Flask for route finding and facility searching",
      "Integrated Google Maps API for interactive map with real-time GPS tracking",
    ],
    techStack: ["Angular.js", "Python", "Flask", "Google Maps API", "RESTful APIs"],
  },
  {
    title: "Unmanned Rocket Science",
    description:
      "Hardware integration and calibration project for a scale model rocket with 9DoF sensor optimization.",
    details: [
      "Reduced sensor error rate from 42% to 8% through meticulous analysis and optimization",
      "Soldered and calibrated 9 Degrees of Freedom sensor using C++ and Arduino IDE",
      "Designed and fabricated nose cone and payload using Fusion 360 3D design software",
    ],
    techStack: ["C++", "Arduino", "Fusion 360", "9DoF Sensor", "Hardware Integration"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-8 lg:px-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary">04</span>
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Projects
          </h2>
          <span className="flex-1 h-px bg-border" />
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.link ? Link : "div";
  const cardProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...(cardProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      className="group block p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            {project.link && <ExternalLink className="w-4 h-4" />}
          </h3>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {project.details.map((detail, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary font-mono">{">"}</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        {project.techStack && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
            {project.techStack.map((tech) => (
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
    </CardWrapper>
  );
}
