import './Contact.css';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="section-label">Work With Us</div>
            <div className="divider" />
            <h2 className="section-title">Partnerships &amp; Press</h2>
            <p className="contact-intro">
              Cars Uncovered reaches over 41,800 engaged car buyers across the UK and beyond.
              If you want honest, authentic exposure to an audience that actually listens —
              Howard's your person.
            </p>

            <div className="contact-cards">
              <a href="mailto:team@hellodistinctive.com" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Partnerships &amp; Campaigns</span>
                  <span className="contact-card-value">team@hellodistinctive.com</span>
                </div>
                <div className="contact-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>

              <a href="mailto:laura@meetthejoneses.co.uk" className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Voiceover Enquiries</span>
                  <span className="contact-card-value">laura@meetthejoneses.co.uk</span>
                </div>
                <div className="contact-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@carsuncoveredofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon yt">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">YouTube Channel</span>
                  <span className="contact-card-value">@carsuncoveredofficial</span>
                </div>
                <div className="contact-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-banner">
              <img src="/banner.jpg" alt="Cars Uncovered" />
              <div className="contact-banner-overlay">
                <div className="contact-stat-grid">
                  {[
                    { v: '41.8K', l: 'Subscribers' },
                    { v: '8M+', l: 'Total Views' },
                    { v: '71', l: 'Videos' },
                    { v: '2016', l: 'Est.' },
                  ].map(s => (
                    <div className="contact-stat" key={s.l}>
                      <span className="contact-stat-v">{s.v}</span>
                      <span className="contact-stat-l">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@carsuncoveredofficial?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="subscribe-block"
            >
              <div className="subscribe-text">
                <strong>Like what you see?</strong>
                <span>Join 41,800+ subscribers who get notified when Howard reviews something great.</span>
              </div>
              <div className="subscribe-btn">Subscribe</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
