'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!shouldDelete && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }

      if (shouldDelete && displayText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        return;
      }

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
  <Link href="/projects" passHref>
    <button className="primary-button">View Projects</button>
  </Link>
  <Link href="/contact" passHref>
    <button className="secondary-button">Contact Me</button>
  </Link>
</div>
          </div>

          <div className="hero-image-container">
            <div className="image-frame">
              <Image 
                src={my}
                alt="Yash - Computer Engineer" 
                width={400} 
                height={400}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
