import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About() {
  const [ref, revealed] = useReveal();

  return (
    <section className={`section about-section reveal-section ${revealed ? 'revealed' : ''}`} id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-img-wrap">
              <img src="/hero.png" alt="Howard Ritchie - Cars Uncovered" />
              <div className="about-img-accent" />
            </div>
            <div className="about-channel-link">
              <a
                href="https://www.youtube.com/@carsuncoveredofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="yt-channel-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
                </svg>
                @carsuncoveredofficial
              </a>
            </div>
          </div>

          <div className="about-text-col">
            <div className="section-label">About the Channel</div>
            <div className="divider" />
            <h2 className="section-title">Meet Howard Ritchie</h2>

            <div className="about-body">
              <p className="about-lead">
                Howard Ritchie's Cars Uncovered is the UK's most honest voice on cars — reviews, drives, and buying advice delivered straight, with a healthy side of wit.
              </p>
              <p>
                Since launching in January 2016, Cars Uncovered has become the channel car buyers actually trust. No manufacturer money. No soft-pedalling bad cars. No endless positivity. Just Howard, a camera, and whatever car he happens to be standing next to that week.
              </p>
              <p>
                From budget runabouts to dream machines, head-to-head comparisons to hidden buying tricks, Howard gives you the real story — so you can walk into a dealership knowing exactly what you're getting into. The result? Over <strong>8 million views</strong> and a community of car buyers who refuse to be messed around.
              </p>

              <blockquote className="about-quote">
                "Your next car, Uncovered."
              </blockquote>

              <div className="about-pillars">
                {[
                  { icon: '✓', label: 'Honest', desc: 'No paid promotions, no bias' },
                  { icon: '✓', label: 'Giraffes', desc: "Howard is a big fan of giraffes" },
                  { icon: '✓', label: 'Useful', desc: 'Real advice that saves money' },
                ].map(p => (
                  <div className="pillar" key={p.label}>
                    <span className="pillar-icon">{p.icon}</span>
                    <div>
                      <strong>{p.label}</strong>
                      <span>{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
