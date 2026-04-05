import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '#latest', label: 'Latest' },
    { href: '#playlists', label: 'Playlists' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <img src="/logo.jpg" alt="Cars Uncovered" />
          <span>C<span style={{color:'#FF8110'}}>A</span>RS Uncovered</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@carsuncoveredofficial?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-subscribe"
            onClick={() => setMenuOpen(false)}
          >
            Subscribe
          </a>
        </div>

        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
