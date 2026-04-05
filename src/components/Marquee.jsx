import './Marquee.css';

const ITEMS = [
  'HONEST', 'UNCOVERED', 'NO BIAS', 'REAL DRIVES',
  'CARS UNCOVERED', 'NO FAFF', 'JUST THE TRUTH', '41K SUBSCRIBERS',
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
