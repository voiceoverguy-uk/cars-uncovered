import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './LatestVideo.css';

export default function LatestVideo({ video, loading, error }) {
  const [playing, setPlaying] = useState(false);
  const [ref, revealed] = useReveal();

  if (loading) {
    return (
      <section className="section latest-section" id="latest">
        <div className="container">
          <div className="section-label">Latest Upload</div>
          <div className="latest-skeleton">
            <div className="skeleton-thumb" />
            <div className="skeleton-info">
              <div className="skeleton-line long" />
              <div className="skeleton-line medium" />
              <div className="skeleton-line short" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error === 'NO_API_KEY' || !video) {
    return (
      <section className={`section latest-section reveal-section ${revealed ? 'revealed' : ''}`} id="latest" ref={ref}>
        <div className="container">
          <div className="section-label">Latest Upload</div>
          <div className="section-title">Latest From The Channel</div>
          <div className="api-notice">
            <div className="api-notice-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3>Connect Your YouTube API Key</h3>
              <p>
                To show live video content, add a <code>VITE_YOUTUBE_API_KEY</code> environment variable.
                Get a free key in minutes at{' '}
                <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">
                  Google Cloud Console
                </a>
                .
              </p>
            </div>
          </div>
          <div className="latest-fallback">
            <div className="video-card-large">
              <a
                href="https://www.youtube.com/@carsuncoveredofficial/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="video-thumb-link"
              >
                <img src="/banner.jpg" alt="Cars Uncovered Videos" className="video-thumb-img" />
                <div className="play-overlay">
                  <div className="play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="video-meta">
                <h2>Watch All Videos on YouTube</h2>
                <p>71 videos covering everything from budget buys to dream cars — with a healthy dose of Howard's trademark wit.</p>
                <a
                  href="https://www.youtube.com/@carsuncoveredofficial/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section latest-section reveal-section ${revealed ? 'revealed' : ''}`} id="latest" ref={ref}>
      <div className="container">
        <div className="section-label">Latest Upload</div>
        <div className="divider" />
        <div className="latest-grid">
          <div className="latest-player">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              />
            ) : (
              <button className="video-preview" onClick={() => setPlaying(true)}>
                <img src={video.thumbnailUrl} alt={video.title} />
                <div className="play-overlay">
                  <div className="play-btn large">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="new-badge">New</div>
              </button>
            )}
          </div>

          <div className="latest-info">
            <h2 className="latest-title">{video.title}</h2>
            <div className="latest-meta">
              {video.publishedAt && (
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {new Date(video.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </span>
              )}
              {video.viewCount && (
                <span className="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {formatNum(video.viewCount)} views
                </span>
              )}
            </div>
            <p className="latest-desc">{truncate(video.description, 280)}</p>
            <div className="latest-actions">
              <button className="btn-primary" onClick={() => setPlaying(true)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Now
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Open on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatNum(n) {
  const num = parseInt(n, 10);
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
  return num.toString();
}

function truncate(str, len) {
  if (!str) return '';
  if (str.length <= len) return str;
  return str.slice(0, len).trim() + '…';
}
