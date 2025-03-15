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
      name: "HandTalk",
      github: "https://github.com/Yashgabani845/GestureGenius",
      deployed: "https://youtu.be/RaSgkDoy-VQ",
      tagline: "Real-time sign language detector using FastAPI",
      techStack: ["Deep Learning","MobileNetV2", "FastAPI", "TensorFlow", "CNN", "OpenCV","WebRTC"],
      specialInfo: "Fine-tuned CNN model for Sign Language detection and integrate with Videocalling"
    },
    {
      name: "HireHub",
      github: "https://github.com/Yashgabani845/hiring-portal",
      deployed: "https://hiring-hub-opensource.netlify.app",
      tagline: "A comprehensive MERN stack hiring portal",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      specialInfo: "Feature-rich hiring platform with real-time notifications and applicant tracking system"
    },
    {
      name: "ICollab",
      github: "https://github.com/Yashgabani845/Icollab",
      tagline: "MERN collaborative platform for remote teams",
      techStack: ["MongoDB", "Express", "React", "Node.js","BERT","Fine-tuning", "Socket.io","WebRTC"],
      specialInfo: "Real-time collaboration with video sharing and team management"
    },
   
    {
      name: "Grading System",
      github: "https://github.com/Yashgabani845/GradingSystem",
      tagline: "Java Spring Boot based academic grading platform",
      techStack: ["Java", "Spring Boot", "MySQL"],
      specialInfo: "Comprehensive marking system with customizable grading schemes and report generation"
    },
    {
      name: "InkwellMart",
      github: "https://github.com/Yashgabani845/inkwellmart",
      tagline: "E-commerce platform for students using Django",
      techStack: ["Django", "Python", "SQLite", "Bootstrap", "HTML", "CSS", "JavaScript"],
      specialInfo: "Secure authentication, shopping cart, checkout, order history, and an admin panel for managing products and users."
    },
    {
      name: "CodeAcademy",
      github: "https://github.com/Yashgabani845/TechTitans",
      deployed: "https://youtu.be/Bg1LmfGieMI",
      tagline: "Interactive platform for learning programming",
      techStack: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript", "EJS", "CodeMirror", "Quill.js"],
      specialInfo: "Practice coding, take quizzes, and learn programming with an engaging interface."
    },
  ];

  // Emoji mapping for project types
  const getProjectEmoji = (name: string) => {
    const nameToLower = name.toLowerCase();
    if (nameToLower.includes("hire") || nameToLower.includes("job")) return "💼";
    if (nameToLower.includes("collab")) return "🤝";
    if (nameToLower.includes("talk") || nameToLower.includes("language")) return "👐";
    if (nameToLower.includes("grad") || nameToLower.includes("system")) return "📊";
    if (nameToLower.includes("mart") || nameToLower.includes("shop")) return "🛒";
    if (nameToLower.includes("academy") || nameToLower.includes("code")) return "💻";
    return "🚀";
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title"></h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${hoveredProject === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-content">
              <div className="project-header">
                <span className="project-emoji">{getProjectEmoji(project.name)}</span>
                <h2 className="project-name">{project.name}</h2>
              </div>
              
              <p className="project-tagline">{project.tagline}</p>
              
              <div className="project-tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-info">
                <p className="project-special-info">✨ {project.specialInfo}</p>
              </div>
              
              <div className="project-links">
  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
    <span className="link-emoji">📂</span> GitHub
  </Link>
  {project.deployed && ( // Render only if deployed exists
    <Link href={project.deployed} target="_blank" rel="noopener noreferrer" className="project-link deployed-link">
      <span className="link-emoji">🔗</span> Live Demo
    </Link>
  )}
</div>

            </div>
            
            {/* Single shape for subtle animation */}
            <div className="shape shape-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;