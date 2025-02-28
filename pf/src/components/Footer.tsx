"use client";
import React from "react";
import "./footer.css"; // Import the CSS file

import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Yashgabani845", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-gabani-527886258/", icon: <FaLinkedin /> },
  { name: "Gmail", url: "mailto:gabaniyash846@gmail.com", icon: <FaEnvelope /> },
  { name: "Medium", url: "https://medium.com/@gabaniyash846", icon: <FaMedium /> },
];

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-title">Let's Connect!</h2>
          <p className="footer-description">
            Feel free to reach out for collaborations, projects, or just a chat!
          </p>
          <a href="mailto:gabaniyash846@gmail.com" className="connect-button">
            Let's Connect
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="social-title">Follow Me</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-item">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="footer-text">© {new Date().getFullYear()} Yash Gabani. All rights reserved.</p>
    </footer>
  );
}
