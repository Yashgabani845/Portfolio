'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import './herosection.css';
import my from "../assets/images/my1.png";

function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const phrases = [
    'Web Developer',
    'Generative AI Developer',
    'ML Enthusiast'
  ];

  useEffect(() => {
    const typewriterEffect = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const shouldDelete = isDeleting;
      
      // Set typing speed based on action
      setTypingSpeed(isDeleting ? 50 : 100);
      
      if (!shouldDelete && displayText === currentPhrase) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      
      if (shouldDelete && displayText === '') {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        return;
      }
      
      // Calculate new text
      const newText = shouldDelete
        ? currentPhrase.substring(0, displayText.length - 1)
        : currentPhrase.substring(0, displayText.length + 1);
      
      setDisplayText(newText);
    };
    
    const timer = setTimeout(typewriterEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, typingSpeed]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm <span className="highlight">Yash</span></h1>
            <h2>Computer Engineering Student</h2>
            <div className="typewriter-container">
              <span className="typewriter-prefix">I am a </span>
              <span className="typewriter-text">{displayText}</span>
              <span className="typewriter-cursor">|</span>
            </div>
            <p className="hero-description">
              Passionate 3rd year student exploring the intersection of web technologies, 
              artificial intelligence, and machine learning. Building innovative solutions 
              that make a difference.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">View Projects</button>
              <button className="secondary-button">Contact Me</button>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="image-frame">
              <div className="image-placeholder">
                {/* Replace with your actual image */}
                <Image 
                  src={my}
                  alt="Yash - Computer Engineer" 
                  width={400} 
                  height={400}
                  className="profile-image"
                />
              </div>
            </div>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </div>
      
      {/* Animated background shapes */}
      <div className="bg-shape circle"></div>
      <div className="bg-shape square"></div>
      <div className="bg-shape triangle"></div>
      <div className="bg-shape rectangle"></div>
    </section>
  );
}
export default HeroSection;