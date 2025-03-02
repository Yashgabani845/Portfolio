"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import './project.css';

interface ProjectProps {
  name: string;
  github: string;
  deployed: string;
  tagline: string;
  techStack: string[];
  specialInfo: string;
}

const Project: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      name: "HireHub",
      github: "https://github.com/yourusername/hirehub",
      deployed: "https://hirehub.vercel.app",
      tagline: "A comprehensive MERN stack hiring portal",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      specialInfo: "Feature-rich hiring platform with real-time notifications and applicant tracking system"
    },
    {
      name: "ICollab",
      github: "https://github.com/yourusername/icollab",
      deployed: "https://icollab.vercel.app",
      tagline: "MERN collaborative platform for remote teams",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      specialInfo: "Real-time collaboration with document sharing and team management"
    },
    {
      name: "HandTalk",
      github: "https://github.com/yourusername/handtalk",
      deployed: "https://handtalk-demo.vercel.app",
      tagline: "Real-time sign language detector using FastAPI",
      techStack: ["Python", "FastAPI", "TensorFlow", "CNN", "OpenCV"],
      specialInfo: "Fine-tuned CNN model for American Sign Language detection with 95% accuracy"
    },
    {
      name: "Grading System",
      github: "https://github.com/yourusername/grading-system",
      deployed: "https://grading-system.vercel.app",
      tagline: "Java Spring Boot based academic grading platform",
      techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      specialInfo: "Comprehensive marking system with customizable grading schemes and report generation"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${hoveredProject === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-content">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-tagline">{project.tagline}</p>
              
              <div className="project-tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <p className="project-special-info">{project.specialInfo}</p>
              
              <div className="project-links">
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  GitHub
                </Link>
                <Link href={project.deployed} target="_blank" rel="noopener noreferrer" className="project-link deployed-link">
                  Live Demo
                </Link>
              </div>
            </div>
            
            {/* Animated shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;