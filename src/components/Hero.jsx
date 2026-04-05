import { useEffect, useRef, useState, useCallback } from 'react';
import './Hero.css';

function useCountUp(target, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start || !target) return;

    const startTime = performance.now();
    const startVal = 0;

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      setValue(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, start]);

  return value;
}

function StatItem({ rawValue, suffix, label, start, decimals = 0 }) {
  const animated = useCountUp(rawValue, 2000, start);

  let display;
  if (rawValue >= 1_000_000) {
    display = (animated / 1_000_000).toFixed(decimals || 1) + suffix;
  } else if (rawValue >= 1_000) {
    display = (animated / 1_000).toFixed(decimals || 1) + suffix;
  } else {
    display = animated.toString() + suffix;
  }

  return (
    <div className="hero-stat">
      <span className="hero-stat-value">{display}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

export default function Hero({ channelInfo }) {
  const [visible, setVisible] = useState(false);
  const [statsReady, setStatsReady] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setStatsReady(true), 600);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const subsRaw = channelInfo ? parseInt(channelInfo.subscriberCount, 10) : 41800;
  const viewsRaw = channelInfo ? parseInt(channelInfo.viewCount, 10) : 8147400;
  const videosRaw = channelInfo ? parseInt(channelInfo.videoCount, 10) : 71;

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-bg">
        <img src="/hero.png" alt="Howard Ritchie - Cars Uncovered" className="hero-img" />
        <div className="hero-overlay" />
      </div>

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <div className="hero-badge">Howard Ritchie&apos;s</div>
        <img src="/logo.jpg" alt="Cars Uncovered" className="hero-logo" />
        <h1 className="hero-title">C<span className="accent-a">A</span>RS<span className="accent">Uncovered</span></h1>
        <p className="hero-tagline">
          Honest reviews. Real drives. No bias. No faff.<br />
          Just the truth about your next car.
        </p>

        <div className="hero-cta">
          <a href="#latest" className="btn-primary">
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
          <StatItem
            rawValue={viewsRaw}
            suffix="M+"
            label="Total Views"
            start={statsReady}
          />
          <StatItem
            rawValue={videosRaw}
            suffix=""
            label="Videos"
            start={statsReady}
          />
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
