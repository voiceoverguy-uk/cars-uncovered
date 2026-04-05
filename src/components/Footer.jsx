import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.jpg" alt="Cars Uncovered" className="footer-logo" />
            <div>
              <div className="footer-name">Cars Uncovered</div>
              <div className="footer-subtitle">Howard Ritchie&apos;s</div>
            </div>
          </div>

          <nav className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#latest">Latest</a>
            <a href="#playlists">Playlists</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {year} Cars Uncovered. All rights reserved.</span>
          <div className="footer-bottom-right">
            <span className="footer-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <circle cx="12" cy="10" r="3"/>
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/>
              </svg>
              United Kingdom
            </span>
            <a
              href="https://www.youtube.com/@carsuncoveredofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-yt-text"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
