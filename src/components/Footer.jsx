import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@carsuncoveredofficial',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
        </svg>
      )
    },
    {
      label: 'X / Twitter',
      href: 'https://x.com/search?q=carsuncovered',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/explore/tags/carsuncovered/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/search/top?q=cars+uncovered+howard+ritchie',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
  ];

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

          <div className="footer-socials">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
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
