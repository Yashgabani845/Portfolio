"use client";

import { useState, useEffect, JSX } from "react";
import { Trophy, Code, Star, GitPullRequest, Users, Award, BookOpen } from "lucide-react";
import "./achievement.css";

interface Achievement {
  id: number;
  category: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string | null;
}

const Achievement = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [filteredAchievements, setFilteredAchievements] = useState<Achievement[]>([]);

  const categories = [
    { id: "all", label: "All" },
    { id: "hackathons", label: "Hackathons" },
    { id: "competitions", label: "Competitions" },
    { id: "opensource", label: "Open Source" },
    { id: "leadership", label: "Leadership" },
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      category: "hackathons",
      title: "DuHacks 4.0 Runner-up",
      description: "Secured 2nd place among 350+ teams with a sign language detector integration in a video call project.",
      icon: <Trophy className="achievement-icon" />,
      link: null,
    },
    {
      id: 2,
      category: "opensource",
      title: "Global Rank 83",
      description:
        "Achieved global rank 83 among 27k participants. Raised and resolved 100+ issues for bug fixes and improvements.",
      icon: <Award className="achievement-icon" />,
      link: null,
    },
    {
      id: 3,
      category: "leadership",
      title: "GirlScript Summer of Code",
      description: "Served as Campus Ambassador and Project Manager in GirlScript Summer of Code. Recognized among top 5 project managers.",
      icon: <Users className="achievement-icon" />,
      link: "https://gssoc.girlscript.tech/leaderboard?year=2024",
    },
    {
      id: 4,
      category: "competitions",
      title: "CodeChef 3-Star Rating",
      description: "Achieved 3-star rating on CodeChef with a rating of 1636. CodeChef Handle: gabaniyash846",
      icon: <Star className="achievement-icon" />,
      link: "https://www.codechef.com/users/gabaniyash846",
    },
    {
      id: 5,
      category: "competitions",
      title: "CodeChef Competitions",
      description: "Secured global rank 191 at CodeChef Starter 136 and global rank 404 at CodeChef Starter 135.",
      icon: <Trophy className="achievement-icon" />,
      link: "https://www.codechef.com/users/gabaniyash846",
    },
    {
      id: 6,
      category: "competitions",
      title: "DSA Problem Solving",
      description: "Solved 400+ DSA problems on various platforms including LeetCode and CodeChef.",
      icon: <Code className="achievement-icon" />,
      link: "https://leetcode.com/u/gabaniyash846/",
    },
    {
      id: 7,
      category: "opensource",
      title: "Open Source Contributions",
      description: "Contributed to industrial open source project repositories including Sugar Labs and Zulip.",
      icon: <GitPullRequest className="achievement-icon" />,
      link: "https://github.com/sugarlabs/musicblocks/pulls?q=is%3Apr+is%3Aclosed+author%3AYashgabani845",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    setLoading(true);

    setTimeout(() => {
      filterAchievements(activeCategory);
      setLoading(false);
    }, 800);

    const handleScroll = () => {
      document.querySelectorAll(".achievement-card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      filterAchievements(activeCategory);
      setLoading(false);
    }, 500);
  }, [activeCategory]);

  const filterAchievements = (category: string) => {
    setFilteredAchievements(
      category === "all" ? achievements : achievements.filter((achievement) => achievement.category === category)
    );
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <section className={`achievements-section ${isVisible ? "visible" : ""}`}>
      <div className="achievements-header">
        <div className="achievements-subtitle">
          <BookOpen className="subtitle-icon" />
          <p>Milestones that mark my journey</p>
        </div>
      </div>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="achievements-container">
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="achievement-card visible"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-content">
                  <div className="achievement-icon-container">{achievement.icon}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  {achievement.link && (
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                      View Details
                    </a>
                  )}
                </div>
                <div className="achievement-decoration"></div>
              </div>
            ))
          ) : (
            <p className="no-achievements">No achievements found for this category.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Achievement;
