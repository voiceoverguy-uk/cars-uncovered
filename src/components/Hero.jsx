import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const STATS = [
  { value: '41.8K', label: 'Subscribers' },
  { value: '8M+', label: 'Views' },
  { value: '71', label: 'Videos' },
];

export default function Hero({ channelInfo }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = channelInfo
    ? [
        { value: formatSubs(channelInfo.subscriberCount), label: 'Subscribers' },
        { value: formatViews(channelInfo.viewCount), label: 'Total Views' },
        { value: channelInfo.videoCount, label: 'Videos' },
      ]
    : STATS;

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-bg">
        <img src="/hero.png" alt="Howard Ritchie - Cars Uncovered" className="hero-img" />
        <div className="hero-overlay" />
      </div>

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <div className="hero-badge">Howard Ritchie&apos;s</div>
        <img src="/logo.jpg" alt="Cars Uncovered" className="hero-logo" />
        <h1 className="hero-title">Cars<span className="accent">Uncovered</span></h1>
        <p className="hero-tagline">
          Honest reviews. Real drives. No bias. No faff.<br />
          Just the truth about your next car.
        </p>

        <div className="hero-cta">
          <a
            href="#latest"
            className="btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Watch Latest
          </a>
          <a
            href="https://www.youtube.com/@carsuncoveredofficial?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>

        <div className="hero-stats">
          {stats.map(s => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

function formatSubs(n) {
  const num = parseInt(n, 10);
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

function formatViews(n) {
  const num = parseInt(n, 10);
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M+`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
  return num.toString();
}
