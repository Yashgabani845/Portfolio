"use client";

import React, { useEffect, useRef, useState } from 'react';
import './timeline.css';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  achievements?: string[];
  type: 'education' | 'experience';
  emoji: string;
  link?: string;
}

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<string>('');

  useEffect(() => {
    // Observer for revealing timeline items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    // Handle scroll for timeline progress
    const handleScroll = () => {
        if (!timelineRef.current) return;
    
        const container = timelineRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;
    
        let progress = 0;
    
        if (containerTop <= windowHeight * 0.1) { // Start tracking a bit earlier
            const scrollableDistance = containerHeight - windowHeight * 0.8;
            const scrolledDistance = Math.abs(containerTop) + windowHeight * 0.1;
    
            progress = Math.min(100, Math.max(0, (scrolledDistance / scrollableDistance) * 100));
        }
    
        // Remove previous scroll classes
        container.classList.remove('scrolled-16', 'scrolled-33', 'scrolled-50', 'scrolled-66', 'scrolled-83', 'scrolled-100');
    
        if (progress >= 100) {
            setScrollProgress('scrolled-100');
            container.classList.add('scrolled-100');
        } else if (progress >= 83) {
            setScrollProgress('scrolled-83');
            container.classList.add('scrolled-83');
        } else if (progress >= 66) {
            setScrollProgress('scrolled-66');
            container.classList.add('scrolled-66');
        } else if (progress >= 50) {
            setScrollProgress('scrolled-50');
            container.classList.add('scrolled-50');
        } else if (progress >= 33) {
            setScrollProgress('scrolled-33');
            container.classList.add('scrolled-33');
        } else if (progress >= 16) {
            setScrollProgress('scrolled-16');
            container.classList.add('scrolled-16');
        } else {
            setScrollProgress('');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "10th Standard",
      organization: "Swaminarayan Gurukul Vishyalaya",
      date: "2020",
      description: "Achieved 91.83% in SSC GSEB",
      type: "education",
      emoji: "🎓"
    },
    {
      id: 2,
      title: "12th Standard",
      organization: "Ashadeep Vidhyalaya",
      date: "2022",
      description: "Achieved 89.53% in HSC GSEB",
      type: "education",
      emoji: "📚"
    },
    {
      id: 3,
      title: "Bachelor's Degree",
      organization: "Dharmsinh Desai University",
      date: "2022 - Present",
      description: "Currently in third year with overall CPI of 8.71",
      type: "education",
      emoji: "🏛️"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      organization: "GirlScript Summer of Code",
      date: "May 2024 - July 2024",
      description: "Remote contributor achieving Global Rank 83 among 25k+ contributors",
      achievements: [
        "Solved React, Node.js related issues",
        "Worked on Chrome extensions, JavaScript, and EJS based issues"
      ],
      type: "experience",
      emoji: "👩‍💻",
      link: "https://gssoc.girlscript.tech"
    },
    {
      id: 5,
      title: "Campus Ambassador",
      organization: "GirlScript Summer of Code",
      date: "Oct 2024 - Nov 2024",
      description: "Represented GirlScript SoC at the university level",
      type: "experience",
      emoji: "🚀",
      link: "https://gssoc.girlscript.tech"
    },
    {
      id: 6,
      title: "Project Manager",
      organization: "Hirehub",
      date: "Oct 2024 - Nov 2024",
      description: "Declared in top 5 project managers and received Goods as recognition",
      achievements: [
        "Reviewed 100+ PRs and 120+ issues"
      ],
      type: "experience",
      emoji: "📊",
      link: "https://hirehub.example.com"
    },
    {
      id: 7,
      title: "Open Source Contributor",
      organization: "SugarLabs, Zulip - MusicBlocks",
      date: "Nov 2024",
      description: "Made 4 PRs, 2 got merged",
      achievements: [
        "Solved 2 JavaScript related issues",
        "Worked on Django Backend issues"
      ],
      type: "experience",
      emoji: "🎵",
      link: "https://musicblocks.sugarlabs.org/"
    }
  ];

  return (
    <div className={`timeline-container ${scrollProgress}`} ref={timelineRef}>
      <h2 className="timeline-heading">My Journey <span className="emoji">🚀</span></h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item ${item.type} ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-emoji">{item.emoji}</div>
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-organization">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.organization}
                  </a>
                ) : (
                  item.organization
                )}
              </h4>
              <p className="timeline-description">{item.description}</p>
              {item.achievements && (
                <ul className="timeline-achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;