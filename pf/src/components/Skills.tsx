"use client";
import React from "react";
import "./skills.css"; // Import the CSS file
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCode, FaBrain, FaJs, FaGit, FaCuttlefish } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiTensorflow } from "react-icons/si";

const skills = [
  { category: "Web Development", skills: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }
    ]
  },
  { category: "AI & Machine Learning", skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "LLMs & Fine-Tuning", icon: <FaBrain />, color: "#A020F0" }
    ]
  },
  { category: "Programming & DSA", skills: [
      { name: "C++", icon: <FaCuttlefish />, color: "#00599C" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "DSA (CodeChef 3★)", icon: <FaCode />, color: "#E44D26" }
    ]
  },
  { category: "Tools & Databases", skills: [
      { name: "Git", icon: <FaGit />, color: "#F1502F" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "SQL", icon: <FaDatabase />, color: "#4479A1" }
    ]
  },
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Tech Stack & Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skills-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
