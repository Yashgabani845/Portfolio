'use client';

import { ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';
import './article.css';

interface Article {
  title: string;
  description: string;
  url: string;
  date: string;
}

const articles: Article[] = [
  {
    title: 'Understanding MobileNet: The AI Breakthrough That Makes Deep Learning Faster & Lighter',
    description: 'A comprehensive guide explaining MobileNet architecture layers and optimization techniques in a simplified manner.',
    url: 'https://medium.com/@gabaniyash846/understanding-mobilenet-the-ai-breakthrough-that-makes-deep-learning-faster-lighter-2429787d6059',
    date: '2024',
  },
  {
    title: 'Fine-tuning MobileNet for an ASL Detector: A Step-by-Step Guide',
    description: 'A detailed walkthrough of the process of fine-tuning MobileNet for American Sign Language detection.',
    url: 'https://medium.com/@gabaniyash846/fine-tuning-mobilenet-for-an-asl-detector-a-step-by-step-guide-ce65ea6156ee',
    date: '2024',
  },
];

export default function Articles() {
  return (
    <section className="articles-section">
      <div className="articles-container">
      <div className="achievements-header">
        <div className="achievements-subtitle">
          <BookOpen className="subtitle-icon" />
          <p>My articles</p>
        </div>
      </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-content">
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <div className="article-footer">
                  <span className="article-date">{article.date}</span>
                  <Link 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                  >
                    Read on Medium <ExternalLink className="external-link-icon" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
