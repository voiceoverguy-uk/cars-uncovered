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

          <div className="footer-yt">
            <a
              href="https://www.youtube.com/@carsuncoveredofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-yt-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Cars Uncovered. All rights reserved.</span>
          <span className="footer-location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <circle cx="12" cy="10" r="3"/>
              <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/>
            </svg>
            United Kingdom
          </span>
        </div>
      </div>
    </footer>
  );
}
