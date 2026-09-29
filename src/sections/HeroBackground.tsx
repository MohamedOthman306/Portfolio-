import './HeroBackground.css';

export default function HeroBackground() {
  return (
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__bg-grid" />
      <svg
        className="hero__bg-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <linearGradient id="heroBackgroundLine" x1="760" y1="170" x2="1400" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--primary)" stopOpacity="0.08" />
            <stop offset="0.58" stopColor="var(--secondary)" stopOpacity="0.42" />
            <stop offset="1" stopColor="var(--highlight)" stopOpacity="0.26" />
          </linearGradient>
          <linearGradient id="heroBackgroundLineLower" x1="790" y1="760" x2="1390" y2="620" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--primary)" stopOpacity="0.08" />
            <stop offset="0.62" stopColor="var(--secondary)" stopOpacity="0.34" />
            <stop offset="1" stopColor="var(--highlight)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path
          className="hero__bg-line hero__bg-line--upper"
          d="M770 242C910 220 954 108 1082 131C1194 151 1282 268 1405 202"
          stroke="url(#heroBackgroundLine)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          className="hero__bg-line hero__bg-line--lower"
          d="M790 698C932 760 1021 795 1120 720C1222 643 1308 590 1400 635"
          stroke="url(#heroBackgroundLineLower)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <circle className="hero__bg-point hero__bg-point--one" cx="930" cy="185" r="2.5" fill="var(--secondary)" />
        <circle className="hero__bg-point hero__bg-point--two" cx="1160" cy="145" r="2.8" fill="var(--secondary)" />
        <circle className="hero__bg-point hero__bg-point--three" cx="1370" cy="220" r="2.5" fill="var(--highlight)" />
        <circle className="hero__bg-point hero__bg-point--four" cx="1010" cy="765" r="2.4" fill="var(--secondary)" />
        <circle className="hero__bg-point hero__bg-point--five" cx="1320" cy="610" r="2.7" fill="var(--secondary)" />
        <circle className="hero__bg-point hero__bg-point--six" cx="1350" cy="330" r="2" fill="var(--primary)" />
        <circle className="hero__bg-point hero__bg-point--seven" cx="1390" cy="455" r="2.7" fill="var(--secondary)" />
        <circle className="hero__bg-point hero__bg-point--eight" cx="1360" cy="745" r="2.3" fill="var(--highlight)" />
        <circle className="hero__bg-point hero__bg-point--nine" cx="850" cy="590" r="2.2" fill="var(--primary)" />
        <circle className="hero__bg-point hero__bg-point--ten" cx="770" cy="340" r="2.5" fill="var(--secondary)" />
        <circle className="hero__bg-point hero__bg-point--eleven" cx="905" cy="815" r="2.8" fill="var(--secondary)" />

        <g className="hero__bg-chart hero__bg-chart--bars" transform="translate(1332 386)">
          <rect className="hero__bg-bar hero__bg-bar--one" x="0" y="28" width="8" height="16" rx="4" fill="var(--secondary)" />
          <rect className="hero__bg-bar hero__bg-bar--two" x="16" y="20" width="8" height="24" rx="4" fill="var(--secondary)" />
          <rect className="hero__bg-bar hero__bg-bar--three" x="32" y="12" width="8" height="32" rx="4" fill="var(--secondary)" />
          <rect className="hero__bg-bar hero__bg-bar--four" x="48" y="18" width="8" height="26" rx="4" fill="var(--secondary)" />
          <rect className="hero__bg-bar hero__bg-bar--five" x="64" y="4" width="8" height="40" rx="4" fill="var(--highlight)" />
        </g>

        <g className="hero__bg-chart hero__bg-chart--sparkline" transform="translate(1320 524)">
          <path
            className="hero__bg-sparkline"
            d="M0 38C13 31 20 33 31 25C42 17 50 23 61 17C73 11 79 13 94 3"
            pathLength="1"
            stroke="var(--secondary)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="hero__bg-sparkline-end" cx="94" cy="3" r="2.8" fill="var(--highlight)" />
        </g>
      </svg>
    </div>
  );
}
